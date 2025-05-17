import emailjs from "emailjs-com";
import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
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
            .then((result) => {
                alert("Message Sent!");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch(() => alert("Oops! Something went wrong. Please try again."));
    };

    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-8 rounded-xl border border-cyan-900/30 bg-cyan-950/20 backdrop-blur-sm shadow-lg">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent text-center">
                        Get In Touch
                    </h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                className="w-full bg-cyan-950/50 border border-cyan-800/30 rounded-lg px-4 py-3 text-gray-100 transition-all duration-300 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 placeholder-gray-400"
                                placeholder="Name..."
                                onChange={(e) =>
                                    setFormData({ ...formData, name: e.target.value })
                                }
                            />
                        </div>

                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                className="w-full bg-cyan-950/50 border border-cyan-800/30 rounded-lg px-4 py-3 text-gray-100 transition-all duration-300 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 placeholder-gray-400"
                                placeholder="example@gmail.com"
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                }
                            />
                        </div>

                        <div className="relative">
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                value={formData.message}
                                className="w-full bg-cyan-950/50 border border-cyan-800/30 rounded-lg px-4 py-3 text-gray-100 transition-all duration-300 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 placeholder-gray-400"
                                placeholder="Your Message..."
                                onChange={(e) =>
                                    setFormData({ ...formData, message: e.target.value })
                                }
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(79,70,229,0.5)] hover:from-blue-500 hover:via-purple-500 hover:to-indigo-500"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    );
};
