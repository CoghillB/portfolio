import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "< Coghill Dev />";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if (index > fullText.length) {
                clearInterval(interval);

                setTimeout(() => {
                    onComplete();
                }, 1000);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 bg-gradient-to-r from-white/98 via-[#f5f5f5]/98 to-[#fffff0]/98 backdrop-blur-lg text-gray-800 flex flex-col items-center justify-center">
            <div className="mb-4 text-4xl font-mono font-bold bg-gradient-to-r from-[#6495ED] via-[#98FB98] to-[#FF7F50] bg-clip-text text-transparent">
                {text} <span className="animate-blink ml-1 text-[#6495ED]"> | </span>
            </div>

            <div className="w-[200px] h-[2px] bg-gray-300/50 rounded relative overflow-hidden backdrop-blur-sm">
                <div className="w-[40%] h-full bg-gradient-to-r from-[#6495ED] to-[#FF7F50] shadow-[0_0_15px_rgba(100,149,237,0.6)] animate-loading-bar"></div>
            </div>
        </div>
    );
};
