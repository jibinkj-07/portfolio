import {useEffect, useState, useRef} from "react";
import {AppUtils} from "@/lib/shared/util/app-utils";

const aboutScript = [
    {
        command: "whoami",
        output: "Jibin K John — Software Engineer",
        delay: 500,
    },
    {
        command: "cat philosophy.txt",
        output:
            "I focus on building scalable web and mobile applications that people genuinely enjoy using, with an emphasis on clean architecture, developer experience, performance, and intuitive user interfaces. I’m committed to continuous learning and constantly exploring new technologies to build better software.",
        delay: 500,
    },
    {
        command: "cat experience.txt",
        output: `${AppUtils.getExperience()}+ years building full-stack products across fintech, IOT-tech, and SaaS domains. From solo projects to cross-functional teams of 15+, I've shipped features that scale.`,
        delay: 500,
    },
    {
        command: "cd skills/",
        output: "",
        delay: 500,
    },

    {
        command: "ls mobile/",
        output:
            "Flutter · Dart · Bloc · Provider · Cloud Architect · Firebase · Hive · MQTT",
        delay: 500,
    },
    {
        command: "ls frontend/",
        output: "React · Next.js · TypeScript · JavaScript · TailwindCSS",
        delay: 500,
    },
    {
        command: "ls backend/",
        output: "Node.js · Express.js · REST APIs · JWT · WebSockets · BullMQ",
        delay: 500,
    },
    {
        command: "ls data_and_cloud/",
        output: "MongoDB · Firebase · GCP · Redis · Vercel · Render",
        delay: 500,
    },
    {
        command: "ls tools_and_workflows/",
        output: "Git · GitHub · Postman · Figma · VS Code · Android Studio · Grafana",
        delay: 500,
    },
    {
        command: "echo location",
        output: "Ireland",
        delay: 500,
    },
];

type Line = { type: "command" | "output"; text: string; done?: boolean };

function sleep(ms: number) {
    return new Promise<void>((r) => setTimeout(r, ms));
}

async function typeText(
    text: string,
    speed: number,
    onUpdate: (val: string) => void,
    isCancelled: () => boolean,
): Promise<void> {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        if (isCancelled()) return;
        result += text[i];
        onUpdate(result);
        await sleep(speed);
    }
}

type TerminalProps = { ready?: boolean };

export default function Terminal({ready = false}: TerminalProps) {
    const [lines, setLines] = useState<Line[]>([]);
    const [showCursor, setShowCursor] = useState(true);
    const [typing, setTyping] = useState(false);
    const cancelledRef = useRef(false);

    useEffect(() => {
        const id = setInterval(() => setShowCursor((v) => !v), 530);
        return () => clearInterval(id);
    }, []);

    useEffect(() => {
        if (!ready) return;

        cancelledRef.current = false;
        const isCancelled = () => cancelledRef.current;

        const run = async () => {
            setTyping(true);
            for (const item of aboutScript) {
                if (isCancelled()) return;
                setLines((prev) => [...prev, {type: "command", text: ""}]);
                await typeText(
                    item.command,
                    40,
                    (partial) => {
                        if (isCancelled()) return;
                        setLines((prev) => {
                            const next = [...prev];
                            next[next.length - 1] = {type: "command", text: partial};
                            return next;
                        });
                    },
                    isCancelled,
                );
                setLines((prev) => {
                    const next = [...prev];
                    next[next.length - 1] = {...next[next.length - 1], done: true};
                    return next;
                });
                await sleep(item.delay);
                if (isCancelled()) return;
                setLines((prev) => [...prev, {type: "output", text: item.output}]);
                await sleep(200);
            }
            setTyping(false);
        };

        run().then();
        return () => {
            cancelledRef.current = true;
        };
    }, [ready]);

    return (
        <div className="w-full min-h-[50vh] flex flex-col  p-4 font-mono text-sm space-y-2">
            {lines.map((line, i) =>
                line.type === "command" ? (
                    <p key={i} className="text-foreground leading-relaxed">
                        <span className="text-green-600">jibin@portfolio</span>
                        <span className="text-muted-foreground">:~# </span>
                        {line.text.split(" ").map((line, i) => {

                            if (i > 0) return (<span key={i} className={"text-blue-500 ml-1 font-bold"}>{line}</span>)
                            return (<span key={i}>{line}</span>)
                        })}
                        {/* Inline cursor while this line is actively being typed */}
                        {!line.done && (
                            <span
                                className="inline-block w-2 h-3.5 align-text-bottom bg-green-600"
                                style={{opacity: showCursor ? 1 : 0}}
                            />
                        )}
                    </p>
                ) : (
                    <p key={i} className="text-foreground leading-relaxed mb-4">
                        {line.text}
                    </p>
                ),
            )}

            {/* Trailing cursor after all lines when not typing */}
            {!typing && lines.length > 0 && (
                <p className="text-foreground flex items-center">
                    <span className="text-green-600">jibin@portfolio</span>
                    <span className="text-muted-foreground">:~# </span>
                    <span
                        className="ml-1 inline-block w-2 h-3.5 align-text-bottom bg-green-600"
                        style={{opacity: showCursor ? 1 : 0}}
                    />
                </p>
            )}
        </div>
    );
}
