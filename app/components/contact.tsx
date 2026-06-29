import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function Contact() {
  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:jibinkunnumpurath@gmail.com",
      primary: true,
    },
    {
      name: "GitHub",
      icon: FaGithub,
      href: "https://github.com/jibinkj-07",
      primary: false,
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/jibin-k-john-35a468270",
      primary: false,
    },
    {
      name: "Instagram",
      icon: RiInstagramFill,
      href: "https://instagram.com/jibin_k__john",
      primary: false,
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen py-16 md:py-24 px-4 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        {/* Decorative element */}
        <div className="relative">
          <div className="relative bg-linear-to-br from-primary to-primary/90 rounded-3xl shadow-2xl overflow-hidden">
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-72 h-72 bg-white rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-2xl" />
            </div>

            <div className="relative px-6 md:px-12 py-16 md:py-20 flex flex-col items-center text-center">
              <h1 className="text-white text-3xl md:text-5xl font-bold tracking-tight">
                Let&#39;s build something
                <br />
                amazing together
              </h1>

              <p className="text-white/80 text-base md:text-lg max-w-2xl mt-4 leading-relaxed">
                Whether you have a project in mind, need a Software Developer
                expert, or just want to connect - I&#39;m always happy to talk.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full max-w-md">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  if (link.primary) {
                    return (
                      <Button
                        key={link.name}
                        className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
                        asChild
                      >
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Icon className="w-4 h-4 mr-2" />
                          {link.name}
                          <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                        </a>
                      </Button>
                    );
                  }
                  return (
                    <Button
                      key={link.name}
                      variant="outline"
                      className="w-full sm:w-auto bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white/50 hover:scale-105 transition-all duration-300"
                      asChild
                    >
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon className="w-4 h-4 mr-2" />
                        {link.name}
                      </a>
                    </Button>
                  );
                })}
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
