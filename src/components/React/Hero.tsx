import {
    ContainerAnimated,
    ContainerScroll,
    ContainerStagger,
    ContainerSticky,
    GalleryCol,
    GalleryContainer
} from "@/components/blocks/animated-gallery"
import { Button } from "@/components/ui/button"
import { VideoIcon } from "lucide-react"

const IMAGES_1 = [
    "/images/gallery/garner.webp",
    "/images/gallery/eagles.webp",
    "/images/gallery/business40.webp",
    "/images/gallery/ncgtpedr.webp",
]
const IMAGES_2 = [
    "/images/gallery/ferryReservation.webp",
    "/images/gallery/industrial-park.webp",
    "/images/gallery/letting.webp",
    "/images/gallery/gtp.webp",
]
const IMAGES_3 = [
    "/images/gallery/llitb.webp",
    "/images/gallery/ncdot.webp",
    "/images/gallery/tracker.webp",
    "/images/gallery/waitlist.webp",
]

export const Hero = () => {
    return (
        <div className="relative bg-white dark:bg-slate-900 pt-32 md:pt-48 overflow-hidden">
            <ContainerStagger className="relative z-[8888] max-w-7xl mx-auto px-4 md:px-6 text-center">
                <ContainerAnimated>
                    <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                        We Build High-Performance Digital Assets for Organizations That{" "}
                        <span className="text-brand-teal">
                            Can't Afford to Fail.
                        </span>
                    </h1>
                </ContainerAnimated>

                <ContainerAnimated className="mt-8 mb-12">
                    <h2 className="leading-relaxed tracking-tight text-slate-600 dark:text-slate-400 text-xl md:text-3xl max-w-4xl mx-auto font-light">
                        From GovTech to Enterprise SaaS—we deploy lightning-fast Astro-based systems that eliminate friction, secure data, and maximize mission-critical conversions.
                    </h2>
                </ContainerAnimated>

                <ContainerAnimated className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button asChild
                        className="h-14 px-8 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-lg font-bold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all duration-300 rounded-full shadow-lg"
                    >
                        <a href="#contact-us">Get a High-Stakes UX Audit</a>

                    </Button>
                    <Button asChild className="h-14 px-8 bg-brand-teal text-white text-lg font-bold hover:bg-teal-600 transition-all duration-300 rounded-full shadow-lg hover:shadow-brand-teal/25">
                        <a href="/case-studies">View Case Studies</a>
                    </Button>
                </ContainerAnimated>
            </ContainerStagger>
            <div className="pointer-events-none absolute z-10 h-96 md:h-[70vh] w-full "
                style={{
                    background: "linear-gradient(to right, #3DE4C1, #1e293b, #0f172a)",
                    filter: "blur(84px)",
                    mixBlendMode: "screen",
                }}
            />

            <ContainerScroll className="h-[120vh] md:h-[150vh]">
                <ContainerSticky className="h-svh min-h-screen">
                    <GalleryContainer className="">
                        <GalleryCol yRange={["-10%", "2%"]} className="-mt-2">
                            {IMAGES_1.map((imageUrl, index) => (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                    key={index}
                                    className="aspect-video block h-auto max-h-full w-full  rounded-md  object-cover shadow"
                                    src={imageUrl}
                                    alt={`Sublime UX project gallery - ${imageUrl.split('/').pop().split('.')[0]}`}
                                />
                            ))}
                        </GalleryCol>
                        <GalleryCol className="mt-[-50%]" yRange={["15%", "5%"]}>
                            {IMAGES_2.map((imageUrl, index) => (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                    key={index}
                                    className="aspect-video block h-auto max-h-full w-full  rounded-md  object-cover shadow"
                                    src={imageUrl}
                                    alt={`Sublime UX design showcase - ${imageUrl.split('/').pop().split('.')[0]}`}
                                />
                            ))}
                        </GalleryCol>
                        <GalleryCol yRange={["-10%", "2%"]} className="-mt-2">
                            {IMAGES_3.map((imageUrl, index) => (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                    key={index}
                                    className="aspect-video block h-auto max-h-full w-full  rounded-md  object-cover shadow"
                                    src={imageUrl}
                                    alt={`Sublime UX web development - ${imageUrl.split('/').pop().split('.')[0]}`}
                                />
                            ))}
                        </GalleryCol>
                    </GalleryContainer>
                </ContainerSticky>
            </ContainerScroll>
        </div>
    )
}
