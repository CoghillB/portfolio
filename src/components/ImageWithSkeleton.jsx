
import React, { useState } from 'react';

const Skeleton = () => (
    <div className="rounded-md mb-4 border border-gray-200/40 aspect-video bg-gray-200/50 animate-pulse"></div>
);

const ImageWithSkeleton = ({ src, alt, className }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="relative">
            {!isLoaded && <Skeleton />}
            <img
                src={src}
                alt={alt}
                loading="lazy"
                onLoad={() => setIsLoaded(true)}
                className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0 absolute'}`}
            />
        </div>
    );
};

export default ImageWithSkeleton;
