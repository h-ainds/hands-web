// components/Feature.tsx
"use client";
import React from "react";

interface FeatureProps {
  mobileSrc: string;
  desktopSrc: string;
  alt: string;
  title: string;
  description: string;
  titleDelay?: string;
  descriptionDelay?: string;
  textPosition?: "top" | "center" | "bottom";
}

const Feature: React.FC<FeatureProps> = ({
  mobileSrc,
  desktopSrc,
  alt,
  title,
  description,
  titleDelay = "animation-delay-20",
  descriptionDelay = "animation-delay-25",
  textPosition = "center",
}) => {

  // Overlay gradients based on text placement
  const overlayGradients = {
    top: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 100%)",
    center:
      "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 40%), linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 40%)",
    bottom: "linear-gradient(to top, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 100%)",
  };

  const positionClasses = {
    top: "justify-start pt-12 sm:pt-20",
    center: "justify-center",
    bottom: "justify-end pb-12 sm:pb-20",
  };

  return (
    <div className="w-full px-6 sm:px-[5.625rem] py-4 sm:py-8">
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

        {/* BEAUTIFUL GRADIENT OVERLAY */}
        <div
          className="absolute inset-0"
          style={{
            background: overlayGradients[textPosition],
            pointerEvents: "none",
          }}
        />

        {/* TEXT CONTENT */}
        <div
          className={`absolute inset-0 flex flex-col px-6 py-4 sm:px-[5.625rem] sm:py-12 ${positionClasses[textPosition]}`}
        >
          <div className="w-full md:w-2/3 lg:max-w-xl animate-text-content opacity-0 translate-y-8 transition-all duration-700 ease-out">
            <h1
              className={`text-[2.5rem] md:text-[5rem] font-bold tracking-tight leading-none font-halyard mb-4 text-white ${titleDelay}`}
            >
              {title}
            </h1>

            <p
              className={`text-lg leading-none md:text-[1.75rem] font-halyard font-semibold text-white ${descriptionDelay}`}
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