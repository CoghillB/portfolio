import { useTheme } from "../../context/ThemeContext";
import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";

/* Palette
Primary: #1E3A8A (Deep blue)
Accent:  #10B981 (Emerald)
Background (light): #F9FAFB
Text Primary: #111827
Text Secondary: #4B5563
*/

const WebDev = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="webdev"
      className={`${isDark ? "bg-transparent" : "bg-[#F9FAFB]"} py-20 lg:py-40`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-[#1E3A8A]  to-[#10B981] bg-clip-text text-transparent leading-tight">
            Professional Websites for Kelowna Small Businesses & Trades
          </h2>
          <p
            className={`text-lg lg:text-xl ${
              isDark ? "text-gray-200" : "text-[#4B5563]"
            }`}
          >
            Fast, affordable, and built to bring you more customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-12">
          {/* Case Study 1 */}
          <RevealOnScroll animation="flip-right" delay={0.3}>
            <div
              className={`p-6 rounded-xl border backdrop-blur-sm shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default h-full flex flex-col ${
                isDark
                  ? "border-[#1E3A8A]/40 bg-[#0f1b44]/70 hover:border-[#10B981]/60 hover:shadow-[0_4px_20px_rgba(16,185,129,0.35)]"
                  : "border-[#1E3A8A]/20 bg-white hover:border-[#10B981]/40 hover:shadow-[0_4px_20px_rgba(30,58,138,0.15)]"
              }`}
            >
              <img
                src="/public/kelowna-creative.png"
                alt="Redesign of Kelowna Creative Website"
                className="rounded-md mb-4 border border-gray-200/40"
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
                a leading creative force.
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

          {/* Example 2 */}
          <div
            className={`rounded-xl overflow-hidden shadow-lg border ${
              isDark ? "bg-gray-800 border-[#1E3A8A]/40" : "bg-white border-[#1E3A8A]/20"
            }`}
          >
            <img
              src="https://placehold.co/600x400/png"
              alt="Website Example 2"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-[#111827]"}`}>
                Example Project 2
              </h3>
              <p className={`${isDark ? "text-gray-300" : "text-[#4B5563]"}`}>
                A high-converting landing page.
              </p>
              <div className="mt-4">
                <a
                  href="#contact"
                  className={`inline-block text-sm font-semibold rounded-full py-2 px-4 border transition-all duration-300 ${
                    isDark
                      ? "border-[#10B981]/50 text-[#10B981] hover:bg-[#10B981]/10"
                      : "border-[#1E3A8A]/40 text-[#1E3A8A] hover:bg-[#1E3A8A]/10"
                  }`}
                >
                  See details
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center my-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white font-bold py-3 px-8 rounded-full shadow-md hover:bg-[#173075] focus:outline-none focus:ring-4 focus:ring-[#10B981]/40 transition duration-300"
          >
            Book a Free Consultation
          </a>
          <p className={`mt-3 text-sm ${isDark ? "text-gray-300" : "text-[#4B5563]"}`}>
            No obligation. We’ll discuss your goals and recommend the best approach.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="flex justify-center flex-wrap gap-4 md:gap-8 text-center">
          {["Based in Kelowna", "Quick Turnaround", "Free SEO Setup"].map((item) => (
            <div
              key={item}
              className={`px-4 py-3 rounded-lg border ${
                isDark
                  ? "bg-[#0f1b44]/60 border-[#10B981]/30"
                  : "bg-white border-[#1E3A8A]/15"
              }`}
            >
              <p className={`font-semibold ${isDark ? "text-white" : "text-[#111827]"}`}>
                ✓ {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDev;
