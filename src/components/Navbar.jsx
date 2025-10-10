import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "../context/ThemeContext";

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

const WebDevelopmentIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2v-2a5 5 0 00-5-5z" />
        <path d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9z" />
    </svg>
)

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    const [activeLink, setActiveLink] = useState("home");
    const { theme } = useTheme();
    const location = useLocation();

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";

        const handleScroll = () => {
            if (location.pathname === "/") {
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
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [menuOpen, location.pathname]);

    useEffect(() => {
        if (location.pathname === '/web-development') {
            setActiveLink('web-development');
        } else {
            const hash = location.hash.substring(1);
            if (hash) {
                setActiveLink(hash);
            } else {
                setActiveLink('home');
            }
        }
    }, [location]);


    return (
        <>
            <nav className={`fixed top-0 w-full z-60 transition-all duration-1000 ${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-[#0a1128]/95 via-[#1a2a52]/95 to-[#0a1128]/95 border-gray-700/30' 
                : 'bg-gradient-to-r from-[#ffffff]/95 via-[#f5f5f5]/95 to-[#fffff0]/95 border-gray-300/30'
            } backdrop-blur-lg shadow-lg py-2 border-b`}>
                <div className="max-w-5xl mx-auto px-4">
                    <div className="flex justify-between items-center">
                        <Link 
                            to="/" 
                            className="font-mono text-xl font-bold relative group"
                        >
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6495ED] to-[#4682B4] hover:from-[#4682B4] hover:to-[#6495ED] transition-all duration-300 transform group-hover:scale-105 inline-block">
                                Brayden
                            </span>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6495ED] to-[#FF7F50] hover:from-[#6495ED] hover:to-[#FF7F50] transition-all duration-300 transform group-hover:scale-105 inline-block">
                                .Coghill
                            </span>
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6495ED] to-[#FF7F50] transition-all duration-300 group-hover:w-full"></span>
                        </Link>

                        <div
                            className="w-8 h-8 flex flex-col justify-center items-center cursor-pointer z-70 md:hidden relative"
                            onClick={() => setMenuOpen((prev) => !prev)}
                        >
                            <span className={`block w-6 h-0.5 ${theme === 'dark' ? 'bg-gray-200' : 'bg-gray-800'} rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                            <span className={`block w-6 h-0.5 ${theme === 'dark' ? 'bg-gray-200' : 'bg-gray-800'} rounded-full transition-all duration-300 mt-1.5 ${menuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-6 h-0.5 ${theme === 'dark' ? 'bg-gray-200' : 'bg-gray-800'} rounded-full transition-all duration-300 mt-1.5 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                        </div>

                        <div className="hidden md:flex items-center space-x-8">
                            <NavLink to="/#home" color="blue" label="Home" icon={<HomeIcon />} isActive={activeLink === "home"} />
                            <NavLink to="/#about" color="purple" label="About" icon={<AboutIcon />} isActive={activeLink === "about"} />
                            <NavLink to="/#projects" color="indigo" label="Projects" icon={<ProjectsIcon />} isActive={activeLink === "projects"} />
                            <NavLink to="/#contact" color="cyan" label="Contact" icon={<ContactIcon />} isActive={activeLink === "contact"} />
                            <NavLink to="/web-development" color="green" label="Web Development" icon={<WebDevelopmentIcon />} isActive={activeLink === "web-development"}/>
                            <div className="ml-2">
                                <ThemeToggle />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile menu */}
            {menuOpen && (
                <div
                    className={`fixed inset-0 z-50 backdrop-blur-lg flex flex-col items-center justify-center space-y-6 md:hidden animate-fadeIn overflow-y-auto h-screen ${
                        theme === 'dark'
                            ? 'bg-gradient-to-r from-[#0a1128]/98 via-[#1a2a52]/98 to-[#0a1128]/98 text-gray-200'
                            : 'bg-gradient-to-r from-[#6495ED]/98  to-[#FF7F50]/98 text-gray-900'
                    }`}>
                    <div className="animate-slideIn-1"><NavLink to="/#home" color="blue" label="Home" icon={<HomeIcon />} mobile onClick={() => setMenuOpen(false)} /></div>
                    <div className="animate-slideIn-2"><NavLink to="/#about" color="purple" label="About" icon={<AboutIcon />} mobile onClick={() => setMenuOpen(false)} /></div>
                    <div className="animate-slideIn-3"><NavLink to="/#projects" color="indigo" label="Projects" icon={<ProjectsIcon />} mobile onClick={() => setMenuOpen(false)} /></div>
                    <div className="animate-slideIn-5"><NavLink to="/#contact" color="cyan" label="Contact" icon={<ContactIcon />} mobile onClick={() => setMenuOpen(false)} /></div>
                    <div className="animate-slideIn-4"><NavLink to="/web-development" color="green" label="Web Development" icon={<WebDevelopmentIcon />} mobile onClick={() => setMenuOpen(false)} /></div>
                    <div className="animate-slideIn-6 mt-6"><div className="flex justify-center"><ThemeToggle /></div></div>
                </div>
            )}
        </>
    );
};

// Helper component for navigation links
const NavLink = ({ to, color, label, icon, mobile = false, onClick, isActive = false }) => {
    const { theme } = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const colorClasses = {
        blue: "from-[#6495ED] to-[#4682B4] hover:from-[#4682B4] hover:to-[#6495ED]",
        purple: "from-[#98FB98] to-[#3CB371] hover:from-[#3CB371] hover:to-[#98FB98]",
        indigo: "from-[#FF7F50] to-[#FF6347] hover:from-[#FF6347] hover:to-[#FF7F50]",
        green: "from-[#50C878] to-[#355E3B] hover:from-[#355E3B] hover:to-[#50C878]",
        cyan: "from-[#6495ED] to-[#98FB98] hover:from-[#98FB98] hover:to-[#FF7F50]"
    };

    const handleClick = (e) => {
        if (onClick) onClick();
        if (to.startsWith('/#')) {
            e.preventDefault();
            const targetId = to.substring(2);
            if (location.pathname !== '/') {
                navigate(`/${to.substring(1)}`);
            } else {
                document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <Link
            to={to}
            onClick={handleClick}
            className={`relative group flex items-center ${mobile ? `text-xl font-bold p-3 w-56 rounded-lg ${theme === 'dark' ? 'bg-gray-700/20 hover:bg-gray-700/30' : 'bg-gray-800/10 hover:bg-gray-800/15'} shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(59,130,246,0.4)] justify-center my-1` : ''} ${isActive ? 'scale-110' : ''}`}>
            {icon && (
                <span className={`mr-1.5 ${isActive ? 'animate-float' : ''} ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'} opacity-80 group-hover:opacity-100 transition-opacity`}>
                    {icon}
                </span>
            )}
            <span className={`${mobile ? `${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'} font-bold` : `${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'} font-semibold`} transition-all duration-300`}>
                {label}
            </span>
            <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r ${colorClasses[color]} transition-all duration-300 ${isActive ? 'w-full' : ''} group-hover:w-full`}></span>
        </Link>
    );
};
