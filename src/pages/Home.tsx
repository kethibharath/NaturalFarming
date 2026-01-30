import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { useScrollReveal } from '../hooks/useScrollReveal';

const whatItems = [
  'Healthy Living Soil',
  'Low Input Costs',
  'Farmer Self-Reliance',
  'Safe & Nutritious Food',
  'Climate Resilience',
];

const benefitItems = [
  'Machinery Spare Part Sales, Repair & Rentals',
  'Drones in Agriculture (Sales, Rentals, & Training)',
  'AI Smart Farming Practices',
  'kethiCorner',
  'Lab Testing Services (Soil & Water)',
  'Sill Development Training',
  'Retail Mart (Bulk Purchasing)',
  'Crop Processing',
  'Farm Doctor Support',
  'Insurance and Finance Guidance',
];

const stats = [
  { value: '25+', label: 'Years of Experience' },
  { value: '35m+', label: 'Happy Customers' },
  { value: '10m+', label: 'Happy Farmers' },
  { value: '62+', label: 'Projects Implemented' },
];

const WhyNaturalFarmingItems = [
  {
    title: "Soil Health Is Collapsing",
    content:
      "Years of chemical fertilizers have reduced soil fertility, killed beneficial microbes, and increased dependence on external inputs.",
  },
  {
    title: "Rising Input Costs & Farmer Debt",
    content: [
      "Fertilizer, pesticide, and seed costs increase every season",
      "Farmers depend heavily on loans",
      "Profit margins are shrinking",
    ],
  },
  {
    title: "Chemicals in Food & Health Risks",
    content:
      "Chemical residues in food contribute to long-term health risks for consumers and farm workers.",
  },
  {
    title: "Climate Change & Unstable Farming",
    content:
      "Erratic rainfall, heat stress, and extreme weather events make farming increasingly unpredictable.",
  },
  {
    title: "Environmental Damage",
    content:
      "Water pollution, biodiversity loss, and soil erosion are increasing due to chemical-intensive practices.",
  },
  {
    title: "Need for Farmer Self-Reliance",
    content:
      "Natural Farming reduces dependency on external inputs and restores farmer autonomy.",
  },
];

