import { motion } from "motion/react";
import { AlertCircle } from 'lucide-react';

export default function BlurprintAnimation() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[400px] border border-white/10 bg-white/5 p-8 overflow-hidden"
        >
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />

            {/* Abstract UI Wireframe */}
            <div className="relative z-10 w-full h-full flex flex-col gap-4 opacity-60">
                {/* Header */}
                <div className="w-full h-8 border border-white/20 flex items-center px-4 gap-4">
                    <div className="w-16 h-2 bg-white/20" />
                    <div className="w-8 h-2 bg-white/20 ml-auto" />
                    <div className="w-8 h-2 bg-white/20" />
                </div>

                {/* Hero Area */}
                <div className="w-full h-32 border border-white/20 flex flex-col justify-center items-center gap-2 relative">
                    <div className="w-1/2 h-4 bg-white/20" />
                    <div className="w-1/3 h-2 bg-white/20" />

                    {/* X-Ray Scanner Line */}
                    <motion.div
                        className="absolute top-0 left-0 w-full h-[2px] bg-teal-500 shadow-[0_0_15px_rgba(0,85,255,0.8)]"
                        animate={{ top: ["0%", "100%", "0%"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />
                </div>

                {/* Content Grid */}
                <div className="flex-1 grid grid-cols-3 gap-4">
                    <div className="border border-white/20 relative">
                        <motion.div
                            className="absolute inset-0 border border-red-500/50 bg-red-500/10"
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <AlertCircle className="absolute top-2 right-2 w-4 h-4 text-red-500 opacity-50" />
                    </div>
                    <div className="border border-white/20 col-span-2" />
                </div>
            </div>
        </motion.div>
    );
}