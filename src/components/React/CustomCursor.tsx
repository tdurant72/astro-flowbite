import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useInView, useSpring, useMotionValue } from 'motion/react';
const CustomCursor = ({ hoveredItem, previewImage, previewVideo }: { hoveredItem: string | null, previewImage: string | null, previewVideo: string | null }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-48 h-48 pointer-events-none z-100 flex items-center justify-center"
            style={{
                x: cursorX,
                y: cursorY,
                translateX: '-50%',
                translateY: '-50%',
            }}
        >
            <AnimatePresence>
                {hoveredItem && (

                    <motion.div
                        initial={{ scale: 0, opacity: 0, rotate: -10 }}
                        animate={{ scale: 1, opacity: 1, rotate: 0 }}
                        exit={{ scale: 0, opacity: 0, rotate: 10 }}
                        className="w-full h-full bg-alabaster rounded-2xl flex items-center justify-center overflow-hidden shadow-2xl border border-noir/10"
                    >
                        <a href={`/projects/${hoveredItem.replace('.mdx', '')}`} target="_blank" rel="noopener noreferrer" key={hoveredItem}>
                            {previewVideo ? (
                                previewVideo.includes('youtube.com') || previewVideo.includes('youtu.be') ? (
                                    <iframe
                                        src={previewVideo}
                                        title="Preview"
                                        className="w-full h-full object-cover opacity-80 pointer-events-none"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allow="accelerometer; autoplay; muted; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    />
                                ) : (
                                    <video
                                        src={previewVideo}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-auto object-cover pointer-events-none"
                                    />
                                )
                            ) : (
                                <img src={previewImage} alt="Preview" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
                            )}
                            <div className="absolute inset-0 flex items-center justify-center ">
                                <span className="text-noir bg-alabaster px-3 py-1 text-[8px] uppercase tracking-widest font-bold rounded-full shadow-sm bg-neutral-50/90 backdrop-blur-sm">View Case Study</span>
                            </div>
                        </a>
                    </motion.div>

                )}

            </AnimatePresence>

            {!hoveredItem && (
                <motion.div
                    className="w-2 h-2 bg-alabaster rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                />
            )}
        </motion.div>
    );
};

export default CustomCursor;
