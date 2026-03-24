import React, { lazy, Suspense, useState, useEffect } from 'react';
import { motion } from "motion/react"

// Dynamically import the shader component so it NEVER evaluates during SSR
const PulsingBorder = lazy(() => 
    import("@paper-design/shaders-react").then(module => ({ default: module.PulsingBorder }))
);

export default function PulsingCircle() {
    return (
        <div className="fixed bottom-8 right-8 z-30 overflow-hidden bg-slate-50 rounded-full">
            <a href="/#contact-us" aria-label="Contact us today">
                <div className="relative w-20 h-20 flex items-center justify-center overflow-hidden">
                    <Suspense fallback={<div className="w-[60px] h-[60px] rounded-full bg-slate-200 animate-pulse" />}>
                        <PulsingBorder
                            colors={["#BEECFF", "#E77EDC", "#FF4C3E", "#00FF88", "#FFD700", "#FF6B35", "#8A2BE2"]}
                            colorBack="#00000000"
                            speed={1.5}
                            roundness={1}
                            thickness={0.1}
                            softness={0.2}
                            intensity={5}
                            spotSize={0.1}
                            pulse={0.1}
                            smoke={0.5}
                            smokeSize={4}
                            scale={0.65}
                            rotation={0}
                            frame={9161408.251009725}
                            style={{
                                width: "60px",
                                height: "60px",
                                borderRadius: "50%",
                            }}
                        />
                    </Suspense>

                    {/* Rotating Text Around the Pulsing Border */}
                    <motion.svg
                        className="absolute inset-0 w-full h-full"
                        viewBox="0 0 100 100"
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 20,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                        style={{ transform: "scale(1.6)" }}
                    >
                        <defs>
                            <path id="circle" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
                        </defs>
                        <text className="text-sm" fill="#20B2AA">
                            <textPath href="#circle" startOffset="0%">
                                contact us today • contact us today • contact us today • contact us today •
                            </textPath>
                        </text>
                    </motion.svg>
                </div>
            </a>
        </div>
    )
}
