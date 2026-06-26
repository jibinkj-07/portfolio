import SectionTitle from "@/lib/shared/components/sectionTitle";
import {projectsData} from "@/lib/constants/projects-data";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Badge} from "@/components/ui/badge";
import {cn} from "@/lib/utils";

export default function Projects() {
    return (
        <section id={"projects"} className={"flex flex-col gap-8 min-h-screen p-4"}>
            <SectionTitle title={"Projects"}/>

            <div className={"flex flex-col gap-8"}>
                {projectsData.map((project) => (
                    <div
                        key={project.id}
                        className={cn(
                            "group grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden",
                            "rounded-2xl border bg-card p-6",
                            "transition-all duration-300",
                            "hover:-translate-y-1",
                            "hover:border-primary/30",
                            "hover:shadow-xl",
                        )}
                    >
                        <div
                            className={
                                "flex flex-col justify-between gap-6 order-2 md:order-1"
                            }
                        >
                            {/*HEADER*/}
                            <div className={"flex gap-2 justify-between items-center"}>
                                <div
                                    className={
                                        "bg-background border rounded-md flex items-center justify-center"
                                    }
                                >
                                    <Image
                                        src={project.icon}
                                        alt={`${project.name}-icon`}
                                        width={32}
                                        height={32}
                                        className={"rounded-md shrink-0"}
                                    />
                                </div>

                                <div className={"flex gap-2"}>
                                    {project.links.map((link, index) => (
                                        <Link key={index} href={link.link} target={"_blank"}>
                                            <Button key={index} size={"icon"}>
                                                <link.icon className="h-4 w-4"/>
                                            </Button>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className={"flex flex-col gap-2"}>
                                <h2 className="text-2xl font-semibold tracking-tight">
                                    {project.name}
                                </h2>

                                <p className="leading-7 text-muted-foreground">
                                    {project.description}
                                </p>
                            </div>

                            <div className={"flex flex-wrap gap-2"}>
                                {project.tags.map((tag, i) => (
                                    <Badge
                                        key={i}
                                        variant={"secondary"}
                                        className={"p-3 border border-foreground/10"}
                                    >
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        <div className="order-1 md:order-2 overflow-hidden rounded-xl border">
                            <Image
                                src={project.preview}
                                alt={`${project.name} preview`}
                                width={700}
                                height={500}
                                loading="lazy"
                                className="
            h-full
            w-full
            object-cover min-h-30
            transition-transform
            duration-500
            group-hover:scale-105
        "
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
