import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CareersPage() {
  return (
    <main className="w-full bg-white">
      <Navigation />

      {/* Careers Hero Section */}
      <section className="min-h-[calc(95vh-4rem)] flex flex-col items-center pt-20 sm:pt-32 px-4 text-center">
        <h1
          className="text-[3.5rem] sm:text-[6rem] font-bold tracking-tight bg-hero-gradient bg-hero-size bg-hero-position bg-no-repeat bg-clip-text text-transparent leading-none sm:leading-tight font-['Halyard_Display'] opacity-0 animate-slide-up"
        >
          Create the future
          <br className="block lg:hidden" />
          <span className="hidden lg:inline">&nbsp;</span>
          of health.
        </h1>

        <p className="text-[1.75rem] sm:text-[1.75rem] font-halyard font-normal max-w-4xl leading-8 mt-6 opacity-0 animate-slide-up animation-delay-5 text-black whitespace-pre-line">
          Hands started with a simple question: can we solve the everyday “what’s for dinner?” problem? This led us to build the first truly intelligent personal AI chef. Today, Hands helps you get meal ideas by suggesting real recipes, tailored to you. We believe that Hands will be the ultimate cooking assistant, helping millions plan meals and shop for groceries.

          {"\n\n"}
          We’re a tiny, bootstrapped team pushing the future of personalized health, and are always looking for curious minds from a wide range of disciplines and backgrounds.

          {"\n\n"}
          If this sounds exciting, we’d love to hear from you.
        </p>
      </section>

      {/* Mission Section */}
      <section className="w-full bg-white text-black h-[75vh] flex items-center justify-center">
        <div className="container mx-auto flex flex-col items-center justify-center px-4 text-center">
          <h2 className="text-[3rem] sm:text-[6.125rem] font-bold tracking-tighter leading-none sm:leading-tight font-['Halyard_Display'] opacity-0 animate-slide-up">
            Our mission
          </h2>
          <p className="text-lg leading-tight sm:text-[1.5rem] font-semibold max-w-2xl font-['Halyard_Display'] mt-4 sm:mt-2 text-gray-800">
            Understanding human taste and build software that is useful for anyone that cooks.
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

      {/* Career CTA */}
      <section className="w-full">
        <div className="w-full relative" style={{ height: "100vh" }}>
          <img
            src="/Images/careers-teamoffice.jpg"
            alt="Team office"
            className="absolute inset-0 w-full h-full object-cover z-[5]"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-[10]">
            <h1 className="text-4xl md:text-6xl font-bold font-halyard text-white mb-6">
              Create the future of health.
            </h1>
            <p className="text-lg leading-tight md:text-xl font-halyard font-semibold text-white max-w-2xl mb-10">
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
  );
}