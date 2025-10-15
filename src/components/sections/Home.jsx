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
                        Brayden Coghill
                    </h1>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Software Developer</h2>
                </RevealOnScroll>

                <RevealOnScroll animation="fade-up" delay={0.3}>
                    <p className={`text-lg mb-8 max-w-2xl mx-auto ${
                        theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                    }`}>
                        I am a software developer specializing in frontend web development. I build clean, responsive, and user-friendly web applications using modern technologies like React, JavaScript, HTML, and CSS. I have experience with REST APIs and am committed to writing maintainable, high-performance, and accessible code.
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
