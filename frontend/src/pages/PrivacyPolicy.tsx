import { motion } from 'framer-motion';
import { Database, Eye, Lock, Mail, Shield, UserCheck } from 'lucide-react';

export default function PrivacyPolicy() {
    const sections = [
        {
            icon: Shield,
            title: "1. Introduction",
            content: "Your privacy matters to us. This Privacy Policy explains how ClipForge AI (\"we\", \"our\", \"us\") collects, uses, and protects your information when you use our website and services.\n\nBy using ClipForge AI, you agree to the practices described in this policy."
        },
        {
            icon: Database,
            title: "2. Information We Collect",
            subsections: [
                {
                    subtitle: "a. Information You Provide",
                    items: [
                        "Name and email address",
                        "Account login details",
                        "Billing information (processed securely via third-party providers)",
                        "Content you submit to generate ads (text, prompts, media)"
                    ]
                },
                {
                    subtitle: "b. Automatically Collected Information",
                    items: [
                        "IP address and device information",
                        "Browser type and usage data",
                        "Pages visited and interaction data"
                    ]
                }
            ]
        },
        {
            icon: Eye,
            title: "3. How We Use Your Information",
            content: "We use your data to:",
            items: [
                "Provide and improve our AI ad generation services",
                "Create and manage user accounts",
                "Process payments and subscriptions",
                "Improve product performance and user experience",
                "Communicate updates, support, and important notices"
            ]
        },
        {
            icon: Lock,
            title: "4. AI & Generated Content",
            items: [
                "Content you submit is used only to generate outputs requested by you",
                "We do not sell or publicly share your generated ads",
                "Generated content remains your responsibility and ownership"
            ]
        },
        {
            icon: UserCheck,
            title: "5. Data Sharing",
            content: "We do not sell your personal data.\n\nWe may share limited data with:",
            items: [
                "Payment processors",
                "Analytics providers",
                "Cloud infrastructure providers"
            ],
            footer: "Only when necessary to operate our service."
        }
    ];

    const additionalSections = [
        {
            title: "6. Data Security",
            content: "We implement reasonable technical and organizational measures to protect your data. However, no system is 100% secure."
        },
        {
            title: "7. Cookies",
            content: "We use cookies to:",
            items: [
                "Maintain sessions",
                "Improve performance",
                "Analyze usage"
            ],
            footer: "You can control cookies via your browser settings."
        },
        {
            title: "8. Your Rights",
            content: "You may:",
            items: [
                "Request access to your data",
                "Request deletion of your account",
                "Opt out of non-essential communications"
            ],
            footer: "Contact us to exercise these rights."
        },
        {
            title: "9. Changes to This Policy",
            content: "We may update this policy occasionally. Changes will be posted on this page."
        },
        {
            title: "10. Contact",
            content: "If you have questions about this Privacy Policy, contact us at:",
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
                        Privacy Policy
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

                                {section.subsections && section.subsections.map((sub, i) => (
                                    <div key={i} className="mb-4">
                                        <h3 className="text-base font-semibold mb-2">{sub.subtitle}</h3>
                                        <ul className="space-y-2">
                                            {sub.items.map((item, j) => (
                                                <li key={j} className="flex items-start gap-3 text-gray-300 text-sm">
                                                    <span className="text-violet-400 mt-1">•</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}

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