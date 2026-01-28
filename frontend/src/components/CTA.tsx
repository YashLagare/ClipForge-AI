import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { GhostButton } from './Buttons';

export default function CTA() {
    const navigate = useNavigate();
    return (
        <section className="py-20 2xl:pb-32 px-4">
            <div className="container mx-auto max-w-3xl">
                <div className="rounded-3xl bg-linear-to-b from-violet-900/20 to-violet-900/5 border border-violet-500/20 p-12 md:p-16 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20" />
                    <div className="relative z-10">
                        <motion.h2 className="text-2xl sm:text-4xl font-semibold mb-6"
                            initial={{ y: 60, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
                        >
                            Create high-converting ads in minutes
                        </motion.h2>
                        <motion.p className="max-sm:text-sm text-slate-400 mb-10 max-w-xl mx-auto"
                            initial={{ y: 60, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.2 }}
                        >
                           Generate scroll-stopping ad creatives, headlines, and short videos using AI — no design skills, no long production cycles.
                        </motion.p>
                        <motion.div
                            initial={{ y: 60, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.3 }}
                        >   
                        <GhostButton className="px-8 py-3 gap-2" onClick={() => navigate('/generate') }>
                                Generate ads now <ArrowRightIcon size={20} />
                            </GhostButton>
                        </motion.div>   
                    </div>
                </div>
            </div>
        </section>
    );
};