"use client";

import {Button} from "@/components/ui/button";
import {useTheme} from "next-themes";
import {AnimatePresence, motion} from "framer-motion";
import {Sun, Moon} from "lucide-react";
import {useEffect, useState} from "react";

export function ThemeToggle() {
    const {setTheme, resolvedTheme} = useTheme();
    const [mounted, setMounted] = useState(false);


    // eslint-disable-next-line react-hooks/set-state-in-effect
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    const isDark = resolvedTheme === "dark";

    return (
        <Button
            size="icon"
            variant="secondary"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="relative overflow-hidden"
        >
            <AnimatePresence mode="wait" initial={false}>
                {isDark ? (
                    <motion.div
                        key="moon"
                        initial={{opacity: 0, scale: 0.6, y: 10, filter: "blur(4px)"}}
                        animate={{opacity: 1, scale: 1, y: 0, filter: "blur(0px)"}}
                        exit={{opacity: 0, scale: 0.6, y: -10, filter: "blur(4px)"}}
                        transition={{duration: 0.35, ease: "easeOut"}}
                        className="absolute"
                    >
                        <Moon className="size-4"/>
                    </motion.div>
                ) : (
                    <motion.div
                        key="sun"
                        initial={{opacity: 0, scale: 0.6, y: -10, filter: "blur(4px)"}}
                        animate={{opacity: 1, scale: 1, y: 0, filter: "blur(0px)"}}
                        exit={{opacity: 0, scale: 0.6, y: 10, filter: "blur(4px)"}}
                        transition={{duration: 0.35, ease: "easeOut"}}
                        className="absolute"
                    >
                        <Sun className="size-4"/>
                    </motion.div>
                )}
            </AnimatePresence>
        </Button>
    );
}