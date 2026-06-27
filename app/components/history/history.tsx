import SectionTitle from "@/lib/shared/components/sectionTitle";

export default function History() {
    return (
        <section
            id={"history"}
            className={
                "absolute left-0 right-0 min-h-screen my-20 bg-primary/10 p-4 shadow py-12"
            }
        >
            <div className={"max-w-6xl mx-auto"}>
                <SectionTitle title={"Work History"}/>
            </div>
        </section>
    );
}
