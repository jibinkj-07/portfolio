"use client";

import {useEffect, useRef, useState} from "react";
import {motion, useScroll, useTransform, useSpring} from "framer-motion";
import {cn} from "@/lib/utils";
import Terminal from "@/app/components/about/terminal";
import SectionTitle from "@/lib/shared/components/sectionTitle";

export default function About() {
    const ref = useRef<HTMLDivElement>(null);

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "start center"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 20,
        restDelta: 0.001,
    });

    const scale = useTransform(smoothProgress, [0, 1], [0.65, 1]);
    const opacity = useTransform(smoothProgress, [0, 1], [0.5, 1]);

    // Loading bar: 0% → 100% as scroll progresses
    const loaderWidth = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
    // Loader fades out once complete
    const loaderOpacity = useTransform(smoothProgress, [0, 0.85, 1], [1, 1, 0]);
    // Terminal content fades in when loading done
    const contentOpacity = useTransform(smoothProgress, [0.85, 1], [0, 1]);

    const [ready, setReady] = useState(false);
    useEffect(() => {
        return smoothProgress.on("change", (v) => {
            if (v >= 0.99 && !ready) setReady(true);
        });
    }, [smoothProgress, ready]);

    return (
        <section
            id="about"
            ref={ref}
            className="min-h-screen p-4 flex flex-col gap-8 pb-50"
        >
            <SectionTitle title="About"/>
            <motion.div
                className={cn(
                    "card will-change-transform w-full border rounded-xl bg-background shadow-2xl" +
                    " relative" +
                    " overflow-hidden",
                    "flex flex-col",
                )}
                style={{scale, opacity}}
            >
                {/* HEADER */}
                <div className="bg-muted p-3 grid grid-cols-[.1fr_1fr_.1fr] items-center">
                    <div className="flex gap-2 justify-start">
                        <div className="size-3 rounded-full bg-red-400"/>
                        <div className="size-3 rounded-full bg-amber-400"/>
                        <div className="size-3 rounded-full bg-green-400"/>
                    </div>
                    <div className="flex justify-center">
            <span className="font-mono text-sm text-muted-foreground">
              jibtermx
            </span>
                    </div>
                </div>

                {/* LOADING OVERLAY */}
                <motion.div
                    className="h-[50vh] absolute inset-0 flex flex-col items-center justify-center gap-4"
                    style={{opacity: loaderOpacity}}
                >
          <span className="font-mono text-xs text-muted-foreground tracking-widest">
            Initialising...
          </span>
                    {/* Track */}
                    <div className="w-48 h-0.5 bg-muted rounded-full overflow-hidden">
                        {/* Fill */}
                        <motion.div
                            className="h-full bg-green-500 rounded-full"
                            style={{width: loaderWidth}}
                        />
                    </div>
                </motion.div>

                {/* TERMINAL CONTENT — fades in when loaded */}
                <motion.div
                    className="flex-1 flex items-center justify-center"
                    style={{opacity: contentOpacity}}
                >
                    <Terminal ready={ready}/>
                </motion.div>
            </motion.div>
        </section>
    );
}
