"use client";
import {cn} from "@/lib/utils";
import {ThemeToggle} from "@/lib/shared/components/themeToggle";
import {useEffect, useState} from "react";
import HeaderProfile from "@/app/components/header/header-profile";

export default function Header() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const THRESHOLD = 10;
        let lastY = window.scrollY;

        const handleScroll = () => {
            const y = window.scrollY;
            const diff = y - lastY;

            if (Math.abs(diff) < THRESHOLD) return;

            if (y < 20) {
                setVisible(true);
            } else {
                setVisible(diff < 0);
            }

            lastY = y;
        };

        window.addEventListener("scroll", handleScroll, {passive: true});

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={cn(
                "sticky top-0 left-0 right-0 z-50 h-16 ",
                "bg-background select-none",
                "transition-all duration-300 ease-out",
                visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0",
            )}
        >
            <div
                className={cn(
                    "h-full w-full max-w-350 mx-auto px-4",
                    "flex items-center justify-between",
                )}
            >
                <HeaderProfile/>
                <div>
                    <ThemeToggle/>
                </div>
            </div>
        </div>
    );
}
