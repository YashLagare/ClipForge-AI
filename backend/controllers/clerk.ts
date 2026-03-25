import { verifyWebhook } from '@clerk/express/webhooks';
import * as Sentry from "@sentry/node";
import { Request, Response } from 'express';
import { prisma } from '../lib/prisma.js';

const clerkWebhooks = async (req: Request, res: Response) => {
    try {
        // console.log("=== WEBHOOK DEBUG START ===");
        // console.log("Request headers:", req.headers);
        // console.log("Request body type:", typeof req.body);
        // console.log("Request body sample:", req.body ? req.body.toString().substring(0, 200) : "empty");
        
        const evt: any = await verifyWebhook(req)
        
        // console.log("Verified event:", evt);
        // console.log("Event type:", evt.type);

        //get data from request
        const { data, type } = evt
        
        // console.log("Webhook type:", type);
        // console.log("Webhook data keys:", data ? Object.keys(data) : "data is undefined");

        //switch case for different types of events
        switch (type) {
            case 'user.created': {
                if (!data) {
                    console.error("No data in webhook event");
                    return res.status(400).json({ message: "No data in webhook event" });
                }
                
                const email = data.email_addresses?.[0]?.email_address;
                const name = (data.first_name || "") + " " + (data.last_name || "");
                
                //console.log("Creating user with:", { id: data.id, email, name });
                
await prisma.user.create({
                    data: {
                        id: data.id,
                        email: email,
                        name: name,
                        image: data.image_url,
                        credits: 20,
                    }
                })
                break;
            }

            case 'user.updated': {
                if (!data) {
                    console.error("No data in webhook event");
                    return res.status(400).json({ message: "No data in webhook event" });
                }
                
                const email = data.email_addresses?.[0]?.email_address;
                const name = (data.first_name || "") + " " + (data.last_name || "");
                
                await prisma.user.update({
                    where: {
                        id: data.id
                    },
                    data: {
                        email: email,
                        name: name,
                        image: data.image_url,
                    }
                })
                break;
            }

            case 'user.deleted': {
                await prisma.user.delete({
                    where: {
                        id: data.id
                    },
                })
                break;
            }

            case "paymentAttempt.updated": {
                if ((data.charge_type === "recurring" || data.charge_type === "checkout") && data.status === "paid") {
                    const credits = { pro: 80, premium: 240, }
                    const clerkUserId = data?.payer?.user_id;
                    const planId: keyof typeof credits = data?.subscription_items?.[0]?.plan?.slug;

                    if (planId !== "pro" && planId !== "premium") {
                        return res.status(400).json({ message: "Invalid plan" })
                    }

                    // console.log(planId);

                    await prisma.user.update({
                        where: {
                            id: clerkUserId
                        },
                        data: {
                            credits: { increment: credits[planId] }
                        }
                    })
                }
                break;
            }

            default:
                break;

        }
        res.status(200).json({ message: "Webhook received : " + type })
    } catch (error: any) {
        Sentry.captureException(error)
        console.error("=== WEBHOOK ERROR ===");
        console.error("Error message:", error.message);
        console.error("Error stack:", error.stack);
        res.status(500).json({ message: error.message });
    }
}

export default clerkWebhooks;