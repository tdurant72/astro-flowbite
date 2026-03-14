"use client"
import React, { useState, useEffect, lazy, Suspense } from "react";
import { ArrowRight } from "lucide-react";

import Pointer from "./Pointer";
function LoadingSpinner() {
    return (<div>Loading...</div>)
}

interface GalleryCardProps {
    caseStudies: any;
}
const GallerySection = ({ caseStudies }: GalleryCardProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = React.useRef<HTMLDivElement>(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
            }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);
    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center">Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {
                        caseStudies.map((project, index) => (
                            <a href={`/projects/${project.id.replace('.mdx', '')}`} target="_blank" rel="noopener noreferrer" key={index}>
                                <div className="bg-white rounded-lg shadow-md p-4">
                                    <Suspense fallback={<LoadingSpinner />}>
                                        <Pointer>
                                            <div className="rounded-full md:rounded-lg bg-neutral-100/50 text-lg text-neutral-900 h-32 w-32 md:h-72 md:w-auto flex flex-col items-center justify-center p-4 my-2 mx-auto backdrop-blur-sm text-center aspect-square">


                                                {project.data.projectvideo && (
                                                    <div className="flex gap-4 items-center justify-center h-52 w-52 overflow-hidden rounded-2xl">
                                                        <iframe className="overflow-hidden aspect-square rounded-full" src={project.data.projectvideo.src} title={project.data.projectvideo.title} allow="accelerometer; autoplay; 
                                                            muted;clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
                                                    </div>
                                                )}
                                                <div className="flex gap-4">
                                                    <p>Read Case Study</p>
                                                    <ArrowRight />
                                                </div>

                                            </div>
                                        </Pointer>
                                    </Suspense>
                                    <h3 className="text-lg font-semibold">{project.data.title}</h3>
                                    <p className="text-gray-600">{project.data.description}</p>
                                    {
                            (() => {
                                const imageSrc =
                                    typeof project.data.projectimage === "string"
                                        ? project.data.projectimage
                                        : project.data.projectimage?.src;
                                return (
                                    imageSrc && (
                                        <img
                                            src={imageSrc}
                                            alt={project.data.alt}
                                            width="auto"
                                            height={500}
                                            className="rounded-xl aspect-video"
                                        />
                                    )
                                );
                            })()
                        }

                                </div>
                            </a>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default GallerySection