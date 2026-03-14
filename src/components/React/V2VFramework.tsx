import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import V2VImage1 from "@/assets/images/V2V-image-1.avif";
import V2VImage2 from "@/assets/images/V2V-image-2.avif";
import V2VImage3 from "@/assets/images/V2V-image-3.avif";

const phases = [
    {
        id: '01',
        title: 'Strategic Alignment',
        description: "We map your organization's information into Digital DNA so you can be more easily discoverable by AI",
        image: V2VImage1,
        metric: '100% Alignment'
    },
    {
        id: '02',
        title: 'Technical Soul',
        description: 'High-performance infrastructure built on modern stacks. The invisible engine that powers your mission.',
        image: V2VImage2,
        metric: '< 100ms Latency'
    },
    {
        id: '03',
        title: 'Global Impact',
        description: 'Aligns your digital presence so that it resonates across borders and scales with your ambition.',
        image: V2VImage3,
        metric: '99+ Lighthouse'
    }
];

// Easing from interaction-design skill
const easeOut = [0.16, 1, 0.3, 1] as const;

interface V2VFrameworkProps {
    v2v1?: string;
    v2v2?: string;
    v2v3?: string;
}

export default function V2VFramework({ v2v1, v2v2, v2v3 }: V2VFrameworkProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    // Overwrite phase images with optimized props if they exist
    const optimizedPhases = phases.map((phase, i) => {
        const optimizedSrc = i === 0 ? v2v1 : i === 1 ? v2v2 : v2v3;
        return {
            ...phase,
            image: optimizedSrc ? { src: optimizedSrc } : phase.image
        };
    });

    // Offset offset: ["start start", "end end"]
    // Distance = 300vh (content) - 100vh (viewport) = 200vh
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section
            id="v2v-framework"
            ref={containerRef}
            className="relative bg-slate-950 h-[300vh]"
        >
            {/* Fixed Background Layer: This stays pinned while the section is in view */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {optimizedPhases.map((phase, i) => {
                    // Mapping images across the 300vh scroll
                    // Phase 0: visible at 0% scroll
                    // Phase 1: peaks at 50% scroll
                    // Phase 2: peaks at 100% scroll
                    const step = 0.5;
                    const peak = i * step;

                    const opacity = useTransform(
                        scrollYProgress,
                        [peak - 0.25, peak, peak + 0.25],
                        [0, 1, 0]
                    );

                    // Scale effect for depth
                    const scale = useTransform(
                        scrollYProgress,
                        [peak - 0.5, peak, peak + 0.5],
                        [1.1, 1, 1.1]
                    );

                    return (
                        <motion.div
                            key={`bg-${phase.id}`}
                            className="absolute inset-0 w-full h-full"
                            style={{
                                opacity,
                                zIndex: 10 + i
                            }}
                        >
                            <div className="absolute inset-0 bg-slate-950/70 z-10" />
                            <motion.img
                                src={phase.image.src}
                                alt=""
                                style={{ scale }}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    );
                })}
            </div>

            {/* Scrolling Content Layer: Negative margin pulls cards over the sticky backgrounds */}
            <div className="relative z-30 -mt-[100vh]">
                {optimizedPhases.map((phase) => (
                    <div key={`card-${phase.id}`} className="h-screen flex items-center justify-center px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 1, ease: easeOut }}
                            className="bg-white/30 backdrop-blur-3xl border border-white/10 p-10 md:p-16 max-w-4xl w-full flex flex-col md:flex-row gap-12 items-center md:items-start"
                        >
                            <div className="relative h-20 md:h-28 w-24 md:w-32 shrink-0 flex items-center justify-center border border-white/5 bg-white/5">
                                <span className="font-mono text-5xl md:text-7xl text-white/20 tracking-tighter">
                                    {phase.id}
                                </span>
                            </div>

                            <div className="space-y-6 flex-1 text-center md:text-left">
                                <h3 className="font-serif text-3xl md:text-5xl text-white tracking-tight leading-tight">
                                    {phase.title}
                                </h3>
                                <p className="font-sans text-lg md:text-xl text-white/50 font-light leading-relaxed max-w-xl">
                                    {phase.description}
                                </p>
                                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center gap-6 md:gap-10">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-cobalt animate-pulse" />
                                        <span className="font-mono text-xs text-white/40 uppercase tracking-[0.2em]">
                                            Metric: <span className="text-white">{phase.metric}</span>
                                        </span>
                                    </div>
                                    <div className="hidden md:block h-4 w-1px bg-white/10" />
                                    <span className="font-mono text-[10px] text-white/20 uppercase tracking-widest">
                                        V2V Framework Protocol
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
}