const Home: React.FC = () => {
  const [active, setActive] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActive((prev) => (prev === index ? null : index));
  };

  // Scroll reveal hooks for sections
  const whatSection = useScrollReveal<HTMLElement>();
  const whySection = useScrollReveal<HTMLElement>();
  const benefitsSection = useScrollReveal<HTMLElement>();
  const whoSection = useScrollReveal<HTMLElement>();
  const statsSection = useScrollReveal<HTMLElement>();
  const newsSection = useScrollReveal<HTMLElement>();

  return (
    <div className="bg-white">
      <Header />
      <Hero />

      {/* What is Natural Farming */}
      <section
        ref={whatSection.ref}
        className="bg-[#ebf3ee] pt-10 mb-8 pb-8  md:pb-20 lg:pt-0 lg:mb-14"
      >
        <div className="mx-auto max-w-6xl px-4 text-center transition-all duration-700 ${
            whatSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}">
          {/* Heading */}
          <h2 className="mb-6 text-3xl font-bold text-[#0b5e2b] lg:text-5xl">
            What is Natural Farming?
          </h2>

          {/* Main description */}
          <p className="mx-auto mb-8 max-w-6xl font-medium text-sm leading-relaxed text-slate-700 md:text-base lg:text-[22px]">
            Natural Farming is a chemical-free, low-cost, and eco-friendly method of agriculture that
            works with nature, not against it. It focuses on restoring soil life, using locally available
            natural inputs, and producing healthy, residue-free food while ensuring sustainable income
            for farmers.
          </p>

          {/* Sub description */}
          <p className="mx-auto mb-14 max-w-6xl font-medium text-sm leading-relaxed text-slate-700 md:text-base lg:text-[22px]">
            At its core, Natural Farming treats the soil as a living ecosystem, rich in beneficial microbes, earthworms, and organic matter – rather than an inert medium dependent on chemical fertilizers.
          </p>

          {/* Features */}
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center">
            {/* Item 1 */}
            <div className={`flex flex-col items-center justify-center px-6 py-4 transition-all duration-500 ${whatSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`} style={{ transitionDelay: '100ms' }}>
              <img
                src="/assets/home/soil.png"
                alt=""
                className="h-[80px] w-[80px] object-contain transition-transform duration-500 hover:scale-110"
              />
              <p className="text-center text-[18px] font-bold leading-[20px] text-[#0b5e2b]">
                Healthy <br /> Living Soil
              </p>
            </div>

            {/* Divider */}
            <div className="hidden h-[120px] w-[2px] bg-gradient-to-b from-transparent via-[#002701]/40 to-transparent md:block" />

            {/* Item 2 */}
            <div className={`flex flex-col items-center justify-center px-6 py-4 transition-all duration-500 ${whatSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`} style={{ transitionDelay: '200ms' }}>
              <img
                src="/assets/home/low-cost.png"
                alt=""
                className="h-[80px] w-[80px] object-contain transition-transform duration-500 hover:scale-110"
              />
              <p className="text-center text-[18px] font-bold leading-[20px] text-[#0b5e2b]">
                Low Input <br /> Cost Farming
              </p>
            </div>

            {/* Divider */}
            <div className="hidden h-[120px] w-[2px] bg-gradient-to-b from-transparent via-[#002701]/40 to-transparent md:block" />

            {/* Item 3 */}
            <div className={`flex flex-col items-center justify-center px-6 py-4 transition-all duration-500 ${whatSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`} style={{ transitionDelay: '300ms' }}>
              <img
                src="/assets/home/farmer.png"
                alt=""
                className="h-[80px] w-[80px] object-contain transition-transform duration-500 hover:scale-110"
              />
              <p className="text-center text-[18px] font-bold leading-[20px] text-[#0b5e2b]">
                Farmer <br /> Self-Reliance
              </p>
            </div>

            {/* Divider */}
            <div className="hidden h-[120px] w-[2px] bg-gradient-to-b from-transparent via-[#002701]/40 to-transparent md:block" />

            {/* Item 4 */}
            <div className={`flex flex-col items-center justify-center px-6 py-4 transition-all duration-500 ${whatSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`} style={{ transitionDelay: '400ms' }}>
              <img
                src="/assets/home/food.png"
                alt=""
                className="h-[80px] w-[80px] object-contain transition-transform duration-500 hover:scale-110"
              />
              <p className="text-center text-[18px] font-bold leading-[20px] text-[#0b5e2b]">
                Safe & <br /> Nutritious Food
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* Why Natural Farming */}
      <section
        ref={whySection.ref}
        className={`py-2 lg:py-5 bg-white px-4 sm:px-6 transition-all duration-700 ${whySection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-4xl lg:text-5xl font-bold text-center text-[#0b5e2b] mb-6">
            Why India Needs Natural Farming Now
          </h2>

          <p className="text-center max-w-6xl mx-auto text-gray font-base mb-12 lg:text-2xl">
            India's agriculture and food system are at a critical turning point.
            Decades of chemical-intensive farming increased production short term
            but caused long-term damage to soil, health, livelihoods, and the environment.
            Today, Natural Farming is not a choice — it is a necessity.
          </p>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left Accordion */}
            <div className="space-y-4">
              {WhyNaturalFarmingItems.map((item, index) => {
                const isOpen = active === index;

                return (
                  <div
                    key={index}
                    className={`transition-all duration-500 overflow-hidden ${isOpen
                      ? "bg-[#7fb43a] text-white rounded-3xl shadow-lg"
                      : "bg-gray-100 text-gray-800 rounded-3xl hover:shadow-md"
                      }`}
                  >
                    <button
                      onClick={() => toggle(index)}
                      className="w-full flex items-center gap-4 px-5 sm:px-6 py-4 text-left transition-transform hover:scale-[1.01]"
                    >
                      <span className="flex items-center justify-center w-6 h-6 bg-red-500 text-white rounded-full text-sm font-bold shrink-0">
                        ×
                      </span>

                      <span className="text-base sm:text-lg font-[550]">
                        {item.title}
                      </span>
                    </button>

                    <div
                      className={`px-6 sm:px-12 pb-6 text-sm leading-relaxed transition-all duration-500 ${isOpen ? "block" : "hidden"
                        }`}
                    >
                      {Array.isArray(item.content) ? (
                        <ul className="space-y-2 list-disc marker:text-white">
                          {item.content.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      ) : (
                        <p>{item.content}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Image */}
            <div className={`flex justify-center mt-10 lg:mt-0 transition-all duration-700 ${whySection.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`} style={{ transitionDelay: '300ms' }}>
              <div className="image-reveal">
                <img
                  src="assets/home/india.jpg"
                  alt="Natural farming India"
                  className="w-full max-w-xs sm:max-w-sm lg:max-w-md rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Benefits Of Natural Farming */}
      <section
        ref={benefitsSection.ref}
        className="relative bg-white pb-28 md:pb-12"
      >
        <div className="w-full overflow-hidden">
          <div className="hidden md:block h-36 md:h-32">
            <img
              src="/assets/home/green-curve.png"
              alt=""
              className="h-full w-full object-fill"
            />
          </div>
          <div className='bg-[#006738]'>
            <div className={`px-6 pt-12 pb-64 transition-all duration-700 ${benefitsSection.isVisible ? 'opacity-100' : 'opacity-0'
              }`}>
              <div className="mx-auto max-w-6xl text-center">
                <h1 className="text-2xl font-bold text-white mb-5 md:text-3xl lg:text-5xl">Benefits of Natural Farming</h1>
                <p className="text-white font-medium text-lg">Natural Farming is a sustainable approach that benefits farmers, consumers, the environment, and the nation.
                  It focuses on working with nature to create long-term cultural and economic security.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-6xl px-4">
          <div className="relative -mt-64 grid gap-8 md:grid-cols-3">

            <article
              className={`overflow-hidden rounded-[26px] bg-white
              shadow-[0_22px_45px_rgba(0,0,0,0.35)]
              transition-transform duration-300 ease-out
              hover:scale-105
              ${benefitsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: '100ms' }}
            >
              <div className="flex h-[420px] w-full items-end justify-center bg-[url('/assets/home/farmer.jpg')] bg-cover bg-center p-6">
                <h3 className="text-4xl font-semibold text-white">Farmers</h3>
              </div>
            </article>

            <article
              className={`overflow-hidden rounded-[26px] bg-white
              shadow-[0_22px_45px_rgba(0,0,0,0.35)]
              transition-transform duration-300 ease-out
              hover:scale-105
              ${benefitsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="flex h-[420px] w-full items-end justify-center bg-[url('/assets/home/women-buy.jpg')] bg-cover bg-center p-6">
                <h3 className="text-4xl font-semibold text-white">Consumers</h3>
              </div>
            </article>

            <article
              className={`overflow-hidden rounded-[26px] bg-white
              shadow-[0_22px_45px_rgba(0,0,0,0.35)]
              transition-transform duration-300 ease-out
              hover:scale-105
              ${benefitsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: '300ms' }}
            >
              <div className="flex h-[420px] w-full items-end justify-center bg-[url('/assets/home/environment.jpg')] bg-cover bg-center p-6">
                <h3 className="text-4xl font-semibold text-white">Environment</h3>
              </div>
            </article>

          </div>
        </div>




      </section>

      {/* Who We Are */}
      <section
        ref={whoSection.ref}
        className="bg-white py-16 md:py-6"
      >
        <div className="mx-auto max-w-6xl px-4">

          {/* Header */}
          <div className={`mb-14 text-center transition-all duration-700 ${whoSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
            <h2 className="mb-6 text-3xl font-bold text-[#0b5e2b] md:text-5xl">
              Who We Are
            </h2>
            <p className="mx-auto max-w-6xl font-[550] text-medium leading-relaxed text-[#232323] md:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
              viverra maecenas accumsan lacus vel facilisis.
            </p>
          </div>

          {/* Content */}
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">

            {/* Images */}
            <div className={`image-reveal relative md:w-1/2 flex justify-center transition-all duration-700 ${whoSection.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`} style={{ transitionDelay: '200ms' }}>
              <img src="assets/home/about.jpg" alt="" />
            </div>

            {/* Text */}
            <div className={`md:w-1/2 text-slate-700 space-y-6 text-sm md:text-base leading-relaxed transition-all duration-700 ${whoSection.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`} style={{ transitionDelay: '400ms' }}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>

              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats band + workshops */}
      <section
        ref={statsSection.ref}
        className="relative bg-white pb-24"
      >
        <div className={`bg-[#062f07] py-8 transition-all duration-700 ${statsSection.isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-2 gap-10 text-center text-white md:grid-cols-4">
              {stats.map((item, index) => (
                <div
                  key={item.label}
                  className={`transition-all duration-500 ${statsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl font-extrabold text-[#ff8a1f]">
                    {item.value}
                  </div>
                  <div className="mt-2 text-sm opacity-90">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`bg-[#006738] pt-8 pb-80 text-center transition-all duration-700 ${statsSection.isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            News & Workshops
          </h2>
        </div>

        <div
          ref={newsSection.ref as React.RefObject<HTMLDivElement>}
          className="relative mx-auto -mt-72 max-w-6xl px-4"
        >
          <div className="grid gap-8 md:grid-cols-3">

            {[1, 2, 3].map((item, index) => (
              <article
                key={item}
                className={`card-premium relative overflow-hidden rounded-[26px] shadow-[0_25px_60px_rgba(0,0,0,0.45)] transition-all duration-500 ${newsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="image-reveal overflow-hidden">
                  <img
                    src="/assets/home/potrait.jpg"
                    alt="News"
                    className="h-[420px] w-full object-cover"
                  />
                </div>

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Text Content */}
                <div className="absolute bottom-0 p-6 text-white">
                  <p className="mb-2 text-sm opacity-90">12th, Jan, 2026</p>
                  <h3 className="text-xl font-semibold leading-snug">
                    Lorem ipsum dolor sit am
                    <br />
                    ewt, consectetur adipis.
                  </h3>
                </div>
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* Footer with Join the Movement Section */}
      <Footer />

    </div>
  );
};

export default Home;
