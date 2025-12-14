'use client'

import Link from "next/link"
import Image from "next/image"
import WaitlistForm from "@/components/WaitlistForm"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { useState } from "react"


export default function Mission() {
  return (
    <main className="bg-white text-black flex flex-col">
      <Navigation/>

      {/* Mission Hero */}
      <section className="flex flex-col items-start sm:items-center py-16 sm:pt-32 px-4 text-left sm:text-center">
      <h1
          className="text-[3.5rem] sm:text-[6rem] font-bold tracking-tight bg-hero-large bg-hero-size bg-hero-position bg-no-repeat bg-clip-text text-transparent leading-none sm:leading-tight font-halyard"
        >
          Describe our mission in 4-5.
        </h1>

        <p className="text-[1.5rem] sm:text-[1.75rem] font-halyard font-normal max-w-4xl leading-8 mt-6 text-hands-grey whitespace-pre-line">
          Answering 'whats for dinner' for millions. To do so, we're building Hands...
        </p>
        </section>

{/* Personal Chef Section */}
<section className="w-full">
  {/* MATCHING WRAPPER FOR PERFECT ALIGNMENT */}
  <div className="w-full px-6 sm:px-[5.625rem] py-4 sm:py-8 sm:pt-0">
    <div className="relative overflow-hidden rounded-[36px] shadow-custom">
      
      {/* Background images */}
      <Image
        src="/Images/mission-section-export@3x.jpg"
        alt="Mission section background"
        fill
        className="object-cover hidden md:block"
        priority
      />
      <Image
        src="/Images/mission-section-mobile-export1.jpg"
        alt="Mission section background mobile"
        fill
        className="object-cover block md:hidden"
        priority
      />

      {/* Card Title */}
      <div className="relative z-10 px-6 py-10 sm:px-12 sm:py-16">
        <h1 className="text-[2.5rem] md:text-[5rem] tracking-tighter font-bold font-halyard text-center text-white mb-4 leading-none">
          Our goal
        </h1>
      </div>
    </div>
  </div>
</section>

      {/* Our Goal Section */}
      <section className="w-full">
        <div className="container mx-auto px-4 pb-32">
          <div className="max-w-3xl mx-auto">
          <p className="text-[1.5rem] sm:text-[1.75rem] font-halyard font-normal 
                max-w-4xl leading-8 mt-6 text-black whitespace-pre-line">
          While personalization is everywhere—from grocery flyers to social media—most systems lack true context. At Hands, we focus on the most advanced and latest machine learning technologies to solve the challenge of prediction accuracy and context-awareness.
          </p>
          <p className="text-[1.5rem] sm:text-[1.75rem] font-halyard font-normal 
                max-w-4xl leading-8 mt-6 text-black whitespace-pre-line">
          Designed to be worn all day, giving you high-quality audio and convenient access to your companion who can observe the world alongside you.
          </p>
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section className="w-full">
        <div
          className="w-full relative"
          style={{
            height: "100vh",
          }}
        >
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
              href="mailto:handsforai@gmail.com"
              className="px-8 py-2 border-2 border-white rounded-full font-helvetica text-base md:text-lg font-medium bg-white text-black transition-all duration-300 transform hover:scale-110"
            >
              Apply
            </a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer/> 
    </main>
  )
}