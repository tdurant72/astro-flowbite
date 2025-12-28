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
    "/images/gallery/lawfirm.webp",
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
        <div className="relative bg-slate-50 my-4 md:my-6">
            <ContainerStagger className="relative z-[8888] -mb-12 place-self-center px-6 pt-18 text-center">
                <ContainerAnimated>
                    <h1 className="font-serif text-4xl font-extralight md:text-5xl">
                        Convert More Visitors Into{" "}
                        <span className=" font-serif font-extralight text-teal-500">
                            Loyal Customers.
                        </span>
                    </h1>
                </ContainerAnimated>

                <ContainerAnimated className="my-4">
                    <h2 className="leading-normal tracking-tight text-slate-600 text-xl md:text-2xl max-w-3xl mx-auto">
                        Stop losing traffic to a confusing user experience. We specialize in purpose-driven design that turns passive browsing into active growth. Claim your <span className="font-bold text-slate-900 dark:text-white underline decoration-amber-500 decoration-2 underline-offset-4">free $800 landing page audit</span> today, we'll analyze your site’s performance and provide a roadmap to maximize your ROI.
                    </h2>
                </ContainerAnimated>

                <ContainerAnimated>
                    <Button asChild
                        className="gap-1 bg-amber-500 text-white text-base md:text-lg hover:bg-amber-600 transition-colors duration-200 mt-3"
                    >
                        <a href="#contact-us">Give me my free audit - $800 value</a>

                    </Button>
                    <Button asChild className="bg-teal-500 mx-2 text-white text-base md:text-lg hover:bg-teal-600 transition-colors duration-200 mt-3">
                        <a href="https://calendar.app.google/qFjCk6JDCAxQkDPL7">Schedule an appointment</a>
                    </Button>
                </ContainerAnimated>
            </ContainerStagger>
            <div className="pointer-events-none absolute z-10 h-96 md:h-[70vh] w-full "
                style={{
                    background: "linear-gradient(to right, gray, rebeccapurple, blue)",
                    filter: "blur(84px)",
                    mixBlendMode: "screen",
                }}
            />

            <ContainerScroll className="h-96 md:h-[350vh]">
                <ContainerSticky className="h-96 md:h-svh">
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
