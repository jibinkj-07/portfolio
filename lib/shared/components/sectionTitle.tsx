import {cn} from "@/lib/utils";

export default function SectionTitle({title,className}: { title: string ,className?: string }) {
    return (<h1 className={cn("flex items-center gap-2 uppercase font-semibold tracking-[1.5px] text-blue-500",className)}>
        <span className="block w-5 h-0.5 bg-blue-500 rounded-full"/>
        {title}
    </h1>)
}