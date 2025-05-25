import {RevealOnScroll} from "../RevealOnScroll";
import {useTheme} from "../../context/ThemeContext";

export const Home = () => {
    const {theme} = useTheme();
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative pt-16 md:pt-0"
        >
            <div className="text-center z-10 px-4">
                <RevealOnScroll animation="zoom-in" delay={0.1}>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#FF5733] via-[#FF9933] to-[#FFD700] bg-clip-text text-transparent leading-right animate-float">
                        Hi, I'm Brayden Coghill
                    </h1>
                </RevealOnScroll>

                <RevealOnScroll animation="fade-up" delay={0.3}>
                    <p className={`text-lg mb-8 max-w-lg mx-auto ${
                        theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                    }`}>
                        I am a frontend developer passionate about crafting clean, responsive, and user-friendly web
                        interfaces. Skilled in transforming design concepts into interactive experiences using modern
                        technologies like HTML, CSS, JavaScript, and frameworks such as React.
                        <br/><br/>
                        Experienced in building dynamic applications that integrate smoothly with backend services
                        through REST APIs. Committed to writing maintainable code, optimizing performance, and creating
                        accessible interfaces that work across all devices.
                        <br/><br/>
                        Continuously learning and evolving to stay current with the latest trends in web development.


                    </p>
                </RevealOnScroll>

                <RevealOnScroll animation="fade-up" delay={0.5}>
                    <div className="flex flex-wrap justify-center gap-4">

                        <a
                            href="#about"
                            className="border border-[#FF4500] text-[#FF4500] py-3 px-6 rounded-lg font-medium transition-all duration-300
                                    hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,69,0,0.6)] hover:bg-[#FF4500]/10 backdrop-blur-sm"
                        >
                            <strong>About Me</strong>
                        </a>
                        <a
                            href="#projects"
                            className="border border-[#FF4500] text-[#FF4500] py-3 px-6 rounded-lg font-medium transition-all duration-300
                                    hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,69,0,0.6)] hover:bg-[#FF4500]/10 backdrop-blur-sm"
                        >
                            <strong>View Projects</strong>
                        </a>
                        <a
                            href="#contact"
                            className="border border-[#FF4500] text-[#FF4500] py-3 px-6 rounded-lg font-medium transition-all duration-300
                                    hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,69,0,0.6)] hover:bg-[#FF4500]/10 backdrop-blur-sm"
                        >
                            <strong>Contact Me</strong>
                        </a>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    )
        ;
};
