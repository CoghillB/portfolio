import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent text-center">
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-green-900/30 bg-green-950/20 backdrop-blur-sm shadow-lg hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_4px_20px_rgba(34,197,94,0.3)] transition-all duration-300">
                            <h3 className="text-xl font-bold mb-2 text-green-400"> Player-Prop Bets </h3>
                            <p className="text-gray-300 mb-4">
                                Live platform for player-prop betting with real-time odds and
                                statistics. Using live stats and AI assistant to help users make
                                informed decisions and linking them to sport books. My focus in this project was
                                on the backend, using Python and Django to create a RESTful API and integration of the
                                AI assistant.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "JavaScript", "Python", "Django", "HTML5/CSS3", "Docker"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-green-900/40 text-green-300 py-1 px-3 rounded-full text-sm hover:bg-green-800/50 
                                    hover:shadow-[0_2px_8px_rgba(34,197,94,0.3)] transition-all duration-300 cursor-default
                    "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a
                                    href="https://github.com/CoghillB/ApeOffside.git"
                                    className="text-green-400 hover:text-green-300 transition-colors duration-300 my-4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>
                        <div
                            className="glass p-6 rounded-xl border border-blue-900/30 bg-blue-950/20 backdrop-blur-sm shadow-lg
                            hover:-translate-y-1 hover:border-blue-500/30
                            hover:shadow-[0_4px_20px_rgba(59,130,246,0.3)]
                            transition-all duration-300 cursor-default"
                        >
                            <h3 className="text-xl font-bold mb-2 text-blue-400">Day Planner</h3>
                            <p className="text-gray-300 mb-4">
                                Day planner that was built for a final project. It allows users to
                                add events to a calendar, and view them in a list. The events are stored in a
                                database and can be edited or deleted. It also allows the user to track fitness goals and
                                view progress through graphs.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["PHP", "CSS3", "JavaScript", "HTML5", "MySQL"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-900/40 text-blue-300 py-1 px-3
                                        rounded-full text-sm
                                        transition-all duration-300
                                        hover:bg-blue-800/50 hover:-translate-y-0.5
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.3)]"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href="https://github.com/CoghillB/Primate_Planner.git"
                                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300 my-4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>

                        <div
                            className="glass p-6 rounded-xl border border-purple-900/30 bg-purple-950/20 backdrop-blur-sm shadow-lg
                            hover:-translate-y-1 hover:border-purple-500/30
                            hover:shadow-[0_4px_20px_rgba(168,85,247,0.3)]
                            transition-all duration-300 cursor-default"
                        >
                            <h3 className="text-xl font-bold mb-2 text-purple-400">Travel Planning Assistant / Budgeting Site</h3>
                            <p className="text-gray-300 mb-4">
                                Full-Stack travel planning site that allowed users to plan their
                                trips, and budget for them. Integrated with Google Maps API to allow users to
                                view their trips on a map, and see the distance between locations.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Node.js", "JavaScript", "HTML5", "CSS3"].map(
                                    (tech) => (
                                        <span
                                            key={tech}
                                            className="bg-purple-900/40 text-purple-300 py-1 px-3
                                            rounded-full text-sm
                                            transition-all duration-300
                                            hover:bg-purple-800/50 hover:-translate-y-0.5
                                            hover:shadow-[0_2px_8px_rgba(168,85,247,0.3)]"
                                        >
                                            {tech}
                                        </span>
                                    )
                                )}
                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href="https://github.com/CoghillB/COSC205_CourseProject.git"
                                    className="text-purple-400 hover:text-purple-300 transition-colors duration-300 my-4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>

                        <div
                            className="glass p-6 rounded-xl border border-indigo-900/30 bg-indigo-950/20 backdrop-blur-sm shadow-lg
                            hover:-translate-y-1 hover:border-indigo-500/30
                            hover:shadow-[0_4px_20px_rgba(99,102,241,0.3)]
                            transition-all duration-300 cursor-default"
                        >
                            <h3 className="text-xl font-bold mb-2 text-indigo-400">MineSweeper</h3>
                            <p className="text-gray-300 mb-4">
                                Small game made for fun to practice using JavaFX and Java. It is a
                                simple implementation of the classic game.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Java", "JavaFX"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="
                                    bg-indigo-900/40 text-indigo-300 py-1 px-3
                                    rounded-full text-sm
                                    transition-all duration-300
                                    hover:bg-indigo-800/50 hover:-translate-y-0.5
                                    hover:shadow-[0_2px_8px_rgba(99,102,241,0.3)]"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center ">
                                <a
                                    href="https://github.com/CoghillB/MineSweeper.git"
                                    className="text-green-600 hover:text-green-800 transition-colors my-4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
