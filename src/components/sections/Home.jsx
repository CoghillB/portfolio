import {RevealOnScroll} from "../RevealOnScroll";
import {useTheme} from "../../context/ThemeContext";

export const Home = () => {
    const {theme} = useTheme();
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative"
        >
            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#FF5733] via-[#FF9933] to-[#FFD700] bg-clip-text text-transparent leading-right animate-float">
                        Hi, I'm Brayden Coghill
                    </h1>

                    <p className={`text-lg mb-8 max-w-lg mx-auto ${
                        theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                    }`}>
                        I'm a frontend developer with a passion for crafting clean, responsive, and user-friendly web
                        interfaces.
                        I specialize in turning design concepts into interactive experiences using modern technologies
                        like HTML,
                        CSS, JavaScript, and frameworks such as React. With a strong understanding of REST APIs, I build
                        dynamic applications that seamlessly connect to backend services. I take pride in writing
                        maintainable code, optimizing performance, and creating accessible interfaces that work across
                        all devices. I'm constantly learning and evolving to stay current with the latest trends in web
                        development.

                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="#about"
                            className="border border-[#FFD700]/50 text-[#B8860B] py-3 px-6 rounded-lg font-medium transition-all duration-300
                            hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,215,0,0.4)] hover:bg-[#FFD700]/10 backdrop-blur-sm"
                        >
                            About Me
                        </a>
                        <a
                            href="#projects"
                            className="border border-[#FF9933]/50 text-[#D2691E] py-3 px-6 rounded-lg font-medium transition-all duration-300
                            hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,153,51,0.4)] hover:bg-[#FF9933]/10 backdrop-blur-sm"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="border border-[#FF5733]/50 text-[#B22222] py-3 px-6 rounded-lg font-medium transition-all duration-300
                            hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,87,51,0.4)] hover:bg-[#FF5733]/10 backdrop-blur-sm"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
