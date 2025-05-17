import { useEffect, useState } from "react";

// Icons as SVG components
const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
  </svg>
);

const AboutIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
  </svg>
);

const ProjectsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
  </svg>
);

const ContactIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
  </svg>
);

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState("home");

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";

        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Update active link based on scroll position
            const sections = ["home", "about", "projects", "contact"];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && 
                    scrollPosition >= element.offsetTop && 
                    scrollPosition < element.offsetTop + element.offsetHeight) {
                    setActiveLink(section);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [menuOpen]);

    return (
        <nav className={`fixed top-0 w-full z-40 transition-all duration-1000 bg-gradient-to-r from-blue-900/90 via-purple-900/90 to-indigo-900/90 backdrop-blur-lg shadow-lg py-2 border-b border-white/10`}>
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    <a 
                        href="#home" 
                        className="font-mono text-xl font-bold relative group animate-float"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 hover:from-blue-300 hover:to-cyan-200 transition-all duration-300 transform group-hover:scale-105 inline-block">
                            Brayden
                        </span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-300 hover:from-green-300 hover:to-emerald-200 transition-all duration-300 transform group-hover:scale-105 inline-block">
                            .Coghill
                        </span>
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-green-400 transition-all duration-300 group-hover:w-full"></span>
                    </a>

                    <div
                        className="w-8 h-8 flex flex-col justify-center items-center cursor-pointer z-40 md:hidden relative"
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        <span className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 mt-1.5 ${menuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 mt-1.5 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <NavLink 
                            href="#home" 
                            color="blue" 
                            label="Home" 
                            icon={<HomeIcon />} 
                            isActive={activeLink === "home"} 
                        />
                        <NavLink 
                            href="#about" 
                            color="purple" 
                            label="About" 
                            icon={<AboutIcon />} 
                            isActive={activeLink === "about"} 
                        />
                        <NavLink 
                            href="#projects" 
                            color="indigo" 
                            label="Projects" 
                            icon={<ProjectsIcon />} 
                            isActive={activeLink === "projects"} 
                        />
                        <NavLink 
                            href="#contact" 
                            color="cyan" 
                            label="Contact" 
                            icon={<ContactIcon />} 
                            isActive={activeLink === "contact"} 
                        />
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="fixed inset-0 top-14 bg-gradient-to-r from-blue-950/98 via-purple-950/98 to-indigo-950/98 backdrop-blur-lg border-b border-white/10 flex flex-col items-center justify-start pt-10 pb-20 space-y-3 md:hidden animate-fadeIn overflow-y-auto">
                    {/* Close button removed from here as it's redundant with the hamburger menu */}
                    <div className="animate-slideIn-1">
                        <NavLink 
                            href="#home" 
                            color="blue" 
                            label="Home" 
                            icon={<HomeIcon />} 
                            mobile 
                            onClick={() => setMenuOpen(false)} 
                        />
                    </div>
                    <div className="animate-slideIn-2">
                        <NavLink 
                            href="#about" 
                            color="purple" 
                            label="About" 
                            icon={<AboutIcon />} 
                            mobile 
                            onClick={() => setMenuOpen(false)} 
                        />
                    </div>
                    <div className="animate-slideIn-3">
                        <NavLink 
                            href="#projects" 
                            color="indigo" 
                            label="Projects" 
                            icon={<ProjectsIcon />} 
                            mobile 
                            onClick={() => setMenuOpen(false)} 
                        />
                    </div>
                    <div className="animate-slideIn-4">
                        <NavLink 
                            href="#contact" 
                            color="cyan" 
                            label="Contact" 
                            icon={<ContactIcon />} 
                            mobile 
                            onClick={() => setMenuOpen(false)} 
                        />
                    </div>
                </div>
            )}
        </nav>
    );
};

// Helper component for navigation links
const NavLink = ({ href, color, label, icon, mobile = false, onClick, isActive = false }) => {
    const colorClasses = {
        blue: "from-blue-400 to-blue-300 hover:from-blue-300 hover:to-blue-200",
        purple: "from-purple-400 to-purple-300 hover:from-purple-300 hover:to-purple-200",
        indigo: "from-indigo-400 to-indigo-300 hover:from-indigo-300 hover:to-indigo-200",
        cyan: "from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200"
    };

    return (
        <a
            href={href}
            className={`relative group flex items-center ${mobile ? 'text-xl font-bold p-3 w-56 rounded-lg bg-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(59,130,246,0.4)] justify-center my-1' : ''} ${isActive ? 'scale-110' : ''}`}
            onClick={onClick}
        >
            {icon && (
                <span className={`mr-1.5 ${isActive ? 'animate-float' : ''} text-white opacity-80 group-hover:opacity-100 transition-opacity`}>
                    {icon}
                </span>
            )}
            <span className={`${mobile ? 'text-white font-bold' : 'bg-clip-text text-transparent bg-gradient-to-r'} ${!mobile ? colorClasses[color] : ''} transition-all duration-300`}>
                {label}
            </span>
            <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r ${colorClasses[color]} transition-all duration-300 ${isActive ? 'w-full' : ''} group-hover:w-full`}></span>
        </a>
    );
};
