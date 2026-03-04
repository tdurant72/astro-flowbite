import React, { useEffect, useState } from 'react'
import { motion, useTransform, easeOut, useScroll } from 'motion/react'
import type { Variants } from 'motion/react';
import { Button } from '@/components/ui/button';
const heroVideo = "https://videos.pexels.com/video-files/6774633/6774633-uhd_2560_1440_30fps.mp4"
export default function MarketingHero() {
    const [hasAnimated, setHasAnimated] = useState(false);
    const { scrollY } = useScroll();
    useEffect(() => {
        // Determine if the page was reloaded or navigated to
        const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;
        if (navigation.type === "reload" || navigation.type === "navigate") {
            setHasAnimated(false);
        } else {
            setHasAnimated(true);
        }
    }, []);
    // Transform video size and width based on scroll with eased transitions
    const videoScale = useTransform(scrollY, [0, 500], [0.9, 1], {
        ease: easeOut,
    });
    const videoWidth = useTransform(scrollY, [0, 500], ["85%", "100%"], {
        ease: easeOut,
    });
    const videoBorderRadius = useTransform(scrollY, [0, 500], [32, 0], {
        ease: easeOut,
    });
    // Enhanced content animations
    const contentVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 40,
            filter: "blur(10px)",
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.9,
                ease: [0.25, 0.1, 0, 1],
                staggerChildren: 0.1,
            },
        },
    };

    const buttonVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 20,
            scale: 0.8,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeInOut",
                delay: 0.6,
            },
        },
    };

    const videoContainerVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 60,
            scale: 0.95,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                delay: 0.8,
                duration: 1.2,
                ease: [0.25, 0.1, 0, 1],
            },
        },
    };
    return (
        <section className="bg-neutral-100 pt-20 flex flex-col items-center">
            <motion.div
                initial={hasAnimated ? "visible" : "hidden"}
                animate="visible"
                variants={contentVariants}
                className="container flex justify-center items-center md:px-0 md:pt-30"
            >
                <div className="md:w-full text-center px-4 mx-auto">
                    <motion.h1 variants={contentVariants} className="text-5xl md:text-[8vw] font-bold text-gray-900 mb-4">
                        <motion.span className="inline-block" variants={contentVariants}>
                            Digital Architecture for
                        </motion.span>
                        <br />
                        <motion.span className="inline-block text-2xl md:text-[7vw] font-medium font-serif text-teal-500" variants={contentVariants}>
                            Public Progress
                        </motion.span>
                    </motion.h1>
                    <motion.p
                        variants={contentVariants}
                        className="md:max-w-3xl text-2xl text-neutral-700 mb-8 text-center text-balance mx-auto"
                    >
                        We partner with non-profits, foundations, and public-private partnerships to transform complex missions into high impact digital experiences. We don't just design websites; we build the front door for your organization's legacy.
                    </motion.p>
                    <motion.div
                        variants={buttonVariants}
                        initial={hasAnimated ? "visible" : "hidden"}
                        animate="visible"
                        className="flex gap-x-3 md:gap-x-6 justify-center mb-10"
                    >
                        <Button asChild
                            className="h-14 px-8 bg-amber-500 dark:bg-amber-100 text-white dark:text-slate-900 text-lg font-bold hover:bg-amber-600 dark:hover:bg-amber-200 transition-all duration-300 rounded-full shadow-lg"
                        >
                            <a href="#contact-us">Get a High-Stakes Audit</a>
                        </Button>
                        <Button asChild className="h-14 px-8 bg-teal-500 text-white text-lg font-bold hover:bg-teal-600 transition-all duration-300 rounded-full shadow-lg hover:shadow-teal-500/25">
                            <a href="/case-studies">View Case Studies</a>
                        </Button>
                    </motion.div>
                </div>
            </motion.div>
            {/* Video Section */}
            <motion.div
                variants={videoContainerVariants}
                initial={hasAnimated ? "visible" : "hidden"}
                animate="visible"
                className="flex justify-center w-full md:px-0"
            >
                <motion.div
                    style={{
                        width: videoWidth,
                        scale: videoScale,
                        borderRadius: videoBorderRadius,
                        overflow: 'hidden'
                    }}
                    className="relative w-full md:w-auto"
                >
                    <video
                        src={heroVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-auto object-cover pointer-events-none"
                    />
                </motion.div>
            </motion.div>
        </section>
    )
}