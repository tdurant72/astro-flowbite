import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function ConfusionGraphic() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const linePath = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);

    return (
        <div className="relative h-96 flex items-center justify-center">
            <svg viewBox="0 0 400 400" className="w-full h-full max-w-sm">
                <motion.path
                    d="M 50 200 C 100 50, 200 350, 350 200"
                    fill="transparent"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="2"
                    strokeDasharray="1000"
                    strokeDashoffset={useTransform(linePath, v => 1000 - (v * 1000))}
                />
                <motion.path
                    d="M 50 200 C 150 300, 250 100, 350 200"
                    fill="transparent"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="2"
                    strokeDasharray="1000"
                    strokeDashoffset={useTransform(linePath, v => 1000 - (v * 1000))}
                />
                {/* The "Impact Line" */}
                <motion.path
                    d="M 50 200 L 350 200"
                    fill="transparent"
                    stroke="#0055FF"
                    strokeWidth="4"
                    strokeDasharray="1000"
                    strokeDashoffset={useTransform(linePath, v => 1000 - (v * 1000))}
                />
            </svg>
        </div>
    )
}