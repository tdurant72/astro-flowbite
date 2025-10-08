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
                    <h1 className="font-serif text-4xl font-extralight  md:text-5xl">
                        We Build{" "}
                        <span className=" font-serif font-extralight text-teal-500">
                            Websites
                        </span>,
                    </h1>
                </ContainerAnimated>
                <ContainerAnimated>
                    <h1 className="font-serif text-4xl font-extralight md:text-5xl">
                        That Tell Your Story.
                    </h1>
                </ContainerAnimated>

                <ContainerAnimated className="my-4">
                    <h2 className="leading-normal tracking-tight text-muted-foreground text-xl md:text-2xl max-w-3xl mx-auto">
                        We build powerful, purpose driven websites for organizations committed to building a better future from community leaders to non-profits on a mission.
                    </h2>
                </ContainerAnimated>

                <ContainerAnimated>
                    <Button asChild
                        className="gap-1 bg-amber-500 text-white text-base md:text-lg hover:bg-amber-600 transition-colors duration-200 mt-3"
                    >
                        <a href="#contact-us">Start a Conversation About Your Mission</a>

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
                                    alt="gallery item"
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
                                    alt="gallery item"
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
                                    alt="gallery item"
                                />
                            ))}
                        </GalleryCol>
                    </GalleryContainer>
                </ContainerSticky>
            </ContainerScroll>
        </div>
    )
}
