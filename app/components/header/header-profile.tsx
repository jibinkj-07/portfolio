import {useEffect, useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {AppData} from "@/lib/constants/app-data";
import Image from "next/image";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {X} from "lucide-react";
import {AppUtils} from "@/lib/shared/util/app-utils";
import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";

export default function HeaderProfile() {


    return (
        <Dialog>
            <DialogTrigger
                className="flex items-center justify-center gap-2 cursor-pointer"
            >
                <Avatar>
                    <AvatarImage src={AppData.profileURL} alt="Profile"/>
                    <AvatarFallback className="bg-orange-600 font-bold text-white">
                        J
                    </AvatarFallback>
                </Avatar>

                <h3 className="text-lg font-bold">Jibin K John</h3>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Jibin K John</DialogTitle>
                    <DialogDescription className={"uppercase tracking-widest text-xs"}>Software
                        Engineer</DialogDescription>

                </DialogHeader>
                <Image
                    src={AppData.profileURL}
                    alt="Preview"
                    className="w-full shadow-xl border rounded-xl"
                    width={300}
                    height={350}
                    onClick={(e) => e.stopPropagation()}
                />
            </DialogContent>


        </Dialog>
    );
}
