"use client";
import {
    useMotionValueEvent,
    useScroll,
    useTransform,
    motion,
} from "motion/react";
import { s } from "motion/react-client";
import React, { useEffect, useRef, useState, useLayoutEffect } from "react";


export const ProcessTimeline = () => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);
    const data = [
        {
            title: "Discovery",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-normal mb-8">
                        We&apos;ll start with a simple guide to help you gather your content and
                        materials. This is the crucial first step where we align on{" "}
                        <b>your mission, your audience, and your goals</b> , ensuring we&apos;re
                        building the right solution from day one.
                    </p>
                </div>
            ),
        },
        {
            title: "Strategy",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-normal mb-8">
                        Now we get to work. We&apos;ll have a follow-up call to turn your ideas and
                        our findings into a clear,<b>actionable plan</b> . This is where we
                        define the exact strategy that will help you attract, engage, and
                        convert your ideal audience.
                    </p>
                </div>
            ),
        },
        {
            title: "Creative",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-normal mb-8">
                        This is where your brand comes to life. If you have a brand guide,
                        we&apos;ll use it to ensure visual consistency. If not, we&apos;ll work together
                        to establish an identity that <b>resonates with your community</b> and
                        stands out from the crowd.
                    </p>
                </div>
            ),
        },
        {
            title: "Wireframing",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-normal mb-8">
                        We&apos;ll build a simple, black-and-white blueprint of your website. This
                        step lets us focus on the <b>user experience and content flow</b>,
                        ensuring every page is strategically designed to guide visitors toward
                        your desired action.
                    </p>
                </div>
            ),
        },
        {
            title: "Prototyping",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-normal mb-8">
                        The blueprint gets a massive upgrade. We&apos;ll add your approved
                        branding, colors, and visuals to the wireframe. This is the first time
                        you&apos;ll see and click through a{" "}
                        <b>fully functional version of your new website</b>, allowing you to
                        experience the design before we build it.
                    </p>
                </div>
            ),
        },
        {
            title: "Development",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-normal mb-8">
                        With your full approval, our team begins to code and build the final
                        product. We&apos;ll transform the approved design into a{" "}
                        <b>secure, fast, and fully functional website</b> that is ready to
                        serve your audience and your mission.
                    </p>
                </div>
            ),
        },
        {
            title: "Launch",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-normal mb-8">
                        The big day. After your final sign-off, we&apos;ll handle all the technical
                        details to seamlessly launch your new website. Your new online home is
                        now <b>live and ready to make an impact</b> .
                    </p>
                </div>
            ),
        },
        {
            title: "Drive Traffic",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-normal mb-8">
                        A great website is only half the battle. Now that you have a powerful
                        platform to tell your story and convert visitors, we will work with
                        you to develop a plan to <b>drive qualified traffic</b> and maximize
                        your reach.
                    </p>
                </div>
            ),
        },
        {
            title: "Analyze & Adapt",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-normal mb-8">
                        A website is a living asset. We wll provide a clear strategy for
                        analyzing data and adapting your digital approach over time, so your
                        website and marketing efforts <b>never stop improving</b> .
                    </p>
                </div>
            ),
        },
    ];
    // Measure the inner timeline container height and keep it updated
    // so the vertical animated line never extends past the last item.
    useLayoutEffect(() => {
        const el = ref.current;
        if (!el) return;

        // helper to set height from the element's full height
        const updateHeight = () => {
            // use scrollHeight to include full content height (covers wrapping on small screens)
            const h = el.scrollHeight || el.getBoundingClientRect().height || 0;
            setHeight(h);
        };

        updateHeight();

        // ResizeObserver for responsive changes (images, wrapping, font-size, etc.)
        let ro: ResizeObserver | null = null;
        if (typeof ResizeObserver !== "undefined") {
            ro = new ResizeObserver(() => {
                updateHeight();
            });
            ro.observe(el);
        }

        // also listen to window resize as a fallback
        window.addEventListener("resize", updateHeight);

        return () => {
            if (ro) ro.disconnect();
            window.removeEventListener("resize", updateHeight);
        };
    }, [ref, data.length]);

    // Measure scroll progress only for the timeline block itself (ref)
    // so the animated line grows only while the timeline is in view.
    const { scrollYProgress } = useScroll({
        target: ref,
        // Start when the top of the timeline hits the bottom of the viewport,
        // finish when the bottom of the timeline hits the top of the viewport.
        offset: ["start end", "end start"],
    });
    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    // useEffect(() => {
    //     console.log("containerRef:", containerRef.current);
    // }, [containerRef.current]);
    return (
        <div
            className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
            ref={containerRef}
        >
            <div className="max-w-5xl mx-auto py-20 px-4 md:px-8 lg:px-10">
                <h2 className=" text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white py-3">
                    Our Process
                </h2>
                <p className="text-neutral-700 dark:text-neutral-300 text-lg md:text-2xl ">
                    Our process is streamlined with our customers in mind. Design and
                    development do not happen in a vacuum. We are with you every step of the
                    way, keeping you informed, involved, and in the know.
                </p>
            </div>
            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-start pt-10 md:pt-40 md:gap-10 h-[40vh] md:h-[70vh]"
                    >
                        <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                            <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                            </div>
                            <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                                {item.title}
                            </h3>
                        </div>

                        <div className="relative pl-20 pr-4 md:pl-4 w-full">
                            <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                                {item.title}
                            </h3>
                            {item.content}{" "}
                        </div>
                    </div>
                ))}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                            // Defensive maxHeight ensures the animated fill never visually
                            // exceeds the measured timeline height even if transforms
                            // compute slightly outside [0,height].
                            maxHeight: height + "px",
                        }}
                        className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-teal-500 via-amber-300 to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};
