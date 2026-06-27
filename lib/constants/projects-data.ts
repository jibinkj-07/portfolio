import {Globe, LucideIcon} from "lucide-react";
import {FaYoutube} from "react-icons/fa";
import {FaGooglePlay} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaApple} from "react-icons/fa";
import {IconType} from "react-icons";

export interface ProjectLink {
    platform: "web" | "youtube" | "github" | "playstore" | "appstore";
    icon: LucideIcon | IconType;
    link: string;
}

export interface Project {
    id: number;
    icon: string;
    name: string;
    description: string;
    links: ProjectLink[];
    tags: string[];
    preview: string;
}

export const projectsData: Project[] = [
    {
        id: 1,
        icon: "https://res.cloudinary.com/jibin-kj/image/upload/v1779287293/play_store_512_qkskt8.png",
        name: "Workloom",
        description:
            "Workloom is a collaborative shift management app built for real life - not just workplaces." +
            " Share your work schedule with family or friends, see everyone's shifts at a glance, and get clear insights into your earnings and hours worked." +
            " Whether you're coordinating with housemates or keeping your partner in the loop, Workloom keeps" +
            " everyone on the same page.",
        links: [
            {
                platform: "web",
                icon: Globe,
                link: "https://workloomapp.com",
            },
            {
                platform: "youtube",
                icon: FaYoutube,
                link: "https://youtu.be/IktEYPmdsw4?si=-8O_WO4Ly8Pu-4xX",
            },
        ],
        tags: [
            "Next.js",
            "Mongo DB",
            "Express.js",
            "Redis",
            "Bull MQ",
            "Tailwind CSS",
            "TypeScript",
            "JWT",
            "Cloudinary",
            "Vercel",
            "Stripe",
            "Cloud Run",
        ],
        preview:
            "https://res.cloudinary.com/jibin-kj/image/upload/v1782504478/workloom_grwqde.png",
    },
    {
        id: 2,
        icon: "https://res.cloudinary.com/jibin-kj/image/upload/v1782590292/logo-01_negqoa.png",
        name: "Spendwise",
        description:
            "SpendWise is a personal expense tracker that helps users manage daily spending and gain insights" +
            " through interactive charts and reports. It simplifies budgeting by organizing expenses into categories and providing a clear overview of monthly and yearly financial activity.",
        links: [
            {
                platform: "web",
                icon: Globe,
                link: "https://spend-wise-budget.web.app/",
            },
            {
                platform: "playstore",
                icon: FaGooglePlay,
                link: "https://play.google.com/store/apps/details?id=com.codedude.spend_wise",
            },
            {
                platform: "github",
                icon: FaGithub,
                link: "https://github.com/jibinkj-07/SpendWise.git",
            },
        ],
        tags: ["Flutter", "Firebase", "Dart", "Bloc", "Hive"],
        preview:
            "https://res.cloudinary.com/jibin-kj/image/upload/v1782589759/spendwise_wcv7x7.png",
    },
    {
        id: 3,
        icon: "https://res.cloudinary.com/jibin-kj/image/upload/v1782590530/icon_l0m6rg.svg",
        name: "Cinegrid",
        description:
            "CineGrid is a modern movie discovery app that lets users explore trending, popular, and upcoming films, search for titles, and view detailed information including ratings, cast, trailers, and genres through a clean and responsive interface.",
        links: [
            {
                platform: "web",
                icon: Globe,
                link: "https://cinegrid-one-vercel.app",
            },
            {
                platform: "github",
                icon: FaGithub,
                link: "https://github.com/jibinkj-07/Cinegrid.git",
            },
        ],
        tags: ["React", "TMDB API", "CSS", "Java Script", "Vercel"],
        preview:
            "https://res.cloudinary.com/jibin-kj/image/upload/v1782594312/cinegrid_preview_tdq7hq.png",
    },
    {
        id: 4,
        icon: "https://res.cloudinary.com/jibin-kj/image/upload/v1782591937/ost_nhfdbk.webp",
        name: "Onwords Smart Things",
        description:
            "Real-time smart home automation app with MQTT for instant, low-latency device control. Features scene automation engine with scheduling, sunrise/sunset triggers, guest access sharing, and Siri & Alexa integration.",
        links: [
            {
                platform: "playstore",
                icon: FaGooglePlay,
                link: "https://play.google.com/store/apps/details?id=com.onwords.smart_things&pcampaignid=web_share",
            },
            {
                platform: "appstore",
                icon: FaApple,
                link: "https://apps.apple.com/us/app/onwords-smart-things/id6449142647",
            },
        ],
        tags: [
            "Flutter",
            "Firebase",
            "MQTT",
            "IOT",
            "FCM",
            "Crashlytics",
            "Dart",
            "Bloc",
            "Hive",
        ],
        preview:
            "https://res.cloudinary.com/jibin-kj/image/upload/v1782591938/ost_preview_xoq4pa.png",
    },
    {
        id: 5,
        icon: "https://res.cloudinary.com/jibin-kj/image/upload/v1782594311/ic_launcher_fjdr3l.png",
        name: "MQTT Helper",
        description:
            "This Flutter project is an MQTT helper app that enables simple connection to MQTT brokers for publishing and subscribing to messages, making it suitable for IoT communication and lightweight device messaging.",
        links: [
            {
                platform: "github",
                icon: FaGithub,
                link: "https://github.com/jibinkj-07/Mqtt-Helper",
            },
        ],
        tags: ["Flutter", "MQTT", "IOT", "Dart"],
        preview:
            "https://res.cloudinary.com/jibin-kj/image/upload/v1782594639/mqtt_preview_w0g75x.png",
    },
];
