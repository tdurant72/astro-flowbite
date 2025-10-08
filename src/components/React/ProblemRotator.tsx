import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";

interface ProblemRotatorProps {
    problems: {
        id: number;
        icon: React.ElementType;
        title: string;
        description: string;
        image: string;
    }[];
    primaryColor?: string;
    progressGradientLight?: string;
    progressGradientDark?: string;
}
const ProblemRotator = ({
    problems,
    primaryColor,
    progressGradientLight,
    progressGradientDark,
}: ProblemRotatorProps) => {
    const [currentProblem, setCurrentProblem] = useState(0);
    const [progress, setProgress] = useState(0);
    const problemRefs = useRef<(HTMLDivElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
        }, 100);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (progress >= 100) {
            setTimeout(() => {
                setCurrentProblem((prev) => (prev + 1) % problems.length);
                setProgress(0);
            }, 300);
        }
    }, [progress]);

    useEffect(() => {
        const activeFeatureElement = problemRefs.current[currentProblem];
        const container = containerRef.current;

        if (activeFeatureElement && container) {
            const containerRect = container.getBoundingClientRect();
            const elementRect = activeFeatureElement.getBoundingClientRect();

            container.scrollTo({
                left:
                    activeFeatureElement.offsetLeft -
                    (containerRect.width - elementRect.width) / 2,
                behavior: "smooth",
            });
        }
    }, [currentProblem]);

    const handleFeatureClick = (index: number) => {
        setCurrentProblem(index);
        setProgress(0);
    };
    return (
        <div className="min-h-screen py-4 md:py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 lg:gap-16 gap-8   items-center">
                    <div
                        ref={containerRef}
                        className="space-y-3 lg:space-y-8 space-x-2 md:space-x-6 lg:space-x-0 overflow-x-auto overflow-hidden no-scrollbar lg:overflow-visible flex flex-col lg:flex lg:flex-col order-1 pb-4 scroll-smooth"
                    >
                        {problems.map((feature, index) => {
                            // const Icon = feature.icon;
                            const isActive = currentProblem === index;

                            return (
                                <div
                                    key={feature.id}
                                    ref={(el) => {
                                        problemRefs.current[index] = el;
                                    }}
                                    className="relative cursor-pointer flex-shrink-0"
                                    onClick={() => handleFeatureClick(index)}
                                >
                                    <div
                                        className={`
                                    flex lg:flex-row flex-col items-start space-x-2 md:space-x-4 p-1 md:p-3 max-w-md md:max-w-med lg:max-w-2xl transition-all duration-300
                                    ${isActive
                                                ? " bg-white dark:bg-black/80 md:shadow-xl dark:drop-shadow-lg  rounded-xl md:border dark:border-none border-gray-200 "
                                                : " "
                                            }
                                  `}
                                    >
                                        <div
                                            className={`
                                      p-3  hidden md:block rounded-full transition-all duration-300
                                      ${isActive
                                                    ? `${primaryColor} text-white`
                                                    : `bg-sky-500/10 dark:bg-black/80 ${primaryColor}`
                                                }
                                    `}
                                        >
                                            {/* <Icon size={24} /> */}
                                        </div>

                                        <div className="flex-1">
                                            <h3
                                                className={`
                                        text-sm md:text-lg md:mt-4 lg:mt-0 font-medium md:font-semibold mb-2 transition-colors duration-300
                                        ${isActive
                                                        ? "text-gray-900 dark:text-white"
                                                        : "text-gray-700 dark:text-white/80"
                                                    }
                                      `}
                                            >
                                                {feature.title}
                                            </h3>

                                            <div className="mt-4 bg-white dark:bg-black/80 rounded-sm   h-1 overflow-hidden">
                                                {isActive && (
                                                    <motion.div
                                                        className={`h-full ${progressGradientLight} dark:${progressGradientDark}`}
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${progress}%` }}
                                                        transition={{ duration: 0.1, ease: "linear" }}
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="relative order-1 max-w-lg mx-auto lg:order-2">
                        <motion.div
                            key={currentProblem}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="grid grid-cols-1 grid-rows-3 gap-4 bg-slate-100 rounded-t-2xl"
                        >
                            <img
                                className="rounded-t-2xl border dark:border-none border-gray-50 shadow-lg dark:drop-shadow-lg col-start-1 row-start-1 row-span-3 object-cover"
                                src={problems[currentProblem].image}
                                alt={problems[currentProblem].title}
                                width={600}
                                height={400}
                            />
                            <p
                                className="text-base md:text-lg text-gray-600 dark:text-white/60 bg-white/85 justify-items-center col-start-1 row-span-2 row-end-4 p-2"
                            >
                                {problems[currentProblem].description}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProblemRotator;
