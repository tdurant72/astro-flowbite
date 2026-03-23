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
    v2v1?: any;
    v2v2?: any;
    v2v3?: any;
    fetchpriority?: "high" | "low" | "auto";
}

interface PhaseBackgroundProps {
    phase: any;
    i: number;
    scrollYProgress: any;
}

function PhaseBackground({ phase, i, scrollYProgress }: PhaseBackgroundProps) {
    const peak = i * 0.5;
    
    // Use narrower peak for clarity, but ensured visibility with overlaps
    // Phase 0: 0 to 0.4
    // Phase 1: 0.1 to 0.9
    // Phase 2: 0.6 to 1.0
    const range = i === 0 ? [0, 0.45] : i === 1 ? [0.1, 0.5, 0.9] : [0.55, 1.0];
    const output = i === 0 ? [1, 0] : i === 1 ? [0, 1, 0] : [0, 1];

    const opacity = useTransform(scrollYProgress, range, output);
    const scale = useTransform(scrollYProgress, [peak - 0.5, peak, peak + 0.5], [1.05, 1, 1.05]);

    // Handle both Astro's getImage result and raw imports
    const src = phase.image?.src || phase.image;
    const srcSet = phase.image?.srcSet?.attribute || 
                   (typeof phase.image?.srcSet === 'string' ? phase.image.srcSet : undefined);

    if (!src) return null;

    return (
        <motion.div
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{
                opacity,
                zIndex: 10 + i, // Correct layering: 10, 11, 12
            }}
        >
            {/* Reduced overlay opacity (15%) for much better visibility on dark themes */}
            <div className="absolute inset-0 bg-slate-950/15 z-10" />
            <motion.img
                src={src}
                srcSet={srcSet}
                sizes="100vw"
                alt=""
                style={{ scale }}
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
            />
        </motion.div>
    );
}

export default function V2VFramework({ v2v1, v2v2, v2v3, fetchpriority }: V2VFrameworkProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    // Overwrite phase images with optimized props if they exist
    const optimizedPhases = phases.map((phase, i) => {
        const optimizedSrc = i === 0 ? v2v1 : i === 1 ? v2v2 : v2v3;
        return {
            ...phase,
            image: optimizedSrc || phase.image
        };
    });

    // Offset offset: ["start start", "end end"]
    // Distance = 300vh (content) - 100vh (viewport) = 200vh
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Log scroll progress to debug transitions
    // useIsomorphicLayoutEffect(() => {
    //     return scrollYProgress.on("change", (v) => console.log("V2V Scroll:", v));
    // }, [scrollYProgress]);

    return (
        <section
            id="v2v-framework"
            ref={containerRef}
            className="relative bg-slate-950 h-[300vh]"
        >
            {/* Fixed Background Layer: This stays pinned while the section is in view */}
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-slate-950">
                {optimizedPhases.map((phase, i) => (
                    <PhaseBackground 
                        key={`bg-${phase.id}`}
                        phase={phase}
                        i={i}
                        scrollYProgress={scrollYProgress}
                    />
                ))}
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
