import React from 'react';

export const Footer = () => {
    return (
        <footer
            className="bg-gradient-to-r from-[#ffffff]/95 via-[#f5f5f5]/95 to-[#fffff0]/95 text-gray-700 py-6 border-t border-gray-300/30 backdrop-blur-lg shadow-lg">
            <div className="container mx-auto px-4 text-center">
                <div className="flex justify-center items-center space-x-6">
                    <a
                        href="https://www.linkedin.com/in/braydencoghill"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#4169E1] hover:text-[#336699] transition-colors duration-300 flex items-center gap-2 hover:-translate-y-0.5"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="inline-block"
                        >
                            <path
                                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                        LinkedIn
                    </a>
                    <a
                        href="/portfolio/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#4169E1] hover:text-[#336699] transition-colors duration-300 flex items-center gap-2 hover:-translate-y-0.5"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="inline-block"
                        >
                            <path
                                d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM8 11h8v1H8v-1zm0 2h8v1H8v-1zm0 2h8v1H8v-1z"
                            />
                        </svg>
                        Resume
                    </a>
                </div>
                <p className="mt-4 text-sm text-gray-500">© {new Date().getFullYear()} Brayden Coghill. All rights
                    reserved.</p>
            </div>
        </footer>
    );
};
