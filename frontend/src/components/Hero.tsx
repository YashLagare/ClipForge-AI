import { motion } from 'framer-motion';
import { ArrowRight, Check, Play, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GhostButton, PrimaryButton } from './Buttons';
import Floating3DCards from './Floating3DCards';

export default function Hero() {

    const trustedUserImages = [
        '/trcusteduser1.jpeg',
        '/trcusteduser2.jpeg',
        '/trcusteduser3.jpeg',
    ];

    const trustedLogosText = [
        "AI-Powered",
        "Short-Form Video Ads",
        "Prompt to Ad",
        "Fast Generation",
        "Scalable SaaS",
        "Built for Creators",
        "Marketing Automation",
    ];

    return (
        <>
            <section id="home" className="relative z-10">
                <div className="relative z-10 max-w-6xl mx-auto px-4 min-h-screen max-md:w-screen max-md:overflow-hidden pt-32 md:pt-26 flex items-center justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        <div className="text-left">
                            <motion.a href="https://yashlagare.github.io/MyPortfolio/" target="_blank" className="inline-flex items-center gap-3 pl-3 pr-4 py-1.5 rounded-full bg-white/10 mb-6 justify-start"
                                initial={{ y: 60, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
                            >
                                <div className="flex -space-x-2">
                                    {trustedUserImages.map((src, i) => (
                                        <img
                                            key={i}
                                            src={src}
                                            alt={`Client ${i + 1}`}
                                            className="size-6 rounded-full border border-black/50"
                                            width={40}
                                            height={40}
                                        />
                                    ))}
                                </div>
                                <span className="text-xs text-gray-200/90">
                                    Trusted by 10,000+ creators
                                </span>
                            </motion.a>

                            <motion.h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 max-w-xl"
                                initial={{ y: 60, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}
                            >
                                We forge AI-powered <br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-indigo-400">
                                    short video ads that convert
                                </span>
                            </motion.h1>

                            <motion.p className="text-gray-300 max-w-lg mb-8"
                                initial={{ y: 60, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.2 }}
                            >
                                An AI-powered platform that helps brands generate high-converting short video ads in minutes — from idea to ready-to-publish creatives.
                            </motion.p>

                            <motion.div className="flex flex-col sm:flex-row items-center gap-4 mb-8"
                                initial={{ y: 60, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.3 }}
                            >
                                <Link to="/" className="w-full sm:w-auto">
                                    <PrimaryButton className="max-sm:w-full py-3 px-7">
                                        Get started for free
                                        <ArrowRight className="size-4" />
                                    </PrimaryButton>
                                </Link>

                                <Link to="/community">
                                    <GhostButton className="max-sm:w-full max-sm:justify-center py-3 px-5">
                                        <Play className="size-4" />
                                        Watch demo
                                    </GhostButton>
                                </Link>

                            </motion.div>

                            <motion.div className="flex sm:inline-flex overflow-hidden items-center max-sm:justify-center text-sm text-gray-200 bg-white/10 rounded"
                                initial={{ y: 60, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}
                            >
                                <div className="flex items-center gap-2 p-2 px-3 sm:px-6.5 hover:bg-white/3 transition-colors">
                                    <Zap className="size-4 text-sky-500" />
                                    <div>
                                        <div>AI-powered ad creation</div>
                                        <div className="text-xs text-gray-400">
                                            Generate ads in minutes
                                        </div>
                                    </div>
                                </div>

                                <div className="hidden sm:block h-6 w-px bg-white/6" />

                                <div className="flex items-center gap-2 p-2 px-3 sm:px-6.5 hover:bg-white/3 transition-colors">
                                    <Check className="size-4 text-cyan-500" />
                                    <div>
                                        <div>Built for performance</div>
                                        <div className="text-xs text-gray-400">
                                            Optimized for short-form platforms
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right: Stats & Features Card */}
                        <Floating3DCards />
                    </div>
                </div>
            </section>

            {/* LOGO MARQUEE */}
            <motion.section className="border-y border-white/6 bg-white/1 max-md:mt-10"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
            >
                <div className="max-w-6xl mx-auto px-6">
                    <div className="w-full overflow-hidden py-6">
                        <div className="flex gap-14 items-center justify-center animate-marquee whitespace-nowrap">
                            {trustedLogosText.concat(trustedLogosText).map((logo, i) => (
                                <span
                                    key={i}
                                    className="mx-6 text-sm md:text-base font-semibold text-gray-400 hover:text-gray-300 tracking-wide transition-colors"
                                >
                                    {logo}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    );
};