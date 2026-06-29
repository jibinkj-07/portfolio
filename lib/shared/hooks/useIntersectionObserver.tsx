import {useEffect, useRef} from "react";

export  function useIntersectionObserver(){
    const secRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!secRef.current) return;

        const reveals = secRef.current.querySelectorAll(".reveal");

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add("visible");
                        io.unobserve(e.target);
                    }
                });
            },
            { threshold: 0.12 },
        );

        reveals.forEach((element) => io.observe(element));

        return () => {
            io.disconnect();
        };
    }, []);

    return secRef;
}