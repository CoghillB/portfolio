import { useState } from 'react'

const ImageWithSkeleton = ({ src, alt, className = '', wrapperClassName = '', loading = 'lazy' }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className={`relative overflow-hidden bg-card-2 ${wrapperClassName}`}>
      {!isLoaded && (
        <div
          aria-hidden="true"
          className="absolute inset-0 animate-pulse bg-card-2"
        />
      )}
      <img
        src={src}
        alt={alt}
        loading={loading}
        onLoad={() => setIsLoaded(true)}
        className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
      />
    </div>
  )
}

export default ImageWithSkeleton
