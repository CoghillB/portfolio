import { useState, useEffect } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { Home } from "./components/sections/Home";
import { Projects } from "./components/sections/Projects";
import { Footer } from "./components/Footer";
import { useTheme } from "./context/ThemeContext";
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useTheme();

  // Create animated particles
  useEffect(() => {
    const createParticles = () => {
      const particleCount = 80; // Increased particle count
      const container = document.getElementById('particles-container');

      if (container) {
        // Clear existing particles
        container.innerHTML = '';

        for (let i = 0; i < particleCount; i++) {
          const particle = document.createElement('div');
          particle.className = 'particle';

          // Random position
          particle.style.left = `${Math.random() * 100}vw`;
          particle.style.top = `${Math.random() * 100}vh`;

          // Random size with more variation
          const size = Math.random() * 4 + 1;
          particle.style.width = `${size}px`;
          particle.style.height = `${size}px`;

          // Random opacity
          particle.style.opacity = `${Math.random() * 0.5 + 0.1}`;

          // Random animation duration and delay with more variation
          particle.style.animationDuration = `${Math.random() * 25 + 10}s`;
          particle.style.animationDelay = `${Math.random() * 8}s`;

          // Add some particles with different animation
          if (i % 7 === 0) {
            particle.classList.add('particle-special');
          }

          container.appendChild(particle);
        }

        // Create floating shapes
        const shapeCount = 6;
        for (let i = 0; i < shapeCount; i++) {
          const shape = document.createElement('div');
          shape.className = 'floating-shape';

          // Different shapes
          if (i % 3 === 0) {
            shape.classList.add('shape-circle');
          } else if (i % 3 === 1) {
            shape.classList.add('shape-square');
          } else {
            shape.classList.add('shape-triangle');
          }

          // Random position
          shape.style.left = `${Math.random() * 90 + 5}vw`;
          shape.style.top = `${Math.random() * 90 + 5}vh`;

          // Random animation
          shape.style.animationDuration = `${Math.random() * 40 + 20}s`;
          shape.style.animationDelay = `${Math.random() * 10}s`;

          container.appendChild(shape);
        }
      }
    };

    createParticles();

    // Recreate particles on window resize
    window.addEventListener('resize', createParticles);

    return () => {
      window.removeEventListener('resize', createParticles);
    };
  }, [isLoaded]);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div
        className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"
          } bg-transparent ${theme === 'dark' ? 'text-white' : 'text-[#333333]'}`} /* Text color based on theme */
      >
        <div id="particles-container" className="fixed inset-0 pointer-events-none z-0"></div>

        {/* Animated waves */}
        <div className="wave-container">
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
        </div>

        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
