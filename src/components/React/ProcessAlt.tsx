import React from 'react';
import { motion } from 'framer-motion';
import {
    ContainerAnimated,
    ContainerStagger
} from "@/components/blocks/animated-gallery";
import { Search, Map, Layout, Rocket } from 'lucide-react';

const STAGES = [
    {
        icon: <Search className="w-6 h-6 text-teal-500" />,
        title: "Discovery & Audit",
        description: "Identifying capital leaks and regional competitive gaps through rigorous data analysis.",
        tag: "Stage 01"
    },
    {
        icon: <Map className="w-6 h-6 text-teal-500" />,
        title: "Strategic Blueprint",
        description: "Mapping the institutional buyer journey and site-selection requirements for global investors.",
        tag: "Stage 02"
    },
    {
        icon: <Layout className="w-6 h-6 text-teal-500" />,
        title: "Rapid Prototyping",
        description: "Visualizing the authoritative digital asset before the first line of code is ever written.",
        tag: "Stage 03"
    },
    {
        icon: <Rocket className="w-6 h-6 text-teal-500" />,
        title: "Institutional Launch",
        description: "Deploying lightning-fast systems that secure multi-million dollar regional investments.",
        tag: "Stage 04"
    }
];

export const ProcessAlt = () => {
    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <ContainerStagger className="mb-16">
                    <ContainerAnimated>
                        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-teal-500 mb-4">
                            The Path to Authority
                        </h2>
                    </ContainerAnimated>
                    <ContainerAnimated>
                        <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white max-w-2xl leading-tight">
                            A High-Stakes Process for High-Yield Results.
                        </h3>
                    </ContainerAnimated>
                </ContainerStagger>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {STAGES.map((stage, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-500 group"
                        >
                            <div className="absolute top-8 right-8 text-xs font-bold text-slate-300 dark:text-slate-700 uppercase tracking-widest">
                                {stage.tag}
                            </div>

                            <div className="w-12 h-12 bg-teal-50 dark:bg-teal-900/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                {stage.icon}
                            </div>

                            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                {stage.title}
                            </h4>

                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm lg:text-base">
                                {stage.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
