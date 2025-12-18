import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CareersPage() {
  return (
    <main className="w-full bg-white">
      <Navigation />

      {/* Careers Hero Section */}
      <section className="min-h-[calc(95vh-4rem)] flex flex-col items-start sm:items-center pt-16 pb-32 sm:pt-32 px-4 text-left sm:text-center">
      <h1
          className="text-[3.5rem] sm:text-[6rem] font-bold tracking-tight bg-hero-large bg-hero-size bg-hero-position bg-no-repeat bg-clip-text text-transparent leading-none sm:leading-tight font-halyard opacity-0 animate-slide-up"
        >
          Create the future of health.
        </h1>

        <p className="text-[1.5rem] sm:text-[1.75rem] font-halyard font-normal max-w-4xl leading-8 mt-6 opacity-0 animate-slide-up animation-delay-5 text-black whitespace-pre-line">
          Answering 'whats for dinner' for millions. To do so, we're building Hands, the world's first personalized AI chef. Helping you cook, meal plan and grocery shop based on your preferences and goals.
          {"\n\n"}
          We're a tiny team pushing the future of personalized health, and we're looking for curious minds from a wide range of disciplines and backgrounds.
          {"\n\n"}
          If this sounds exciting, we'd love to hear from you.
        </p>

        {/* CTA Button */}
        <Link
              href="mailto:handsforai@gmail.com"
              className="mt-8 px-6 pt-1 pb-1.5 sm:py-1 self-start sm:self-center
            bg-hands-green text-white
            text-xl sm:text-lg font-halyard font-normal rounded-full
            transition-all duration-300 transform hover:scale-110
            opacity-0 animate-slide-up animation-delay-10
            flex items-center justify-center">
          <span className="relative">Apply</span>
          <span className="relative ms-1 flex items-center">
            <ArrowUpRight size={16} />
          </span>
        </Link>
      </section>


      {/* Career CTA */}
      <section className="w-full">
        <div className="w-full relative" style={{ height: "100vh" }}>
          <img
            src="/Images/careers-teamoffice.jpg"
            alt="Team office"
            className="absolute inset-0 w-full h-full object-cover z-[5]"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-[10]">
            <h1 className="text-4xl md:text-6xl font-bold font-halyard text-white mb-4">
            Join us.
            </h1>
            <p className="text-lg leading-tight md:text-xl font-halyard font-semibold text-white max-w-2xl mb-10">
            Please send us your resume and a short note on a project you’re proud of.
            </p>
            <a
              href="mailto:handsforai@gmail.com"
              className="px-8 py-1.5 border-2 border-white rounded-full font-helvetica text-base md:text-lg font-medium bg-white text-black transition-all duration-300 transform hover:scale-110"
            >
              Apply
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}