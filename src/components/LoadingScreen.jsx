import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "<Hello World />";

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
        <div className="fixed inset-0 z-50 bg-gradient-to-r from-blue-950/98 via-purple-950/98 to-indigo-950/98 backdrop-blur-lg text-gray-100 flex flex-col items-center justify-center">
            <div className="mb-4 text-4xl font-mono font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                {text} <span className="animate-blink ml-1 text-cyan-300"> | </span>
            </div>

            <div className="w-[200px] h-[2px] bg-gray-800/50 rounded relative overflow-hidden backdrop-blur-sm">
                <div className="w-[40%] h-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-[0_0_15px_rgba(59,130,246,0.6)] animate-loading-bar"></div>
            </div>
        </div>
    );
};
