"use client";

import {useEffect, useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {AppData} from "@/lib/constants/app-data";
import Image from "next/image";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {X} from "lucide-react";
import {AppUtils} from "@/lib/shared/util/app-utils";

export default function HeaderProfile() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const html = document.documentElement;
        const body = document.body;

        if (open) {
            html.style.overflow = "hidden";
            body.style.overflow = "hidden";
            body.style.position = "fixed";
            body.style.width = "100%";
        } else {
            html.style.overflow = "";
            body.style.overflow = "";
            body.style.position = "";
            body.style.width = "";
        }

        return () => {
            html.style.overflow = "";
            body.style.overflow = "";
            body.style.position = "";
            body.style.width = "";
        };
    }, [open]);


    return (
        <>
            <div
                className="flex items-center justify-center gap-2 cursor-pointer"
                onClick={() => setOpen(true)}
            >
                <Avatar>
                    <AvatarImage src={AppData.profileURL} alt="Profile"/>
                    <AvatarFallback className="bg-orange-600 font-bold text-white">
                        J
                    </AvatarFallback>
                </Avatar>

                <h3 className="text-lg font-bold">Jibin K John</h3>
            </div>

            {/* Preview Modal */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        className="fixed h-dvh inset-0 z-50 flex items-center justify-center bg-muted/80 p-10"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                    >
                        <div
                            className={cn(
                                "relative w-100 md:w-120 flex items-center justify-center",
                                "bg-background rounded-4xl border p-8",
                                "flex flex-col items-start gap-6 shadow-2xl",
                            )}
                        >
                            <Button
                                variant={"default"}
                                size={"icon-sm"}
                                className={"absolute -top-5 -right-8"}
                                onClick={() => setOpen(false)}
                            >
                                <X/>
                            </Button>

                            <Image
                                src={AppData.profileURL}
                                alt="Preview"
                                className="w-full shadow-xl border rounded-xl"
                                width={400}
                                height={450}
                                onClick={(e) => e.stopPropagation()}
                            />
                            <div className={"w-full flex items-center justify-between"}>
                                <div>
                                    <h3
                                        className={"text-xs tracking-widest text-muted-foreground"}
                                    >
                                        SOFTWARE ENGINEER
                                    </h3>
                                    <h3 className={"text-lg font-medium"}>Jibin K John</h3>
                                </div>

                                <div className={"text-sm text-right text-muted-foreground capitalize"}>
                  <span className={"text-foreground font-bold"}>
                    {AppUtils.getExperience()}+
                  </span>{" "}
                                    yrs exp
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
