"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AnimatedQuestions } from "@/components/AnimatedQuestions";
import Feature from "@/components/Feature";


export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const textContent = entry.target.querySelector('.animate-text-content');
          
          if (entry.isIntersecting) {
            // Add animation class when in viewport
            textContent?.classList.add('opacity-100', 'translate-y-0');
            textContent?.classList.remove('opacity-0', 'translate-y-8');
          } else {
            // Remove animation class when out of viewport
            textContent?.classList.remove('opacity-100', 'translate-y-0');
            textContent?.classList.add('opacity-0', 'translate-y-8');
          }
        });
      },
      { 
        threshold: 0.9, // Trigger when 90% of the element is visible
      }
    );

    const containers = document.querySelectorAll(".scroll-animate-container");
    containers.forEach((container) => observer.observe(container));

    return () => {
      containers.forEach((container) => observer.unobserve(container));
    };
  }, []);

  return (
    <main className="bg-white text-white flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <div className="relative min-h-[calc(83vh-4rem)] flex flex-col items-center pt-20 sm:pt-32 px-4 text-center overflow-hidden">

{/* Desktop Background Image */}
<img
  src="/Images/new-placeholder-hero.jpg"
  alt="Hero background"
  className="hidden lg:block absolute inset-0 w-full h-full object-cover scale-75 opacity-100"
/>

{/* Overlay (set to 0 for now — adjust if needed) */}
<div className="hidden lg:block absolute inset-0 bg-black/0"></div>

{/* Foreground Content */}
<div className="relative z-10 flex flex-col items-center">
  <h1 className="text-[3.5rem] sm:text-[6rem] font-bold tracking-tight text-white bg-hero-gradient bg-hero-size bg-hero-position bg-no-repeat bg-clip-text text-transparent leading-none sm:leading-tight font-['Halyard_Display'] opacity-0 animate-slide-up">
    Your kitchen
    <br className="block lg:hidden" />
    <span className="hidden lg:inline">&nbsp;</span>
    co-pilot.
  </h1>

  <p className="text-[1.25rem] sm:text-[1.5rem] font-halyard font-medium max-w-2xl leading-6 mt-4 sm:mt-2 opacity-0 animate-slide-up animation-delay-5 text-black lg:text-white">
    Get recipe ideas, meal plans, and budget-friendly tips tailored to your ingredients and goals.
  </p>

  <Link
    href="/app"
    className="mt-8 px-6 pt-1 pb-1.5 sm:py-1 bg-[#6CD402] text-white text-xl sm:text-lg font-halyard font-medium rounded-full transition-all duration-300 transform hover:scale-110 opacity-0 animate-slide-up animation-delay-10 flex items-center justify-center"
  >
    <span className="relative">Start now</span>
    <span className="relative top-[1.5px] ms-1 flex items-center">
      <ChevronRight size={16} />
    </span>
  </Link>
</div>
</div>

      {/* Description Section */}
      <section className="w-full pt-0 sm:pt-0 pb-6 sm:pb-8">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-hands-calcium rounded-[36px] shadow-custom px-6 py-10 sm:px-[5.625rem] sm:py-16">
              <div className="text-center">
                <h2 className="text-[2.25rem] sm:text-[3.75rem] font-halyard font-semibold text-hands-iron leading-[1.1]">
                  Like having your own personal chef.
                </h2>
                <div className="mt-6 text-lg sm:text-2xl font-halyard font-medium text-black/30 leading-6">
                  <p className="text-black">
                    Answers everyday questions like
                    <br/>
                    <span className="text-hands-green transition-all duration-500">
                      <AnimatedQuestions />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Image Sections */}
      <section className="w-full">

<Feature
  mobileSrc="/Images/feature-dinner-small.jpg"
  desktopSrc="/Images/feature-1-experiment-large.png"
  alt="Bookmarks feature"
  title="Turn leftovers into dinner."
  description={`Ask for recipe ideas based on what’s in your fridge.`}
  titleDelay="animation-delay-10"
  descriptionDelay="animation-delay-15"
  textPosition="bottom"
/>

<Feature
  mobileSrc="/Images/feature-memory-small.jpg"
  desktopSrc="/Images/feature-memory-large.jpg"
  alt="Search feature"
  title="Learns from you."
  description="Hands gets to know your preferences, nutritional goals, even allergies — like a personal chef."
  titleDelay="animation-delay-10"
  descriptionDelay="animation-delay-15"
  textPosition="top"
/>

<Feature
  mobileSrc="/Images/feature-shop-small.jpg"
  desktopSrc="/Images/feature-shopping-large.jpg"
  alt="Week feature"
  title="Create shopping lists fast."
  description="Add ingredients instantly to your Shopping List and stay organized."
  textPosition="top"
/>

<Feature
  mobileSrc="/Images/features-cart-mobile-export1.jpg"
  desktopSrc="/Images/feature 4 original asset concept.png"
  alt="Smart Cart feature"
  title="Add your favorites."
  description="Save your recipes from your favorite websites—in seconds."
  textPosition="top"
/>

</section>

      {/* Mission Section */}
      <section className="w-full bg-white text-black h-[75vh] flex items-center justify-center">
        <div className="container mx-auto flex flex-col items-center justify-center px-4 text-center">
          <h2 className="text-[3rem] sm:text-[6.125rem] font-bold tracking-tighter leading-none sm:leading-tight font-['Halyard_Display'] opacity-0 animate-slide-up">
            Our mission
          </h2>
          <p className="text-lg leading-tight sm:text-[1.5rem] font-semibold max-w-2xl font-['Halyard_Display'] mt-4 sm:mt-2 text-gray-800">
            Our mission is to understand human taste and build software that is useful for anyone that cooks.
          </p>
          <Link
            href="/mission"
            className="mt-6 text-lg font-semibold font-['Halyard_Display'] text-[#6ED308] hover:text-[#A5E765] transition-colors flex items-center gap-2"
          >
            See More
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Career Section */}
      <section className="w-full">
        <div className="w-full relative" style={{ height: "100vh" }}>
          <img
            src="/Images/careers-teamoffice.jpg"
            alt="Team office"
            className="absolute inset-0 w-full h-full object-cover z-[5]"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-[10]">
            <h1 className="text-4xl md:text-6xl font-bold font-['Halyard_Display'] text-white mb-6">
              Create the future of health.
            </h1>
            <p className="text-lg leading-tight md:text-xl font-['Halyard_Display'] font-semibold text-white max-w-2xl mb-10">
              If you love AI-powered software, cooking and want to build a company at ground zero, join us.
            </p>
            <a
              href="mailto:luiswoldu@gmail.com"
              className="px-8 py-2 border-2 border-white rounded-full font-helvetica text-base md:text-lg font-medium bg-white text-black transition-all duration-300 transform hover:scale-110"
            >
              Apply
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}