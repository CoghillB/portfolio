import {RevealOnScroll} from "../RevealOnScroll";
import { useTheme } from "../../context/ThemeContext";

export const About = () => {
    const { theme } = useTheme();
    const frontendSkills = [
        "Java",
        "Python",
        "Using REST APIs",
        "React",
        "jQuery",
        "JavaScript (ES6+)",
        "JavaFX",
        "CSS3",
        "TailwindCSS",
        "Bootstrap",
        "HTML5",
        "Vite",
        "Responsive Design",
        "VB.NET"
    ];

    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
                <div className="max-w-3xl mx-auto px-4">
                    <RevealOnScroll animation="fade-down" delay={0.1}>
                        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#FF5733] via-[#FF9933] to-[#FFD700] bg-clip-text text-transparent text-center">
                            About Me
                        </h2>
                    </RevealOnScroll>

                    <RevealOnScroll animation="fade-right" delay={0.2}>
                        <div
                            className={`rounded-xl p-8 border backdrop-blur-sm shadow-lg hover:-translate-y-1 transition-all duration-300 ${
                                theme === 'dark' 
                                    ? 'border-[#FF9933]/40 bg-[#1a2a52]/70 text-gray-200' 
                                    : 'border-[#FF9933]/20 bg-white/70 text-gray-700'
                            }`}>
                            <p className={`mb-6 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                                I'm a husband and proud father based in Kelowna, BC, currently building my second career as
                                a frontend developer. Before stepping into tech, I worked as a commercial diver, a
                                challenging and unconventional path that taught me resilience, creative problem-solving, and
                                how to lead under pressure. Now, I bring that same determination and mindset into web
                                development. I chose frontend because I love helping people bring their ideas to
                                life—translating vision into something real, interactive, and meaningful on screen. Whether
                                it's a personal project or a client's dream, seeing it come together visually is what drives
                                me every day.
                            </p>

                            <div className="flex flex-col gap-6">
                                <div
                                    className={`rounded-xl p-6 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm border ${
                                        theme === 'dark'
                                            ? 'bg-[#FFD700]/20 border-[#FFD700]/50'
                                            : 'bg-[#FFD700]/10 border-[#FFD700]/30'
                                    }`}>
                                    <h3 className={`text-xl font-bold mb-4 ${
                                        theme === 'dark' ? 'text-[#FFD700]' : 'text-[#B8860B]'
                                    }`}> Frontend Skills</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {frontendSkills.map((tech, key) => (
                                            <span
                                                key={key}
                                                className={`py-1 px-3 rounded-full text-sm transition-all duration-300 cursor-default ${
                                                    theme === 'dark'
                                                        ? 'bg-[#FFD700]/30 text-[#FFD700] hover:bg-[#FFD700]/40 hover:shadow-[0_2px_8px_rgba(255,215,0,0.5)]'
                                                        : 'bg-[#FFD700]/20 text-[#B8860B] hover:bg-[#FFD700]/30 hover:shadow-[0_2px_8px_rgba(255,215,0,0.3)]'
                                                }`}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll animation="fade-left" delay={0.3}>
                        <div
                            className={`p-6 rounded-xl border backdrop-blur-sm shadow-lg hover:-translate-y-1 transition-all duration-300 mt-8 ${
                                theme === 'dark'
                                    ? 'border-[#FF5733]/40 bg-[#FF5733]/20'
                                    : 'border-[#FF5733]/20 bg-[#FF5733]/10'
                            }`}>
                            <h3 className={`text-xl font-bold mb-4 ${
                                theme === 'dark' ? 'text-[#FF6347]' : 'text-[#B22222]'
                            }`}> 🏫 Education </h3>
                            <ul className={`list-disc list-inside space-y-2 ${
                                theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                            }`}>
                                <li className="list-none">
                                    <strong>Diploma in Computer Information Systems</strong> - Okanagan College
                                    (2023-2025)
                                </li>
                                <li style={{listStyleType: "none"}}>
                                    <strong>Relevant Coursework:</strong><br/> Computer Programming II, Project Management,
                                    Client-side Web Systems,
                                    Computer Data Structures, Algorithms, Systems Analysis & Design, Web Development with
                                    LAMP,
                                    Information System Security
                                </li>
                                <br/>
                                <li style={{listStyleType: "none"}}>
                                    <strong>Responsive Web Design Certification</strong> - FreeCodeCamp (2022) -{" "}
                                    <a
                                        href="https://www.freecodecamp.org/certification/BraydenCoghill/responsive-web-design"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`hover:underline transition-colors duration-300 ${
                                            theme === 'dark' 
                                                ? 'text-[#FF6347] hover:text-[#FF7F50]' 
                                                : 'text-[#B22222] hover:text-[#8B0000]'
                                        }`}
                                    >
                                        View Certificate
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </RevealOnScroll>
                </div>
        </section>
    );
};
