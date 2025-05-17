import {RevealOnScroll} from "../RevealOnScroll";

export const Home = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative"
        >
            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent leading-right animate-float">
                        Hi, I'm Brayden Coghill
                    </h1>

                    <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto">
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
                            className="border border-purple-500/50 text-purple-300 py-3 px-6 rounded-lg font-medium transition-all duration-300
                            hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:bg-purple-900/30 backdrop-blur-sm"
                        >
                            About Me
                        </a>
                        <a
                            href="#projects"
                            className="border border-blue-500/50 text-blue-300 py-3 px-6 rounded-lg font-medium transition-all duration-300
                            hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:bg-blue-900/30 backdrop-blur-sm"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="border border-indigo-500/50 text-indigo-300 py-3 px-6 rounded-lg font-medium transition-all duration-300
                            hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(99,102,241,0.4)] hover:bg-indigo-900/30 backdrop-blur-sm"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
