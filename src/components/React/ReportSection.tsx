import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function ReportSection() {
    const reportRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: reportRef,
        offset: ["start end", "end start"]
    });

    const reportY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
    return (
        <section ref={reportRef} className="py-40 bg-white overflow-hidden relative border-b border-slate-800/10">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl text-slate-800 mb-4">The Intelligence Output</h2>
                    <p className="font-mono text-xs uppercase tracking-widest text-slate-800/40">Sample Diagnostic Data</p>
                </div>

                <div className="relative h-[600px] w-full max-w-5xl mx-auto border border-slate-800/10 bg-slate-800/5 overflow-hidden shadow-2xl">
                    <motion.div
                        style={{ y: reportY }}
                        className="absolute top-0 left-0 w-full p-12 space-y-12 blur-[1px]"
                    >
                        {/* Mock Report Header */}
                        <div className="border-b border-slate-800/20 pb-8">
                            <h4 className="font-serif text-3xl text-slate-800 mb-2">Diagnostic Overview</h4>
                            <div className="flex gap-8 font-mono text-xs text-slate-800/60 uppercase tracking-widest">
                                <span>Client: Redacted</span>
                                <span>Date: Q3 2025</span>
                                <span>Status: Critical</span>
                            </div>
                        </div>

                        {/* Mock Data Section 1 */}
                        <div className="grid grid-cols-3 gap-8">
                            <div className="col-span-2 space-y-4">
                                <div className="h-4 bg-slate-800/20 w-3/4" />
                                <div className="h-4 bg-slate-800/20 w-full" />
                                <div className="h-4 bg-slate-800/20 w-5/6" />
                            </div>
                            <div className="border border-red-500/30 bg-red-500/5 p-6 relative">
                                <motion.div
                                    className="absolute inset-0 border border-red-500"
                                    animate={{ opacity: [0, 1, 0], scale: [0.95, 1.05, 0.95] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                                <div className="font-serif text-4xl text-red-600 mb-2">40%</div>
                                <div className="font-mono text-[10px] text-red-600/80 uppercase tracking-widest">Bounce Rate on Impact Page</div>
                            </div>
                        </div>

                        {/* Mock Data Section 2 */}
                        <div className="grid grid-cols-3 gap-8">
                            <div className="border border-orange-500/30 bg-orange-500/5 p-6 relative">
                                <motion.div
                                    className="absolute inset-0 border border-orange-500"
                                    animate={{ opacity: [0, 1, 0], scale: [0.95, 1.05, 0.95] }}
                                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                                />
                                <div className="font-serif text-4xl text-orange-600 mb-2">2.4s</div>
                                <div className="font-mono text-[10px] text-orange-600/80 uppercase tracking-widest">TTFB Latency</div>
                            </div>
                            <div className="col-span-2 space-y-4">
                                <div className="h-4 bg-slate-800/20 w-full" />
                                <div className="h-4 bg-slate-800/20 w-4/5" />
                                <div className="h-4 bg-slate-800/20 w-full" />
                            </div>
                        </div>

                        {/* Mock Data Section 3 */}
                        <div className="space-y-4">
                            <div className="h-4 bg-slate-800/20 w-full" />
                            <div className="h-4 bg-slate-800/20 w-full" />
                            <div className="h-4 bg-slate-800/20 w-2/3" />
                        </div>
                    </motion.div>

                    {/* Overlay Gradient to fade out top/bottom */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/80 via-transparent to-white/80" />
                </div>
            </div>
        </section>
    );
}