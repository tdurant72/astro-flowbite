import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const RevealText = ({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    return (
        <div ref={ref} className={cn("overflow-hidden", className)}>
            <motion.div
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : { y: "100%" }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default RevealText;