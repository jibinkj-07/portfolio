import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Jibin | Resume",
    description: "Jibin K John resume pdf",
};

export default function ResumePage() {

  return (
    <div className="h-screen w-screen">
      <iframe src="/resume.pdf" className="w-full h-full" />
    </div>
  );
}
