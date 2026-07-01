"use client";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/lib/shared/components/themeToggle";
import { useEffect, useState } from "react";
import HeaderProfile from "@/app/components/header/header-profile";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

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

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "History", href: "#work-history" },
    { label: "Contact", href: "#contact" },
  ];

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
        <HeaderProfile />

        {/*For Larger Screen*/}
        <div className={"flex items-center gap-1"}>
          <div className={"hidden md:flex items-center"}>
            {links.map((link, index) => (
              <Link key={index} href={link.href}>
                <Button variant={"ghost"}>{link.label}</Button>
              </Link>
            ))}
          </div>
          <ThemeToggle />
          <Button
            aria-label="Toggle menu"
            variant={"outline"}
            size={"icon"}
            onClick={() => setIsOpen((prev) => !prev)}
            className={cn("md:hidden ml-1 transition-colors shrink-0")}
          >
            {isOpen ? (
              <X className={"w-5 h-5"} />
            ) : (
              <Menu className={"w-5 h-5"} />
            )}
          </Button>
        </div>
      </div>

      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 shadow-md",
          "bg-background",
          isOpen ? "max-h-100 px-4 pb-4" : "max-h-0",
        )}
      >
        <div className={cn("flex flex-col")}>
          {links.map((link, index) => (
            <Link key={index} href={link.href} onClick={() => setIsOpen(false)}>
              <Button variant={"ghost"}>{link.label}</Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
