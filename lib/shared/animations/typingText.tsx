"use client";

import {useEffect, useMemo, useState} from "react";
import {cn} from "@/lib/utils";

type Segment = {
    text: string;
    className?: string;
};

type Props = {
    segments: Segment[];
    speed?: number;
    startDelay?: number;
    className?: string;
};

export default function TypingText({
                                       segments,
                                       speed = 60,
                                       startDelay = 1000,
                                       className,
                                   }: Props) {
    const fullText = useMemo(
        () => segments.map((s) => s.text).join(""),
        [segments],
    );

    const [started, setStarted] = useState(false);
    const [index, setIndex] = useState(0);

    // Derived values
    const finished = index >= fullText.length;

    // Initial cursor blinking delay
    useEffect(() => {
        const timer = setTimeout(() => {
            setStarted(true);
        }, startDelay);

        return () => clearTimeout(timer);
    }, [startDelay]);

    // Typing animation
    useEffect(() => {
        if (!started || finished) return;

        const timer = setTimeout(() => {
            setIndex((prev) => prev + 1);
        }, speed);

        return () => clearTimeout(timer);
    }, [started, finished, index, speed]);

    return (
        <span className={cn(className)}>
      {segments.map((segment, i) => {
          const start = segments
              .slice(0, i)
              .reduce((sum, s) => sum + s.text.length, 0);

          const visible = Math.max(
              0,
              Math.min(index - start, segment.text.length),
          );

          return (
              <span key={i} className={segment.className}>
            {segment.text.slice(0, visible)}
          </span>
          );
      })}

            {!finished && (
                <span
                    className={cn(
                        "ml-1 inline-block h-[.8em] w-1 rounded-full",
                        "bg-linear-to-b from-blue-400 via-blue-500 to-cyan-400",
                        "animate-cursor-blink",
                    )}
                />
            )}
    </span>
    );
}
