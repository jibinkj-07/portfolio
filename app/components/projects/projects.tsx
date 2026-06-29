"use client";
import SectionTitle from "@/lib/shared/components/sectionTitle";
import { Project, projectsData } from "@/lib/constants/projects-data";
import ProjectTile from "@/app/components/projects/project-tile";
import {useIntersectionObserver} from "@/lib/shared/hooks/useIntersectionObserver";

export default function Projects() {
const secRef=useIntersectionObserver();

  return (
    <section
      ref={secRef}
      id={"projects"}
      className={"flex flex-col gap-8 min-h-screen p-4"}
    >
      <SectionTitle title={"Featured Projects"} />

      <div className={"flex flex-col gap-12"}>
        {projectsData.map((project: Project) => (
          <ProjectTile key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
