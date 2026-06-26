import StarField from "@/lib/shared/components/startField";
import Header from "@/app/components/header/header";
import Hero from "@/app/components/hero";
import About from "@/app/components/about/about";
import Projects from "@/app/components/projects/projects";

export default function Home() {
    return (
        <div className={""}>
            <StarField/>
            <Header/>
            <main className={"max-w-6xl mx-auto"}>
                <Hero/>
                <About/>
                <Projects/>
            </main>
        </div>
    );
}
