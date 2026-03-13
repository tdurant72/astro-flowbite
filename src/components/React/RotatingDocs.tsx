import { motion } from "motion/react";
import { FileText } from "lucide-react";

export default function RotatingDocs() {
    return (
        <motion.div
            className="flex flex-wrap justify-center gap-4 w-64"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
            {[...Array(6)].map((_, i) => (
                <div key={i} className="w-16 h-16 border border-charcoal/20 bg-white flex items-center justify-center rotate-12">
                    <FileText className="w-6 h-6 text-charcoal/30" />
                </div>
            ))}
        </motion.div>
    );
}