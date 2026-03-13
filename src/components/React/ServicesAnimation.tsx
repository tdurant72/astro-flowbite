
import { motion } from 'motion/react';
export default function ServicesAnimation() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[500px] flex items-center justify-center"
        >
            <svg viewBox="0 0 400 400" className="w-full h-full opacity-80">
                <defs>
                    <linearGradient id="wireframe-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1A1A1A" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#0055FF" stopOpacity="0.8" />
                    </linearGradient>
                </defs>
                <g stroke="url(#wireframe-grad)" strokeWidth="1" fill="none">
                    {/* Abstract structural lines */}
                    {Array.from({ length: 12 }).map((_, i) => (
                        <motion.polygon
                            key={i}
                            points={`200,${50 + i * 15} ${100 - i * 5},${150 + i * 10} 200,${250 + i * 15} ${300 + i * 5},${150 + i * 10}`}
                            initial={{ opacity: 0, pathLength: 0 }}
                            animate={{ opacity: 1, pathLength: 1 }}
                            transition={{ duration: 2, delay: i * 0.1, ease: "easeInOut" }}
                        />
                    ))}
                    <motion.line x1="200" y1="50" x2="200" y2="400" strokeWidth="2" stroke="#0055FF" opacity="0.5" />
                </g>
            </svg>
        </motion.div>
    );
}