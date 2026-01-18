import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, CreditCard, FileText, Mail } from 'lucide-react';

export default function TermsOfService() {
    const sections = [
        {
            icon: FileText,
            title: "1. Acceptance of Terms",
            content: "By accessing or using ClipForge AI, you agree to these Terms of Service. If you do not agree, do not use the platform."
        },
        {
            icon: CheckCircle,
            title: "2. Description of Service",
            content: "ClipForge AI provides AI-powered tools to generate advertising creatives, copy, and related content."
        },
        {
            icon: CheckCircle,
            title: "3. User Responsibilities",
            content: "You agree to:",
            items: [
                "Provide accurate account information",
                "Use the service legally and ethically",
                "Not misuse, abuse, or reverse-engineer the platform"
            ],
            footer: "You are responsible for all activity under your account."
        },
        {
            icon: FileText,
            title: "4. Generated Content",
            items: [
                "AI-generated outputs are provided \"as-is\"",
                "You are responsible for reviewing content before publishing ads",
                "We do not guarantee ad performance, approval, or results"
            ]
        },
        {
            icon: CreditCard,
            title: "5. Payments & Subscriptions",
            items: [
                "Paid plans are billed according to the selected plan",
                "Subscription fees are non-refundable unless required by law",
                "We may change pricing with prior notice"
            ]
        },
        {
            icon: AlertTriangle,
            title: "6. Prohibited Use",
            content: "You may not use ClipForge AI to:",
            items: [
                "Generate illegal, deceptive, or harmful ads",
                "Violate intellectual property rights",
                "Promote scams, hate, or misinformation"
            ],
            footer: "Violation may result in account suspension or termination."
        }
    ];

    const additionalSections = [
        {
            title: "7. Termination",
            content: "We reserve the right to suspend or terminate accounts that violate these terms, with or without notice."
        },
        {
            title: "8. Limitation of Liability",
            content: "ClipForge AI is not liable for:",
            items: [
                "Lost revenue or business outcomes",
                "Ad rejection or platform penalties",
                "Indirect or consequential damages"
            ],
            footer: "Use the platform at your own risk."
        },
        {
            title: "9. Modifications",
            content: "We may update these Terms at any time. Continued use means acceptance of the updated terms."
        },
        {
            title: "10. Governing Law",
            content: "These Terms are governed by the laws of your operating jurisdiction."
        },
        {
            title: "11. Contact",
            content: "For questions regarding these Terms, contact:",
            email: "support@clipforge.ai → forwards to yashlagare77@gmail.com"
        }
    ];

    return (
        <section className="py-20 2xl:py-32 mt-8">
            <div className="max-w-4xl mx-auto px-4">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ y: 60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Terms of Service
                    </h1>

                    <p className="text-gray-400">
                        Last updated: 18 January 2025
                    </p>
                </motion.div>

                {/* Single Container with All Sections */}
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.2 }}
                    className="rounded-2xl p-6 sm:p-8 bg-white/3 border border-white/6 transition duration-300 hover:border-white/15"
                >
                    {/* Main Sections */}
                    {sections.map((section, index) => {
                        const Icon = section.icon;
                        return (
                            <div key={index} className={index > 0 ? "pt-8 mt-8 border-t border-white/6" : ""}>
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-violet-900/20 flex items-center justify-center">
                                        <Icon className="size-6 text-violet-400" />
                                    </div>
                                    <h2 className="text-xl md:text-2xl font-semibold pt-2">
                                        {section.title}
                                    </h2>
                                </div>

                                {section.content && (
                                    <p className="text-gray-300 text-sm leading-relaxed mb-4 whitespace-pre-line">
                                        {section.content}
                                    </p>
                                )}

                                {section.items && (
                                    <ul className="space-y-2 mb-4">
                                        {section.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                                                <span className="text-violet-400 mt-1">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {section.footer && (
                                    <p className="text-gray-400 text-sm italic mt-4">
                                        {section.footer}
                                    </p>
                                )}
                            </div>
                        );
                    })}

                    {/* Additional Sections */}
                    {additionalSections.map((section, index) => (
                        <div key={index} className="pt-8 mt-8 border-t border-white/6">
                            <h2 className="text-xl md:text-2xl font-semibold mb-4">
                                {section.title}
                            </h2>

                            {section.content && (
                                <p className="text-gray-300 text-sm leading-relaxed mb-4 whitespace-pre-line">
                                    {section.content}
                                </p>
                            )}

                            {section.items && (
                                <ul className="space-y-2 mb-4">
                                    {section.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                                            <span className="text-violet-400 mt-1">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {section.footer && (
                                <p className="text-gray-400 text-sm italic mt-4">
                                    {section.footer}
                                </p>
                            )}

                            {section.email && (
                                <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-900/20 border border-violet-400/20">
                                    <Mail className="size-4 text-violet-400" />
                                    <a href={`mailto:${section.email}`} className="text-violet-300 hover:text-violet-200 transition-colors text-sm">
                                        {section.email}
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}
                </motion.div>
                {/* Footer Note */}
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.5 }}
                    className="mt-12 text-center"
                >
                    <p className="text-gray-500 text-sm">
                        © 2026 ClipForge AI. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}