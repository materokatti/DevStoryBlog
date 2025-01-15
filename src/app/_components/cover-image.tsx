"use client";
import React, { useState } from 'react';
import Image from 'next/image';

function generateBlurPlaceholder(width: number, height: number) {
  return `data:image/svg+xml;base64,${Buffer.from(`
    <svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="#F3F4F6"/>
    </svg>
  `).toString('base64')}`;
}

interface SkeletonImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

const SkeletonImage = ({
  src,
  alt,
  width = 1300,
  height = 630,
  className = ''
}: SkeletonImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative overflow-hidden">
      {isLoading && (
        <div
          className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer"
          style={{
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite linear'
          }}
        />
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'} ${className}`}
        placeholder="blur"
        blurDataURL={generateBlurPlaceholder(width, height)}
        onLoadingComplete={() => setIsLoading(false)}
        loading='lazy'
      />
    </div>
  );
};

export default SkeletonImage;