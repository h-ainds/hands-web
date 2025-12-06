"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AnimatedQuestions } from "@/components/AnimatedQuestions";
import Feature from "@/components/Feature";
import ReviewsCarousel from "@/components/ReviewsCarousel";


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
<div className="relative min-h-[calc(93vh-4rem)] flex flex-col items-center pt-20 sm:pt-32 px-4 text-center overflow-hidden">
  {/* Mobile Background Image */}
  <img
    src="/Images/hero-bg-t3-small.jpg"
    alt="Mobile hero background"
    className="block lg:hidden absolute inset-0 w-full h-full scale-110 object-cover opacity-100"
  />
  {/* Foreground Content */}
  <div className="relative z-10 flex flex-col items-center">
    <h1 className="text-[3.5rem] sm:text-[6rem] font-bold tracking-tight 
      lg:bg-[url('/Images/bg-hero-large.jpg')] lg:bg-cover lg:bg-center lg:bg-no-repeat lg:bg-fixed lg:bg-clip-text lg:text-transparent
      text-white leading-none sm:leading-tight font-halyard opacity-0 animate-slide-up">
      Your kitchen
      <br className="block lg:hidden" />
      <span className="hidden lg:inline">&nbsp;</span>
      co-pilot.
    </h1>
    {/* WRAPPED SUBTITLE FOR PERFECT MOBILE ALIGNMENT */}
    <div className="w-full px-6 sm:px-[5.625rem]">
      <p className="text-[1.25rem] sm:text-[1.5rem] font-halyard font-medium max-w-3xl leading-6 mt-4 sm:mt-2 opacity-0 animate-slide-up animation-delay-5 
        text-white lg:text-hands-grey
        mx-auto text-center">
        Get real recipes and meal ideas tailored to your ingredients and goals.
      </p>
    </div>
    <Link
      href="/app"
      className="mt-8 px-6 pt-1 pb-1.5 sm:py-1 
        bg-white text-black lg:bg-hands-green lg:text-white
        text-xl sm:text-lg font-halyard font-normal rounded-full transition-all duration-300 transform hover:scale-110 opacity-0 animate-slide-up animation-delay-10 flex items-center justify-center"
    >
      <span className="relative">Start now</span>
      <span className="relative top-[1.5px] ms-1 flex items-center">
        <ChevronRight size={16} />
      </span>
    </Link>
  </div>
</div>

{/* Description Section */}
<section className="w-full pt-0 sm:pt-0 pb-2 sm:pb-0">
  {/* MATCHING WRAPPER FOR PERFECT ALIGNMENT */}
  <div className="w-full px-6 sm:px-[5.625rem] py-4 sm:py-8 sm:pt-0">
    <div className="bg-hands-calcium rounded-[36px] shadow-custom px-6 py-10 sm:px-12 sm:py-16">
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
</section>

      {/* Full Width Image Sections */}
      <section className="w-full">

<Feature
  mobileSrc="/Images/feature-dinner-small.jpg"
  desktopSrc="/Images/feature-1-large.png"
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
  mobileSrc="/Images/feature-save-small.jpg"
  desktopSrc="/Images/feature-save-large.jpg"
  alt="Smart Cart feature"
  title="Add your favorites."
  description="Save your recipes from your favorite websites—in seconds."
  textPosition="top"
/>

</section>

      {/* Reviews Section */}
      <section className="w-full bg-white text-black py-12">
      <div className="container mx-auto px-6 flex flex-col items-center">
      <h2 className="text-[2rem] sm:text-[3.5rem] font-halyard font-semibold text-hands-iron text-center mb-6">
      Hands down, reviews</h2>

    {/*container */}
    <div
      className="
        bg-hands-calcium
        rounded-[36px]
        w-full
        max-w-2xl
        aspect-[4/3]          /* the real ratio */
        overflow-hidden
        sm:max-h-[33vh]       /* desktop cap */
        relative
        flex items-center justify-center"
    >
      {/* Carousel images/content */}
      <div className="w-full h-full">
        <ReviewsCarousel />
      </div>
    </div>

  </div>
</section>

{/* Pricing Section 
<section className="w-full bg-white text-black py-2">
<div className="container mx-auto px-6 flex flex-col items-center">
<h2 className="text-[2rem] sm:text-[3.5rem] font-halyard font-semibold text-hands-iron text-center mb-6">
Pricing</h2>

</div>
</section> */}

{/* CTA Section */}
<section className="w-full pt-0 pb-12">
  <div className="container mx-auto px-6 sm:px-[5.625rem]">
    <div
      className="
        bg-hands-calcium 
        rounded-[36px] 
        shadow-custom
        px-6 sm:px-[5.625rem] 
        py-10 
        lg:py-0 
        lg:h-[12.875rem]       /* 206px desktop */
        flex 
        flex-col 
        items-center 
        justify-between 
        gap-8 
        text-center 
        lg:flex-row 
        lg:text-start
      "
    >
      {/* TEXT */}
      <div className="max-w-[600px]">
        <h2 className="text-[1.75rem] sm:text-[2.5rem] font-halyard font-normal text-hands-iron leading-tight">
          Join hundreds of millions of users and try Hands today.
        </h2>
      </div>

      {/* BUTTON */}
      <div className="flex flex-row flex-wrap items-center justify-center gap-3">
        <Link
          href="/app"
          className="
            px-6 
            pt-1 
            pb-1.5 
            bg-white 
            text-black 
            text-lg 
            font-halyard 
            font-normal 
            rounded-full 
            transition-all 
            duration-300 
            transform 
            flex items-center 
            justify-center
          "
        >
          <span className="relative">Start now</span>
          <span className="relative top-[1.5px] ms-1 flex items-center">
            <ChevronRight size={16} />
          </span>
        </Link>
      </div>
    </div>
  </div>
</section>

      <Footer />
    </main>
  )
}