// components/Feature.tsx
"use client";
import React from "react";

interface FeatureProps {
  mobileSrc: string;
  desktopSrc: string;
  alt: string;
  overlay?: string;
  title: string;
  description: string;
  titleDelay?: string;
  descriptionDelay?: string;
}

const Feature: React.FC<FeatureProps> = ({
  mobileSrc,
  desktopSrc,
  alt,
  overlay = "bg-black/10",
  title,
  description,
  titleDelay = "animation-delay-20",
  descriptionDelay = "animation-delay-25",
  
}) => {
  return (
    // OUTER CONTAINER — RESTORES px-6 sm:px-[5.625rem] py-10
    <div className="w-full px-6 sm:px-[5.625rem] py-4 sm:py-8">
      {/* INNER RECTANGLE — background, rounded corners, scroll-animate-container */}
      <div className="relative rounded-[36px] overflow-hidden h-[75vh] scroll-animate-container">
        {/* Mobile Image */}
        <img
          src={mobileSrc}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-500 sm:hidden"
        />

        {/* Desktop Image */}
        <img
          src={desktopSrc}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-500 hidden sm:block"
        />

        {/* Overlay */}
        <div className={`absolute inset-0 ${overlay}`} />

        {/* TEXT CONTENT */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 py-8 sm:px-[5.625rem] sm:py-12">
          <div className="w-full md:w-2/3 lg:w-full animate-text-content opacity-0 translate-y-8 transition-all duration-700 ease-out">
            <h1
              className={`text-[2.5rem] md:text-[5rem] font-bold font-['Halyard_Display'] mb-4 leading-none text-white ${titleDelay}`}
            >
              {title}
            </h1>

            <p
              className={`text-lg leading-tight md:text-[1.75rem] font-['Halyard_Display'] font-semibold text-white ${descriptionDelay}`}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;