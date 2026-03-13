import React from 'react';
import { Marquee } from '@/components/ui/3d-testimonails';
import { Card } from '@/components/ui/card';
import { Button } from "@/components/ui/button"
import {
    ContainerAnimated,
    ContainerStagger
} from "@/components/blocks/animated-gallery"

const ALL_IMAGES = [
    "/images/gallery/garner.webp",
    "/images/gallery/eagles.webp",
    "/images/gallery/business40.webp",
    "/images/gallery/greenworx.webp",
    "/images/gallery/ferryReservation.webp",
    "/images/gallery/gtp-redesign.webp",
    "/images/gallery/letting.webp",
    "/images/gallery/furman.webp",
    "/images/gallery/llitb.webp",
    "/images/gallery/ncdot.webp",
    "/images/gallery/tracker.webp",
    "/images/gallery/ncgtpedr.webp",
];
const COLUMN_1 = ALL_IMAGES.slice(0, 6);
const COLUMN_2 = ALL_IMAGES.slice(6);

function ProjectCard({ img }: { img: string }) {
    return (
        <Card className="w-56 md:w-64 overflow-hidden border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-shadow duration-300">
            <img src={img} alt="Project" className="w-full aspect-video object-cover" />
        </Card>
    );
}

export const HeroAlt = () => {
    return (
        <div className="relative bg-white dark:bg-slate-900 pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Left Column: Content */}
                    <ContainerStagger className="text-left z-10">
                        <ContainerAnimated>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                                Frictionless Websites Systems for<br />
                                <span className="text-brand-teal">
                                    explosive growth.
                                </span>
                            </h1>
                        </ContainerAnimated>

                        <ContainerAnimated className="mt-8 mb-12">
                            <p className="leading-relaxed tracking-tight text-slate-600 dark:text-slate-400 text-xl md:text-2xl max-w-xl font-light text-balance">
                                We replace outdated interfaces with high powered systems designed to convert visitors into investors. Let our audit reveal where your site is leaking revenue.
                            </p>
                        </ContainerAnimated>

                        <ContainerAnimated className="flex flex-col sm:flex-row items-center gap-4">
                            <Button asChild
                                className="h-14 px-8 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-lg font-bold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all duration-300 rounded-full shadow-lg"
                            >
                                <a href="#contact-us">Get a High-Stakes Audit</a>
                            </Button>
                            <Button asChild className="h-14 px-8 bg-brand-teal text-white text-lg font-bold hover:bg-teal-600 transition-all duration-300 rounded-full shadow-lg hover:shadow-brand-teal/25">
                                <a href="/case-studies">View Case Studies</a>
                            </Button>
                        </ContainerAnimated>
                    </ContainerStagger>

                    {/* Right Column: Clean Vertical Marquee */}
                    <div className="relative h-[600px] w-full flex items-center justify-center overflow-hidden">
                        <div className="flex flex-row items-center gap-2 px-2 md:px-4">
                            {/* Column 1 */}
                            <Marquee vertical pauseOnHover repeat={3} className="[--duration:40s] [--gap:2.5rem]">
                                {COLUMN_1.map((img, i) => (
                                    <ProjectCard key={i} img={img} />
                                ))}
                            </Marquee>
                            {/* Column 2 */}
                            <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:35s] [--gap:2.5rem]">
                                {COLUMN_2.map((img, i) => (
                                    <ProjectCard key={i} img={img} />
                                ))}
                            </Marquee>
                        </div>

                        {/* Gradient Overlays */}
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white dark:from-slate-900 via-white/50 dark:via-slate-900/50 to-transparent z-20"></div>
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white dark:from-slate-900 via-white/50 dark:via-slate-900/50 to-transparent z-20"></div>
                    </div>
                </div>
            </div>

            {/* Background Mesh Gradient */}
            <div className="pointer-events-none absolute top-0 -right-24 z-0 h-[600px] w-[600px] opacity-20 blur-[120px]"
                style={{
                    background: "radial-gradient(circle, #3DE4C1, transparent)",
                }}
            />
        </div>
    )
}
