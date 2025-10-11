import emailjs from "emailjs-com";
import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { useTheme } from "../../context/ThemeContext";

export const Contact = ({ palette }) => {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                e.target,
                import.meta.env.VITE_PUBLIC_KEY
            )
            .then(() => {
                alert("Message Sent!");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch(() => alert("Oops! Something went wrong. Please try again."));
    };

    const defaultPalette = {
        title: "bg-gradient-to-r from-[#FF5733] via-[#FF9933] to-[#FFD700]",
        container: isDark ? "border-[#FF9933]/40 bg-[#1a2a52]/70" : "border-[#FF9933]/30 bg-white/70",
        input: isDark
            ? "bg-[#2a3a62]/70 text-gray-200 placeholder-gray-400"
            : "bg-[#f5f5f5]/70 text-gray-700 placeholder-gray-500",
        name: {
            border: isDark ? "border-[#FF5733]/40 focus:border-[#FF5733]/70 focus:ring-1 focus:ring-[#FF5733]/70" : "border-[#FF5733]/20 focus:border-[#FF5733]/50 focus:ring-1 focus:ring-[#FF5733]/50",
        },
        email: {
            border: isDark ? "border-[#FF9933]/40 focus:border-[#FF9933]/70 focus:ring-1 focus:ring-[#FF9933]/70" : "border-[#FF9933]/20 focus:border-[#FF9933]/50 focus:ring-1 focus:ring-[#FF9933]/50",
        },
        message: {
            border: isDark ? "border-[#FFD700]/40 focus:border-[#FFD700]/70 focus:ring-1 focus:ring-[#FFD700]/70" : "border-[#FFD700]/20 focus:border-[#FFD700]/50 focus:ring-1 focus:ring-[#FFD700]/50",
        },
        button: "bg-gradient-to-r from-[#FF5733] via-[#FF9933] to-[#FFD700] hover:from-[#E64A19] hover:via-[#E67E22] hover:to-[#DAA520] hover:shadow-[0_0_20px_rgba(255,153,51,0.5)]",
    };

    const p = palette ? palette(isDark) : defaultPalette;

    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <div className={`px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-8 rounded-xl border backdrop-blur-sm shadow-lg ${p.container}`}>
                <RevealOnScroll animation="rotate" delay={0.1}>
                    <h2 className={`text-3xl font-bold mb-8 bg-clip-text text-transparent text-center ${p.title}`}>
                        Get In Touch
                    </h2>
                </RevealOnScroll>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <RevealOnScroll animation="fade-left" delay={0.2}>
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                className={`w-full rounded-lg px-4 py-3 transition-all duration-300 focus:outline-none ${p.input} ${p.name.border}`}
                                placeholder="Name..."
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll animation="fade-right" delay={0.3}>
                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                className={`w-full rounded-lg px-4 py-3 transition-all duration-300 focus:outline-none ${p.input} ${p.email.border}`}
                                placeholder="example@gmail.com"
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll animation="fade-up" delay={0.4}>
                        <div className="relative">
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                value={formData.message}
                                className={`w-full rounded-lg px-4 py-3 transition-all duration-300 focus:outline-none ${p.input} ${p.message.border}`}
                                placeholder="Your Message..."
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll animation="zoom-in" delay={0.5}>
                        <button
                            type="submit"
                            className={`w-full text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 relative overflow-hidden hover:-translate-y-1 ${p.button}`}
                        >
                            Send Message
                        </button>
                    </RevealOnScroll>
                </form>
            </div>
        </section>
    );
};
