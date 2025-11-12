"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AnimatedQuestions } from "@/components/AnimatedQuestions";


export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          const viewportCenter = window.innerHeight / 2;
          const entryDistances = visibleEntries.map((entry) => {
            const rect = entry.boundingClientRect;
            const entryCenter = (rect.top + rect.bottom) / 2;
            const distance = Math.abs(entryCenter - viewportCenter);
            return { entry, distance };
          });

          entryDistances.sort((a, b) => a.distance - b.distance);
          const mostCenteredEntry = entryDistances[0].entry;

          document.querySelectorAll(".group img").forEach((img) => {
            img.classList.remove("opacity-100");
          });

          const isMobile = window.innerWidth < 640;
          const mostCenteredContainer = mostCenteredEntry.target;
          let imageToShow;

          if (isMobile) {
            imageToShow =
              mostCenteredContainer.querySelector(
                "img:not(.hidden):not(.sm\\:block)"
              ) || mostCenteredContainer.querySelector("img:first-child");
          } else {
            imageToShow =
              mostCenteredContainer.querySelector("img:not(.sm\\:hidden)") ||
              mostCenteredContainer.querySelector("img:last-child");
          }

          if (imageToShow) {
            imageToShow.classList.add("opacity-100");
          }
        }
      },
      { threshold: 0.9 }
    );

    const containers = document.querySelectorAll(".group");
    containers.forEach((container) => observer.observe(container));

    return () => {
      containers.forEach((container) => observer.unobserve(container));
    };
  }, []);

  return (
    <main className="bg-white text-white flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <div className="min-h-[calc(83vh-4rem)] flex flex-col items-center pt-20 sm:pt-32 px-4 text-center">
        <h1 className="text-[3.5rem] sm:text-[6rem] font-bold tracking-tight bg-hero-gradient bg-hero-size bg-hero-position bg-no-repeat bg-clip-text text-transparent leading-none sm:leading-tight font-['Halyard_Display'] opacity-0 animate-slide-up">
          Your kitchen
          <br className="block lg:hidden" />
          <span className="hidden lg:inline">&nbsp;</span>
          co-pilot.
        </h1>
        <p className="text-[1.25rem] sm:text-[1.5rem] font-halyard font-semibold max-w-2xl leading-7 mt-4 sm:mt-2 opacity-0 animate-slide-up animation-delay-5 text-black">
          Introducing Hands, your intelligent, personal cooking assistant.
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

{/* Description Section */}
<section className="w-full pt-0 sm:pt-0 pb-6 sm:pb-8">
  <div className="container mx-auto px-4">
    <div className="max-w-7xl mx-auto">
      {/* Rounded container with shadow and responsive padding */}
      <div className="bg-white rounded-3xl shadow-md px-6 py-8 sm:px-[5.625rem] sm:py-12">
        <div className="text-center">
          <h2 className="text-[2.25rem] sm:text-[3.75rem] font-halyard font-semibold text-black leading-[1.1]">
            Like having your own personal chef.
          </h2>
          {/* Subtext */}
          <div className="mt-6 text-lg sm:text-xl font-halyard font-medium text-black/30 leading-6">
            <p className="text-black">
              It answers everyday questions like
              {/* Add a responsive line break */}
              <br className="block sm:hidden" />
              <span className="text-hands-green transition-all duration-500 sm:ml-1">
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
        {/* First Container */}
        <div className="bg-black w-full h-[50vh] relative group">
          <img
            src="/Images/bookmark-slice-mobile-export1.jpg"
            alt="Bookmark feature"
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 sm:hidden"
          />
          <img
            src="/Images/bookmark-slice-export2.png"
            alt="Bookmark feature"
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 hidden sm:block"
          />
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-0 flex flex-col justify-center p-8 md:px-20 pb-12">
            <div className="w-full md:w-2/3 lg:w-full">
              <h1 className="text-[2.5rem] md:text-[5rem] font-bold font-['Halyard_Display'] text-white mb-2 leading-none opacity-0 animate-slide-up">
                Goodbye bookmarks.
              </h1>
              <p className="text-lg leading-tight md:text-[1.75rem] font-['Halyard_Display'] font-semibold text-white mb-0 opacity-0 animate-slide-up animation-delay-5">
                Import recipes from anywhere—Instagram, TikTok, YouTube, and your <br />favorite food blogs—in seconds.
              </p>
            </div>
          </div>
        </div>

        {/* Second Container */}
        <div className="bg-black w-full h-[50vh] relative group">
          <img
            src="/Images/search-slice-mobile-export1.jpg"
            alt="Search feature"
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 sm:hidden"
          />
          <img
            src="/Images/search-slice-export1.jpg"
            alt="Search feature"
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 hidden sm:block"
          />
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-0 flex flex-col justify-center p-8 md:px-20">
            <div className="w-full md:w-2/3 lg:w-full">
              <h1 className="text-[2.5rem] md:text-[5rem] font-bold font-['Halyard_Display'] text-white mb-4 leading-none opacity-0 animate-slide-up animation-delay-10">
                Always know what to make.
              </h1>
              <p className="text-lg leading-tight md:text-[1.75rem] font-['Halyard_Display'] font-semibold text-white mb-0 opacity-0 animate-slide-up animation-delay-15">
                Find your recipes by ingredients or category to make leftovers into your next favorite meal.
              </p>
            </div>
          </div>
        </div>

        {/* Third Container */}
        <div className="bg-black w-full h-[50vh] relative group">
          <img
            src="/Images/your-week-slice-mobile-export1.jpg"
            alt="Week feature"
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 sm:hidden"
          />
          <img
            src="/Images/yourweek-slice-export1.jpg"
            alt="Week feature"
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 hidden sm:block"
          />
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-0 flex flex-col justify-center p-8 md:px-20">
            <div className="w-full md:w-2/3 lg:w-full">
              <h1 className="text-[2.5rem] md:text-[5rem] font-bold font-['Halyard_Display'] text-white mb-4 leading-none opacity-0 animate-slide-up animation-delay-15">
                No one cooks like Hands.
              </h1>
              <p className="text-lg leading-tight md:text-[1.75rem] font-['Halyard_Display'] font-semibold text-white mb-0 opacity-0 animate-slide-up animation-delay-20">
                Hands can recommend new recipes, inspire and plan weekly meals based on what you like to eat.
              </p>
            </div>
          </div>
        </div>

        {/* Fourth Container - Smart Cart */}
        <div className="bg-black w-full h-[50vh] relative group">
          <img
            src="/Images/features-cart-mobile-export1.jpg"
            alt="Smart Cart feature"
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 sm:hidden"
          />
          <img
            src="/Images/features-cart-slice-export1.jpg"
            alt="Smart Cart feature"
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 hidden sm:block"
          />
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-0 flex flex-col justify-center p-8 md:px-20">
            <div className="w-full md:w-2/3 lg:w-full">
              <h1 className="text-[2.5rem] md:text-[5rem] font-bold font-['Halyard_Display'] text-white mb-4 leading-none opacity-0 animate-slide-up animation-delay-20">
                Smart cart.
              </h1>
              <p className="text-lg leading-tight md:text-[1.75rem] font-['Halyard_Display'] font-semibold text-white mb-0 opacity-0 animate-slide-up animation-delay-25">
                Add ingredients instantly to your Shopping List and share with your family and friends to stay organized.
              </p>
            </div>
          </div>
        </div>

        {/* Fifth Container */}
        <div className="bg-black w-full h-[50vh] relative group">
          <img
            src="/Images/features-personal-mobile-export2.jpg"
            alt="Personal feature"
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 sm:hidden"
          />
          <img
            src="/Images/features-personal-slice-export2.jpg"
            alt="Personal feature"
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 hidden sm:block"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex flex-col justify-center p-8 md:px-20">
            <div className="w-full md:w-2/3 lg:w-full">
              <h1 className="text-[2.5rem] md:text-[5rem] font-bold font-['Halyard_Display'] text-white mb-4 leading-none opacity-0 animate-slide-up animation-delay-20">
                Gets to know you.
              </h1>
              <p className="text-lg leading-tight md:text-[1.75rem] font-['Halyard_Display'] font-semibold text-white mb-0 opacity-0 animate-slide-up animation-delay-20">
                Hands learns about your preferences, nutritional goals, even allergies — like a personal chef.
              </p>
            </div>
          </div>
        </div>
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
            className="mt-6 text-lg font-semibold font-['Halyard_Display'] text-[#009EFF] hover:text-[#0077CC] transition-colors flex items-center gap-2"
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
