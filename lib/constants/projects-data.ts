import {Globe} from "lucide-react";
import {FaYoutube} from "react-icons/fa";

export const projectsData = [
    {
        id: 1,
        icon: "https://res.cloudinary.com/jibin-kj/image/upload/v1779287293/play_store_512_qkskt8.png",
        name: "Workloom",
        description: "Workloom is a collaborative shift management app built for real life - not just workplaces." +
            " Share your work schedule with family or friends, see everyone's shifts at a glance, and get clear insights into your earnings and hours worked." +
            " Whether you're coordinating with housemates or keeping your partner in the loop, Workloom keeps" +
            " everyone on the same page.",
        links: [{
            platform: "web",
            icon: Globe,
            link: "https://workloomapp.com"

        }, {
            platform: "youtube",
            icon: FaYoutube,
            link: "https://youtu.be/IktEYPmdsw4?si=-8O_WO4Ly8Pu-4xX"

        }],
        tags: ["Next.js", "Mongo DB", "Express.js", "Redis", "Bull MQ", "Tailwind CSS", "TypeScript", "JWT", "Cloudinary", "Vercel", "Cloud Run"],
        preview: "https://res.cloudinary.com/jibin-kj/image/upload/v1782504478/workloom_grwqde.png",
    }
]