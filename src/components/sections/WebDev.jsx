import {useTheme} from "../../context/ThemeContext";
import React from "react";
import {RevealOnScroll} from "../RevealOnScroll";
import ImageWithSkeleton from "../ImageWithSkeleton";
import {Contact} from "./Contact.jsx";
import aboutMeImg from "/public/aboutme.jpg";

const WebDev = () => {
    const {theme} = useTheme();
    const isDark = theme === "dark";

    const webDevPalette = (isDark) => ({
        title: "bg-gradient-to-r from-[#1E3A8A] to-[#10B981]",
        container: isDark
            ? "border-[#1E3A8A]/40 bg-[#0f1b44]/70"
            : "border-[#1E3A8A]/20 bg-white/90",
        input: isDark
            ? "bg-[#1E3A8A]/20 text-gray-200 placeholder-gray-400"
            : "bg-gray-100/80 text-gray-800 placeholder-gray-500",
        name: {
            border: isDark
                ? "border-[#1E3A8A]/40 focus:border-[#10B981]/70 focus:ring-1 focus:ring-[#10B981]/70"
                : "border-gray-300/70 focus:border-[#1E3A8A]/80 focus:ring-1 focus:ring-[#1E3A8A]/80",
        },
        phoneNumber: {
            border: isDark
                ? "border-[#1E3A8A]/40 focus:border-[#10B981]/70 focus:ring-1 focus:ring-[#10B981]/70"
                : "border-gray-300/70 focus:border-[#1E3A8A]/80 focus:ring-1 focus:ring-[#1E3A8A]/80",
        },
        email: {
            border: isDark
                ? "border-[#1E3A8A]/40 focus:border-[#10B981]/70 focus:ring-1 focus:ring-[#10B981]/70"
                : "border-gray-300/70 focus:border-[#1E3A8A]/80 focus:ring-1 focus:ring-[#1E3A8A]/80",
        },
        message: {
            border: isDark
                ? "border-[#1E3A8A]/40 focus:border-[#10B981]/70 focus:ring-1 focus:ring-[#10B981]/70"
                : "border-gray-300/70 focus:border-[#1E3A8A]/80 focus:ring-1 focus:ring-[#1E3A8A]/80",
        },
        button: "bg-gradient-to-r from-[#1E3A8A] to-[#10B981] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]",
    });

    const p = webDevPalette(isDark);

    return (
        <section
            id="webdev"
            className={`${isDark ? "bg-transparent" : "bg-[#F9FAFB]"} py-20 lg:py-40`}
        >
            <div className="container mx-auto px-4">
                {/* Hero Section */}
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-[#1E3A8A]  to-[#10B981] bg-clip-text text-transparent leading-tight">
                        Kelowna Web Design for Small Businesses & Trades
                    </h1>
                    <p
                        className={`text-lg lg:text-xl mb-12 ${
                            isDark ? "text-gray-200" : "text-[#4B5563]"
                        }`}
                    >
                        I build custom, affordable websites for small businesses and trades in Kelowna, Vernon, and Penticton. My sites are fast, mobile-friendly, and optimized to attract local customers. Whether you need a new website or a refresh, I provide clean design, quick turnaround, and clear communication. Get professional results without the agency price tag.
                    </p>
                    <a href="#contact"
                       className={`inline-block text-white py-3 px-8 rounded-lg font-medium transition-all duration-300 relative overflow-hidden hover:-translate-y-1 ${p.button}`}>
                        Get a Free Quote
                    </a>
                </div>

                {/* Services Section */}
                <div className="my-20">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center">
                        <span className="bg-gradient-to-r from-[#1E3A8A] to-[#10B981] bg-clip-text text-transparent">Web Development Services</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Service 1: Web Design & Development */}
                        <RevealOnScroll animation="fade-up" delay={0.2}>
                            <div
                                className={`p-6 rounded-xl border backdrop-blur-sm shadow-lg h-full text-center ${p.container}`}>
                                <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-[#10B981]" : "text-[#1E3A8A]"}`}>Web
                                    Design & Development</h3>
                                <p className={`${isDark ? "text-gray-200" : "text-[#4B5563]"}`}>Modern, responsive
                                    websites built to convert visitors into customers.</p>
                            </div>
                        </RevealOnScroll>
                        {/* Service 2: Website Maintenance */}
                        <RevealOnScroll animation="fade-up" delay={0.3}>
                            <div
                                className={`p-6 rounded-xl border backdrop-blur-sm shadow-lg h-full text-center ${p.container}`}>
                                <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-[#10B981]" : "text-[#1E3A8A]"}`}>Website
                                    Maintenance</h3>
                                <p className={`${isDark ? "text-gray-200" : "text-[#4B5563]"}`}>Keep your site fast,
                                    secure, and up-to-date.</p>
                            </div>
                        </RevealOnScroll>
                        {/* Service 3: SEO & Optimization */}
                        <RevealOnScroll animation="fade-up" delay={0.4}>
                            <div
                                className={`p-6 rounded-xl border backdrop-blur-sm shadow-lg h-full text-center ${p.container}`}>
                                <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-[#10B981]" : "text-[#1E3A8A]"}`}>SEO
                                    & Optimization</h3>
                                <p className={`${isDark ? "text-gray-200" : "text-[#4B5563]"}`}>Improve Google rankings
                                    and site performance in the Okanagan.</p>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>

                {/* Portfolio / Recent Projects */}
                <div className="my-20">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center">
                        <span className="bg-gradient-to-r from-[#1E3A8A] to-[#10B981] bg-clip-text text-transparent">Recent Web Design Projects</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Kelowna Creative Example Work */}
                        <RevealOnScroll animation="fade-up" delay={0.2}>
                            <div
                                className={`p-6 rounded-xl border backdrop-blur-sm shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default h-full flex flex-col ${
                                    isDark
                                        ? "border-[#1E3A8A]/40 bg-[#0f1b44]/70 hover:border-[#10B981]/60 hover:shadow-[0_4px_20px_rgba(16,185,129,0.35)]"
                                        : "border-[#1E3A8A]/20 bg-white hover:border-[#10B981]/40 hover:shadow-[0_4px_20px_rgba(30,58,138,0.15)]"
                                }`}
                            >
                                <ImageWithSkeleton
                                    src="/kelowna-creative.png"
                                    alt="Kelowna Creative website redesign for a local creative agency"
                                    className="rounded-md mb-4 border border-gray-200/40 aspect-video"
                                />
                                <h3
                                    className={`text-xl font-bold mb-2 min-h-[56px] ${
                                        isDark ? "text-[#10B981]" : "text-[#1E3A8A]"
                                    }`}
                                >
                                    Kelowna Creative
                                </h3>

                                <p className={`mb-4 flex-grow ${isDark ? "text-gray-200" : "text-[#4B5563]"}`}>
                                    I engineered a dynamic and visually immersive website for Kelowna Creative to
                                    reflect their high-end brand identity. The final product is a fully responsive,
                                    polished platform that effectively showcases their portfolio and establishes them as
                                    a leading creative force in the Okanagan.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {["TypeScript", "Tailwind CSS", "Next.js", "Framer Motion", "AOS"].map(
                                        (tech, key) => (
                                            <span
                                                key={key}
                                                className={`py-1 px-3 rounded-full text-sm transition-all duration-300 hover:-translate-y-0.5 ${
                                                    isDark
                                                        ? "bg-[#10B981]/25 text-white hover:bg-[#10B981]/40 hover:shadow-[0_2px_8px_rgba(16,185,129,0.4)]"
                                                        : "bg-[#10B981]/15 text-[#065F46] hover:bg-[#10B981]/25 hover:shadow-[0_2px_8px_rgba(16,185,129,0.25)]"
                                                }`}
                                            >
                          {tech}
                        </span>
                                        )
                                    )}
                                </div>
                                <div className="flex justify-between items-center">
                                    <a
                                        href="https://www.kelownacreative.ca"
                                        className={`transition-colors duration-300 my-4 font-bold ${
                                            isDark
                                                ? "text-[#10B981] hover:text-[#10B981]/70"
                                                : "text-[#1E3A8A] hover:text-[#1E3A8A]/70"
                                        }`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View Site →
                                    </a>
                                </div>
                            </div>
                        </RevealOnScroll>

                        {/* EdgeFinder Example Work */}
                        <RevealOnScroll animation="fade-up" delay={0.4}>
                            <div
                                className={`p-6 rounded-xl border backdrop-blur-sm shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default h-full flex flex-col ${
                                    isDark
                                        ? "border-[#1E3A8A]/40 bg-[#0f1b44]/70 hover:border-[#10B981]/60 hover:shadow-[0_4px_20px_rgba(16,185,129,0.35)]"
                                        : "border-[#1E3A8A]/20 bg-white hover:border-[#10B981]/40 hover:shadow-[0_4px_20px_rgba(30,58,138,0.15)]"
                                }`}
                            >
                                <ImageWithSkeleton
                                    src="/edgefinder.png"
                                    alt="EdgeFinder website for an AI-powered NFL betting tool"
                                    className="rounded-md mb-4 border border-gray-200/40 aspect-video"
                                />
                                <h3
                                    className={`text-xl font-bold mb-2 min-h-[56px] ${
                                        isDark ? "text-[#10B981]" : "text-[#1E3A8A]"
                                    }`}
                                >
                                    EdgeFinder
                                </h3>

                                <p className={`mb-4 flex-grow ${isDark ? "text-gray-200" : "text-[#4B5563]"}`}>
                                    I designed and built a modern, responsive landing page for EdgeFinder, an AI-driven
                                    NFL
                                    prop betting tool that turns complex data into actionable insights. The site
                                    highlights
                                    the product’s core features—including machine learning-based recommendations,
                                    confidence
                                    ratings, and trend analysis—through an intuitive, interactive UI.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {["React(Vite)", "Tailwind CSS", "Mailchimp", "Fastify", "TypeScript", "AI Integration", "Node.js", "Supabase"].map(
                                        (tech, key) => (
                                            <span
                                                key={key}
                                                className={`py-1 px-3 rounded-full text-sm transition-all duration-300 hover:-translate-y-0.5 ${
                                                    isDark
                                                        ? "bg-[#10B981]/25 text-white hover:bg-[#10B981]/40 hover:shadow-[0_2px_8px_rgba(16,185,129,0.4)]"
                                                        : "bg-[#10B981]/15 text-[#065F46] hover:bg-[#10B981]/25 hover:shadow-[0_2px_8px_rgba(16,185,129,0.25)]"
                                                }`}
                                            >
                          {tech}
                        </span>
                                        )
                                    )}
                                </div>
                                <div className="flex justify-between items-center">
                                    <a
                                        href="https://www.edgefinder.ca"
                                        className={`transition-colors duration-300 my-4 font-bold ${
                                            isDark
                                                ? "text-[#10B981] hover:text-[#10B981]/70"
                                                : "text-[#1E3A8A] hover:text-[#1E3A8A]/70"
                                        }`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View Site →
                                    </a>
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>

                {/* About Section */}
                <div className="my-20">
                    <div className={`p-8 rounded-xl border backdrop-blur-sm shadow-lg ${p.container}`}>
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="md:w-1/3 text-center">
                                <ImageWithSkeleton
                                    src={aboutMeImg}
                                    alt="Brayden Coghill, a web developer in Kelowna, BC"
                                    className="rounded-2xl w-auto h-auto mx-auto border-4 border-white/20 shadow-lg"
                                />
                            </div>
                            <div className="md:w-2/3">
                                <h2 className="text-3xl font-bold mb-4">
                                    <span
                                        className="bg-gradient-to-r from-[#1E3A8A] to-[#10B981] bg-clip-text text-transparent">About Me</span>
                                </h2>
                                <p className={`${isDark ? "text-gray-200" : "text-[#4B5563]"}`}>
                                    Hi, I'm Brayden Coghill, a web developer based in Kelowna, BC. I specialize in creating modern, affordable websites for small businesses and trades across the Okanagan. My goal is to build websites that are not only visually appealing but also fast, reliable, and optimized for local search to help your business grow.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Contact / CTA Section */}
                <Contact palette={webDevPalette}/>
            </div>
        </section>
    );
};

export default WebDev;
