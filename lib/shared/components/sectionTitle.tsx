export default function SectionTitle({title}: { title: string }) {
    return (<h1 className="flex items-center gap-2 uppercase text-xs font-semibold tracking-[1.5px] text-blue-500">
        <span className="block w-5 h-0.5 bg-blue-500 rounded-full"/>
        {title}
    </h1>)
}