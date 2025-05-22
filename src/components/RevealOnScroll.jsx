import { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children, animation = "fade-up", delay = 0, threshold = 0.2 }) => {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    ref.current.classList.add("visible");
                }
            },
            { threshold: threshold, rootMargin: "0px 0px -50px 0px" }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, [threshold]);

    // Get the appropriate animation class based on the animation prop
    const getAnimationClass = () => {
        switch (animation) {
            case "fade-up":
                return "reveal-fade-up";
            case "fade-down":
                return "reveal-fade-down";
            case "fade-left":
                return "reveal-fade-left";
            case "fade-right":
                return "reveal-fade-right";
            case "zoom-in":
                return "reveal-zoom-in";
            case "zoom-out":
                return "reveal-zoom-out";
            case "flip-up":
                return "reveal-flip-up";
            case "flip-down":
                return "reveal-flip-down";
            case "flip-left":
                return "reveal-flip-left";
            case "flip-right":
                return "reveal-flip-right";
            case "rotate":
                return "reveal-rotate";
            default:
                return "reveal-fade-up";
        }
    };

    return (
        <div 
            ref={ref} 
            className={`reveal ${getAnimationClass()}`}
            style={{ transitionDelay: `${delay}s` }}
        >
            {children}
        </div>
    );
};
