import { RevealOnScroll } from "../RevealOnScroll";
import { useTheme } from "../../context/ThemeContext";

export const Projects = () => {
    const { theme } = useTheme();
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#FF5733] via-[#FF9933] to-[#FFD700] bg-clip-text text-transparent text-center">
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className={`p-6 rounded-xl border backdrop-blur-sm shadow-lg hover:-translate-y-1 transition-all duration-300 ${
                            theme === 'dark'
                                ? 'border-[#FFD700]/40 bg-[#1a2a52]/70 hover:border-[#FFD700]/60 hover:shadow-[0_4px_20px_rgba(255,215,0,0.4)]'
                                : 'border-[#FFD700]/30 bg-white/70 hover:border-[#FFD700]/50 hover:shadow-[0_4px_20px_rgba(255,215,0,0.3)]'
                        }`}>
                            <h3 className={`text-xl font-bold mb-2 ${
                                theme === 'dark' ? 'text-[#FFD700]' : 'text-[#B8860B]'
                            }`}> Player-Prop Bets </h3>
                            <p className={`mb-4 ${
                                theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                            }`}>
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

                            <div className="flex justify-between items-center">
                                <a
                                    href="https://github.com/CoghillB/ApeOffside.git"
                                    className={`transition-colors duration-300 my-4 ${
                                        theme === 'dark'
                                            ? 'text-[#FFD700] hover:text-[#FFEC8B]'
                                            : 'text-[#B8860B] hover:text-[#DAA520]'
                                    }`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>
                        <div
                            className={`glass p-6 rounded-xl border backdrop-blur-sm shadow-lg
                            hover:-translate-y-1 transition-all duration-300 cursor-default ${
                                theme === 'dark'
                                    ? 'border-[#FF9933]/40 bg-[#1a2a52]/70 hover:border-[#FF9933]/60 hover:shadow-[0_4px_20px_rgba(255,153,51,0.4)]'
                                    : 'border-[#FF9933]/30 bg-white/70 hover:border-[#FF9933]/50 hover:shadow-[0_4px_20px_rgba(255,153,51,0.3)]'
                            }`}
                        >
                            <h3 className={`text-xl font-bold mb-2 ${
                                theme === 'dark' ? 'text-[#FF9933]' : 'text-[#D2691E]'
                            }`}>Day Planner</h3>
                            <p className={`mb-4 ${
                                theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                            }`}>
                                Day planner that was built for a final project. It allows users to
                                add events to a calendar, and view them in a list. The events are stored in a
                                database and can be edited or deleted. It also allows the user to track fitness goals and
                                view progress through graphs.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["PHP", "CSS3", "JavaScript", "HTML5", "MySQL"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className={`py-1 px-3 rounded-full text-sm transition-all duration-300 hover:-translate-y-0.5 ${
                                            theme === 'dark'
                                                ? 'bg-[#FF9933]/30 text-[#FF9933] hover:bg-[#FF9933]/40 hover:shadow-[0_2px_8px_rgba(255,153,51,0.5)]'
                                                : 'bg-[#FF9933]/20 text-[#D2691E] hover:bg-[#FF9933]/30 hover:shadow-[0_2px_8px_rgba(255,153,51,0.3)]'
                                        }`}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href="https://github.com/CoghillB/Primate_Planner.git"
                                    className={`transition-colors duration-300 my-4 ${
                                        theme === 'dark'
                                            ? 'text-[#FF9933] hover:text-[#FFA54F]'
                                            : 'text-[#D2691E] hover:text-[#E67E22]'
                                    }`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>

                        <div
                            className={`glass p-6 rounded-xl border backdrop-blur-sm shadow-lg
                            hover:-translate-y-1 transition-all duration-300 cursor-default ${
                                theme === 'dark'
                                    ? 'border-[#FF5733]/40 bg-[#1a2a52]/70 hover:border-[#FF5733]/60 hover:shadow-[0_4px_20px_rgba(255,87,51,0.4)]'
                                    : 'border-[#FF5733]/30 bg-white/70 hover:border-[#FF5733]/50 hover:shadow-[0_4px_20px_rgba(255,87,51,0.3)]'
                            }`}
                        >
                            <h3 className={`text-xl font-bold mb-2 ${
                                theme === 'dark' ? 'text-[#FF5733]' : 'text-[#B22222]'
                            }`}>Travel Planning Assistant / Budgeting Site</h3>
                            <p className={`mb-4 ${
                                theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                            }`}>
                                Full-Stack travel planning site that allowed users to plan their
                                trips, and budget for them. Integrated with Google Maps API to allow users to
                                view their trips on a map, and see the distance between locations.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Node.js", "JavaScript", "HTML5", "CSS3"].map(
                                    (tech) => (
                                        <span
                                            key={tech}
                                            className={`py-1 px-3 rounded-full text-sm transition-all duration-300 hover:-translate-y-0.5 ${
                                                theme === 'dark'
                                                    ? 'bg-[#FF5733]/30 text-[#FF5733] hover:bg-[#FF5733]/40 hover:shadow-[0_2px_8px_rgba(255,87,51,0.5)]'
                                                    : 'bg-[#FF5733]/20 text-[#B22222] hover:bg-[#FF5733]/30 hover:shadow-[0_2px_8px_rgba(255,87,51,0.3)]'
                                            }`}
                                        >
                                            {tech}
                                        </span>
                                    )
                                )}
                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href="https://github.com/CoghillB/COSC205_CourseProject.git"
                                    className={`transition-colors duration-300 my-4 ${
                                        theme === 'dark'
                                            ? 'text-[#FF5733] hover:text-[#FF7F50]'
                                            : 'text-[#B22222] hover:text-[#8B0000]'
                                    }`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>

                        <div
                            className={`glass p-6 rounded-xl border backdrop-blur-sm shadow-lg
                            hover:-translate-y-1 transition-all duration-300 cursor-default ${
                                theme === 'dark'
                                    ? 'border-[#FF66B2]/40 bg-[#1a2a52]/70 hover:border-[#FF66B2]/60 hover:shadow-[0_4px_20px_rgba(255,102,178,0.4)]'
                                    : 'border-[#FF66B2]/30 bg-white/70 hover:border-[#FF66B2]/50 hover:shadow-[0_4px_20px_rgba(255,102,178,0.3)]'
                            }`}
                        >
                            <h3 className={`text-xl font-bold mb-2 ${
                                theme === 'dark' ? 'text-[#FF66B2]' : 'text-[#C71585]'
                            }`}>MineSweeper</h3>
                            <p className={`mb-4 ${
                                theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                            }`}>
                                Small game made for fun to practice using JavaFX and Java. It is a
                                simple implementation of the classic game.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Java", "JavaFX"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className={`py-1 px-3 rounded-full text-sm transition-all duration-300 hover:-translate-y-0.5 ${
                                            theme === 'dark'
                                                ? 'bg-[#FF66B2]/30 text-[#FF66B2] hover:bg-[#FF66B2]/40 hover:shadow-[0_2px_8px_rgba(255,102,178,0.5)]'
                                                : 'bg-[#FF66B2]/20 text-[#C71585] hover:bg-[#FF66B2]/30 hover:shadow-[0_2px_8px_rgba(255,102,178,0.3)]'
                                        }`}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href="https://github.com/CoghillB/MineSweeper.git"
                                    className={`transition-colors duration-300 my-4 ${
                                        theme === 'dark'
                                            ? 'text-[#FF66B2] hover:text-[#FF85AD]'
                                            : 'text-[#C71585] hover:text-[#DB7093]'
                                    }`}
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
