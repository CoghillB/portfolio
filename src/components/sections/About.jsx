import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const frontendSkills = [
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

    const backendSkills = [
        "Java",
        "Node.js",
        "Python",
        "PHP",
        "C",
        "Django",
        "MySQL",
        "Docker",
        "REST APIs"
    ];

    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        {" "}
                        About Me
                    </h2>

                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                            My main focus is full-stack development, and I’ve gained hands-on experience working with both frontend
                            and backend technologies. I’ve built responsive web apps, worked with APIs, and focused on writing clean,
                            maintainable code. I’m eager to join a collaborative team where I can continue to learn,
                            contribute to meaningful projects, and grow as a developer.


                        </p>

                        <div className="flex flex-col gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition cursor-default
                    "
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition cursor-default
                    "
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all mt-8">
                        <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li className="list-none">
                                <strong>Diploma in Computer Information Systems</strong> - Okanagan College
                                (2023-2025)
                            </li>
                            <li style={{ listStyleType: "none" }}>
                                <strong>Relevant Coursework:</strong><br /> Computer Programming II, Project Management, Client-side Web Systems,
                                Computer Data Structures, Algorithms, Systems Analysis & Design, Web Development with LAMP,
                                Information System Security
                            </li><br />
                            <li style={{ listStyleType: "none" }}>
                                <strong>Responsive Web Design Certification</strong> - FreeCodeCamp (2022) -{" "}
                                <a
                                    href="https://www.freecodecamp.org/certification/BraydenCoghill/responsive-web-design"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:underline"
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