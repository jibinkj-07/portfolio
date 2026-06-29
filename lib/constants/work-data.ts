export type BadgeVariant = "purple" | "teal" | "amber" | "gray";
export type DotVariant = "purple" | "teal" | "amber" | "muted";

export interface WorkEntry {
  role: string;
  company: string;
  location: string;
  period: string;
  badge: {
    label: string;
    variant: BadgeVariant;
    colorCode: string;
  };
  dot: { variant: DotVariant; colorCode: string };
  achievements: string[];
  tags?: string[];
}

export const workHistory: WorkEntry[] = [
  {
    role: "Freelance Full-Stack Engineer",
    company: "Self-Employed",
    location: "Remote, Ireland",
    period: "May 2024 – Present",
    badge: { label: "Current", variant: "purple", colorCode: "#8B5CF6" },
    dot: { variant: "purple", colorCode: "#8B5CF6" },
    achievements: [
      "Delivered 6+ production-ready applications across workforce management, finance, productivity, and" +
        " retail - from architecture to deployment.",
      "Cut API response times by 30% on a Node.js backend using Redis caching, maintaining 99.9% uptime under sustained load.",
      "Built real-time communication systems with WebSockets and MQTT for live updates and IoT device control.",
      "Managed full delivery lifecycle - system design, cloud deployment, debugging, and production support.",
    ],
    tags: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Flutter",
      "MongoDB",
      "Redis",
      "WebSockets",
      "MQTT",
      "Strpie",
      "GCP",
      "Cloud Run",
    ],
  },
  {
    role: "Flutter Developer",
    company: "Onwords Smart Solutions",
    location: "On-site, India",
    period: "Jan 2023 – Apr 2024",
    badge: { label: "1 yr 4 mos", variant: "teal", colorCode: "#14B8A6" },
    dot: { variant: "teal", colorCode: "#14B8A6" },
    achievements: [
      "Engineered a smart home automation app using Flutter and MQTT, enabling real-time IoT device control at sub-second latency.",
      "Integrated OpenAI API to deliver intelligent, personalised features within the mobile product.",
      "Reduced screen load times by 35% through Bloc state management and local data caching with Hive.",
      "Collaborated cross-functionally with backend and product teams to ship scalable mobile releases on schedule.",
    ],
    tags: ["Flutter", "Dart", "MQTT", "Bloc", "Hive", "OpenAI API", "Firebase"],
  },
  {
    role: "IT Analyst",
    company: "Wipro",
    location: "Remote, India",
    period: "Sep 2020 – Jan 2023",
    badge: { label: "2 yrs 5 mos", variant: "amber", colorCode: "#F59E0B" },
    dot: { variant: "amber", colorCode: "#F59E0B" },
    achievements: [
      "Provided technical troubleshooting and operational support for enterprise systems across multiple internal teams.",
      "Maintained incident documentation and root-cause analyses to strengthen the internal knowledge base.",
      "Communicated outage resolutions and technical updates clearly to stakeholders and support teams.",
    ],
    tags: ["Technical Support", "Incident Management", "Enterprise Systems"],
  },
  // {
  //     role: "Customer Assistant",
  //     company: "Tesco",
  //     location: "On-site, Ireland",
  //     period: "Sep 2024 – Present",
  //     badge: { label: "Part-time", variant: "gray" ,colorCode:"#6B7280"},
  //     dot: { variant: "muted" ,colorCode:"#6B7280"},
  //     achievements: [
  //         "Part-time role alongside active freelance engineering work and ongoing SaaS product development.",
  //         "Strengthened communication, time management, and problem-solving in a fast-paced customer environment.",
  //     ],
  //     tags: [],
  // },
];
