import {RevealOnScroll} from "../RevealOnScroll";

export const About = () => {
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
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent text-center">
                        About Me
                    </h2>

                    <div
                        className="rounded-xl p-8 border border-blue-900/30 bg-blue-950/20 backdrop-blur-sm shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <p className="text-gray-300 mb-6">
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
                                className="rounded-xl p-6 hover:-translate-y-1 transition-all duration-300 bg-indigo-950/20 backdrop-blur-sm border border-indigo-900/30">
                                <h3 className="text-xl font-bold mb-4 text-indigo-300"> Frontend Skills</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-900/40 text-blue-300 py-1 px-3 rounded-full text-sm hover:bg-blue-800/50
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.3)] transition-all duration-300 cursor-default
                    "
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="p-6 rounded-xl border border-purple-900/30 bg-purple-950/20 backdrop-blur-sm shadow-lg hover:-translate-y-1 transition-all duration-300 mt-8">
                        <h3 className="text-xl font-bold mb-4 text-purple-300"> 🏫 Education </h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
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
                                    className="text-cyan-400 hover:text-cyan-300 hover:underline transition-colors duration-300"
                                >
                                    View Certificate
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
