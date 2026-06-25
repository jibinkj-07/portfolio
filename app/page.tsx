import StarField from "@/lib/shared/components/startField";
import Header from "@/app/components/header";
import Hero from "@/app/components/hero";

export default function Home() {
    return (
        <div className={""}>
            <StarField/>
            <Header/>
            <main className={"max-w-6xl mx-auto"}>
                <Hero/>
            </main>
        </div>
    );
}
