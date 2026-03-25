declare global {
    namespace Express {
        interface Request {
            auth: ()=> {
                userId: string;
                has: (permission: any)=> boolean
            };
            plan: string;
            file: any;
        }
        interface CreateProjectBody {
            name?: string;
            aspectRatio?: string;
            userPrompt?: string;
            productName: string;
            productDescription?: string;
            targetLength?: string;
            userId: string;
        }
    }
}

export { };

