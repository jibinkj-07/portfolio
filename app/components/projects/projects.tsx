"use client"
import SectionTitle from "@/lib/shared/components/sectionTitle";
import {Project, projectsData} from "@/lib/constants/projects-data";
import ProjectTile from "@/app/components/projects/project-tile";
import {useEffect, useRef} from "react";

export default function Projects() {
    const secRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!secRef.current) return;

        const reveals = secRef.current.querySelectorAll(".reveal");

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add("visible");
                        io.unobserve(e.target);
                    }
                });
            },
            {threshold: 0.12},
        );

        reveals.forEach((element) => io.observe(element));

        return () => {
            io.disconnect();
        }
    }, []);

    return (
        <section
            ref={secRef}
            id={"projects"}
            className={"flex flex-col gap-8 min-h-screen p-4"}
        >
            <SectionTitle title={"Featured Projects"}/>

            <div className={"flex flex-col gap-12"}>
                {projectsData.map((project: Project) => (
                    <ProjectTile key={project.id} project={project}/>
                ))}
            </div>
        </section>
    );
}
