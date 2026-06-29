"use client";
import SectionTitle from "@/lib/shared/components/sectionTitle";
import {
  workHistory,
  BadgeVariant,
  DotVariant,
} from "@/lib/constants/work-data";
import { Badge } from "@/components/ui/badge";
import { useIntersectionObserver } from "@/lib/shared/hooks/useIntersectionObserver";

const badgeClass: Record<BadgeVariant, string> = {
  purple:
    "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  teal: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
  amber: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
  gray: "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400",
};

const dotClass: Record<DotVariant, string> = {
  purple: "bg-purple-100 border-purple-500",
  teal: "bg-teal-100 border-teal-500",
  amber: "bg-amber-100 border-amber-500",
  muted: "bg-white border-gray-300 dark:bg-gray-800 dark:border-gray-600",
};

export default function WorkHistory() {
  const secRef = useIntersectionObserver();
  return (
    <section
      ref={secRef}
      id="history"
      className="absolute left-0 right-0 min-h-screen my-20 bg-primary/10 p-4 shadow py-12"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-20">
        <SectionTitle title="Work History" className={"reveal"} />

        <div className="flex-1 max-w-4xl mx-auto flex flex-col gap-6 w-full">
          {workHistory.map((entry, i) => (
            <div
              key={i}
              className="reveal flex gap-2"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Rail: dot + connector line */}
              <div
                className="flex flex-col items-center shrink-0 w-10"
                aria-hidden="true"
              >
                <div
                  className={`w-4 h-4 rounded-full border-2 shrink-0 mt-1.5 z-10 ${dotClass[entry.dot.variant]}`}
                  style={{
                    boxShadow: `0 0 6px 2px ${entry.dot.colorCode}99`,
                  }}
                />
                {
                  <div
                    className="flex-1 w-0.5 mt-2 rounded-full"
                    style={{
                      background: `linear-gradient(to bottom,${entry.dot.colorCode} 0%,${entry.dot.colorCode}80 60%,transparent 100%)`,
                    }}
                  />
                }
              </div>

              {/* Card */}
              <div
                className={`flex-1 min-w-0 ${i < workHistory.length - 1 ? "pb-10" : ""}`}
              >
                <div className={"flex flex-col p-1 gap-8"}>
                  {/* Header */}
                  <div className={"flex flex-col"}>
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h3 className="text-lg font-medium">{entry.role}</h3>

                      <Badge
                        variant={"outline"}
                        className={`${badgeClass[entry.badge.variant]} p-3`}
                      >
                        {entry.badge.label}
                      </Badge>
                    </div>

                    {/* Meta */}
                    <p className="text-sm flex flex-wrap gap-1.5 items-center text-muted-foreground">
                      <span>{entry.company}</span>
                      <span>·</span>
                      <span>{entry.location}</span>
                      <span>·</span>
                      <span>{entry.period}</span>
                    </p>
                  </div>
                  {/* Achievements */}
                  <ul className="space-y-1 list-none p-0">
                    {entry.achievements.map((a, j) => (
                      <li
                        key={j}
                        className="leading-relaxed pl-4 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-foreground/50 text-justify"
                      >
                        {a}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  {entry.tags && entry.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {entry.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant={"secondary"}
                          className={"p-3 bg-blue-200 text-black"}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
