import {RevealOnScroll} from "../RevealOnScroll";
import {useTheme} from "../../context/ThemeContext";

export const Projects = () => {
    const {theme} = useTheme();
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <div className="max-w-5xl mx-auto px-4">
                <RevealOnScroll animation="zoom-in" delay={0.1}>
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#FF5733] via-[#FF9933] to-[#FFD700] bg-clip-text text-transparent text-center">
                        Featured Web & Software Projects
                    </h2>
                </RevealOnScroll>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">


                    <RevealOnScroll animation="flip-right" delay={0.3}>
                        <div
                            className={`glass p-6 rounded-xl border backdrop-blur-sm shadow-lg
                                hover:-translate-y-1 transition-all duration-300 cursor-default h-full flex flex-col ${
                                theme === 'dark'
                                    ? 'border-[#FF9933]/40 bg-[#1a2a52]/70 hover:border-[#FF9933]/60 hover:shadow-[0_4px_20px_rgba(255,153,51,0.4)]'
                                    : 'border-[#FF9933]/30 bg-white/70 hover:border-[#FF9933]/50 hover:shadow-[0_4px_20px_rgba(255,153,51,0.3)]'
                            }`}
                        >
                            <h3 className={`text-xl font-bold mb-2 min-h-[56px] ${
                                theme === 'dark' ? 'text-[#FF9933]' : 'text-[#D2691E]'
                            }`}>Kelowna Creative: Agency Website</h3>

                            <p className={`mb-4 flex-grow ${
                                theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                            }`}>
                                Engineered a dynamic, visually immersive website for a local marketing agency. This fully
                                responsive platform, built with Next.js, TypeScript, and Tailwind CSS, showcases their
                                portfolio using sophisticated UI elements like 'glassmorphism' cards and smooth
                                animations with Framer Motion.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Typescript", "Tailwind CSS", "Next.js", "Framer Motion", "AOS"].map((tech, key) => (
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
                                    href="https://www.kelownacreative.ca"
                                    className={`transition-colors duration-300 my-4 ${
                                        theme === 'dark'
                                            ? 'text-[#FF9933] hover:text-[#FFA54F]'
                                            : 'text-[#D2691E] hover:text-[#E67E22]'
                                    }`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Site →
                                </a>
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* EdgeFinder Project Card */}
                    <RevealOnScroll animation="fade-up" delay={0.5}>
                        <div
                            className={`glass p-6 rounded-xl border backdrop-blur-sm shadow-lg
                                hover:-translate-y-1 transition-all duration-300 cursor-default h-full flex flex-col ${
                                theme === 'dark'
                                    ? 'border-[#FF66B2]/40 bg-[#1a2a52]/70 hover:border-[#FF66B2]/60 hover:shadow-[0_4px_20px_rgba(255,102,178,0.4)]'
                                    : 'border-[#FF66B2]/30 bg-white/70 hover:border-[#FF66B2]/50 hover:shadow-[0_4px_20px_rgba(255,102,178,0.3)]'
                            }`}
                        >
                            <h3 className={`text-xl font-bold mb-2 min-h-[56px] ${
                                theme === 'dark' ? 'text-[#FF66B2]' : 'text-[#C71585]'
                            }`}>EdgeFinder: AI-Powered NFL Prop Betting Tool</h3>

                            <p className={`mb-4 flex-grow ${
                                theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                            }`}>Designed and built a modern, responsive landing page for an AI-driven NFL prop betting
                                tool. The site highlights core features like machine learning-based recommendations and
                                trend analysis through an intuitive, interactive UI built with React.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React(Vite)", "Tailwind CSS", "Mailchimp", "Fastify", "TypeScript", "AI Integration", "Node.js", "Supabase"].map((tech, key) => (
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
                                    href="https://www.edgefinder.ca"
                                    className={`transition-colors duration-300 my-4 ${
                                        theme === 'dark'
                                            ? 'text-[#FF66B2] hover:text-[#FF85AD]'
                                            : 'text-[#C71585] hover:text-[#DB7093]'
                                    }`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Site →
                                </a>
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* College Capstone Project Card */}
                    <RevealOnScroll animation="flip-left" delay={0.2}>
                        <div
                            className={`p-6 rounded-xl border backdrop-blur-sm shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col ${
                                theme === 'dark'
                                    ? 'border-[#FFD700]/40 bg-[#1a2a52]/70 hover:border-[#FFD700]/60 hover:shadow-[0_4px_20px_rgba(255,215,0,0.4)]'
                                    : 'border-[#FFD700]/30 bg-white/70 hover:border-[#FFD700]/50 hover:shadow-[0_4px_20px_rgba(255,215,0,0.3)]'
                            }`}>
                            <h3 className={`text-xl font-bold mb-2 min-h-[56px] ${
                                theme === 'dark' ? 'text-[#FFD700]' : 'text-[#B8860B]'
                            }`}>ApeOffside: Player-Prop Betting Platform</h3>

                            <p className={`mb-4 flex-grow ${
                                theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                            }`}>
                                Developed a live platform for player-prop betting, featuring real-time odds and
                                statistics. The backend was built with Python and Django to create a RESTful API, which
                                integrates with an AI assistant to provide users with data-driven betting insights.
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
                                    View on GitHub →
                                </a>
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* College Travel Planning Project Card */}
                    <RevealOnScroll animation="flip-up" delay={0.2}>
                        <div
                            className={`glass p-6 rounded-xl border backdrop-blur-sm shadow-lg
                                hover:-translate-y-1 transition-all duration-300 cursor-default h-full flex flex-col ${
                                theme === 'dark'
                                    ? 'border-[#FF5733]/40 bg-[#1a2a52]/70 hover:border-[#FF5733]/60 hover:shadow-[0_4px_20px_rgba(255,87,51,0.4)]'
                                    : 'border-[#FF5733]/30 bg-white/70 hover:border-[#FF5733]/50 hover:shadow-[0_4px_20px_rgba(255,87,51,0.3)]'
                            }`}
                        >
                            <h3 className={`text-xl font-bold mb-2 min-h-[56px] ${
                                theme === 'dark' ? 'text-[#FF5733]' : 'text-[#B22222]'
                            }`}>Travel Planner: A Trip & Budgeting Web App</h3>


                            <p className={`mb-4 flex-grow ${
                                theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                            }`}>
                                A travel planning web application that allows users to plan trips and manage budgets.
                                The app integrates the Google Maps API to visualize routes and locations. The user
                                interface was designed in Figma and implemented with vanilla JavaScript, HTML5, and CSS3
                                to create a purpose-driven user experience.
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
                                    View on GitHub →
                                </a>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
};