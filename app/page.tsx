import StarField from "@/lib/shared/components/startField";
import {ThemeToggle} from "@/lib/shared/components/themeToggle";

export default function Home() {
    return (
        <div className={"p-4 max-w-7xl mx-auto"}>
            <StarField/>
            <ThemeToggle/>
        </div>
    );
}
