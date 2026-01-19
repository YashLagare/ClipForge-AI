import { motion } from 'framer-motion';
import { footerLinks } from '../data/data';

export default function Footer() {

    return (
        <motion.footer className="bg-white/6 border-t border-white/6 pt-10 text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.5 }}
        >
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-white/10">
                    <div>
                        <img src='/final-logo.png' alt="logo" className="h-20 w-40" />
                        <p className="max-w-[410px] mt-6 text-sm leading-relaxed">
                            We help brands create high-converting short video ads using AI—faster, smarter, and at scale.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
                        {footerLinks.map((section, index) => (
                            <div key={index}>
                                <h3 className="font-semibold text-base text-white md:mb-5 mb-2">
                                    {section.title}
                                </h3>
                                <ul className="text-sm space-y-1">
                                    {section.links.map(
                                        (link: { name: string; url: string; target?: string }, i) => (
                                            <li key={i}>
                                                <a
                                                    href={link.url}
                                                    target={link.target}
                                                    rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                                                    className="hover:text-white transition"
                                                >
                                                    {link.name}
                                                </a>
                                            </li>
                                        )
                                    )}

                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <p className="py-4 text-center text-sm text-gray-400">
                    © {new Date().getFullYear()} {' '}
                    <a href="https://www.instagram.com/yashlagare/?hl=en ">
                        Clipforge AI
                    </a>
                    . All rights reserved.
                </p>
            </div>
        </motion.footer>
    );
};