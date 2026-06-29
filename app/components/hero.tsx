import { cn } from "@/lib/utils";
import TypingText from "@/lib/shared/animations/typingText";
import DelayedMotion from "@/lib/shared/animations/delayedMotion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id={"home"}
      className={cn("h-[calc(100dvh-64px)]", "relative px-2 lg:px-0")}
    >
      <div
        className={
          "w-full h-full flex flex-col items-center justify-center gap-6"
        }
      >
        <h1
          className={
            "min-h-50 md:min-h-35 text-4xl sm:text-5xl lg:text-6xl text-center leading-tight"
          }
        >
          <TypingText
            speed={40}
            segments={[
              { text: "Building software that " },
              {
                text: "solves real problems",
                className: "text-blue-500 font-medium",
              },
              { text: " through engineering precision" },
            ]}
          />
        </h1>

        <DelayedMotion
          delay={4}
          as="p"
          className="text-center text-lg text-muted-foreground"
        >
          Engineering scalable apps with{" "}
          <span className="text-foreground font-medium">
            Flutter, Next.js, Node.js,
          </span>{" "}
          and modern{" "}
          <span className="text-foreground font-medium">
            Cloud Architecture.
          </span>
        </DelayedMotion>

        <DelayedMotion delay={4} as="div">
          <div className={"mt-5 flex flex-col md:flex-row gap-2"}>
            <Button className={"px-6 py-5"}>Explore Projects</Button>

            <Button variant={"outline"} className={"px-6 py-5"}>
              Resume
            </Button>
          </div>
        </DelayedMotion>
      </div>
    </section>
  );
}
