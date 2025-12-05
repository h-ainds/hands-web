export default function CareersPage() {
  return (
    <main className="w-full">
      {/* Careers Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <img
          src="/Images/careers-teamoffice.jpg"
          alt="Team office"
          className="absolute inset-0 w-full h-full object-cover z-[5]"
        />

        {/* Foreground Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-[10]">
          <h1 className="text-[3.5rem] sm:text-[6rem] font-bold tracking-tight text-white bg-hero-gradient bg-hero-size bg-hero-position bg-no-repeat bg-clip-text text-transparent leading-none sm:leading-tight font-['Halyard_Display'] opacity-0 animate-slide-up">
            Create the future
            <br className="block lg:hidden" />
            <span className="hidden lg:inline">&nbsp;</span>
            of health.
          </h1>

          <p className="text-[1.75rem] sm:text-[1.75rem] font-halyard font-medium max-w-2xl leading-7 mt-4 sm:mt-2 opacity-0 animate-slide-up animation-delay-5 text-white whitespace-pre-line">
            Hands started with a simple question: can we solve the everyday “what’s for dinner?”
            {"\n\n"}
            We're a tiny, bootstrapped team building the first truly personal, intelligent cooking assistant.
            {"\n\n"}
            If this sounds exciting, we’d love to hear from you.
          </p>
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
    </main>
  );
}
