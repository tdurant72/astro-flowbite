import { useState, useEffect } from "react";
import { motion } from "motion/react";
import RevealText from "./RevealText";
import CustomCursor from "./CustomCursor";
export interface FeaturedProject {
    id: string;
    slug: string;
    title: string;
    category: string;
    image: string;
    video?: string;
    preview?: string;
}

const FeaturedCaseStudies = ({ onHover, projects }: { onHover?: (id: string | null, image: string | null, videoSrc: string | null) => void, projects: FeaturedProject[] }) => {
    const [hoveredProject, setHoveredProject] = useState<string | null>(null);
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const [previewVideo, setPreviewVideo] = useState<string | null>(null);

    const handleHover = (id: string | null, image: string | null, videoSrc: string | null) => {
        setHoveredProject(id);
        setPreviewImage(image);
        setPreviewVideo(videoSrc);
    };
    return (
        <section className="py-8 px-12 md:px-24 bg-alabaster">
            <CustomCursor hoveredItem={hoveredProject} previewImage={previewImage} previewVideo={previewVideo} />

            <div className="max-w-screen-2xl mx-auto">
                <RevealText className="mb-24">
                    <h2 className="text-2xl md:text-4xl font-serif italic text-brand-teal">Selected Works.</h2>
                </RevealText>

                <div className="grid md:grid-cols-3 gap-12">
                    {projects.map((project, i) => (
                        <a href={`/projects/${project.slug.replace('.mdx', '')}`} rel="noopener noreferrer" key={project.id}>
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                onMouseEnter={() => {
                                    handleHover(project.id, project.preview ?? null, project.video ?? null);
                                    onHover?.(project.id, project.preview ?? null, project.video ?? null);
                                }}
                                onMouseLeave={() => {
                                    handleHover(null, null, null);
                                    onHover?.(null, null, null);
                                }}
                                className="group cursor-none"
                            >
                                <div className="relative aspect-video overflow-hidden mb-8 bg-noir">
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
                                        referrerPolicy="no-referrer"
                                    />
                                    <div className="absolute inset-0 bg-noir/20 group-hover:bg-noir/0 transition-colors duration-700" />
                                </div>

                                <div className="flex justify-between items-end">
                                    <div>
                                        <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-bronze mb-2 block">{project.category}</span>
                                        <h3 className="text-2xl md:text-3xl font-serif italic">{project.title}</h3>
                                    </div>
                                    <span className="font-sans text-[10px] opacity-30">{project.id}</span>
                                </div>
                            </motion.div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedCaseStudies;
