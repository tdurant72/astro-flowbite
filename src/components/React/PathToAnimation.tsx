import { motion } from 'motion/react';

export default function PathToAnimation() {
    return (
        <motion.div
            className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-brand-teal rounded-full"
            animate={{ left: ["0%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
    );
}