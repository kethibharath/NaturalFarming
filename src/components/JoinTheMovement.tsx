import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const JoinTheMovement: React.FC = () => {
  const section = useScrollReveal();

  return (
    <>
      <section
        ref={section.ref as any}
        className="
        relative
        py-16 sm:py-20 lg:py-24
        flex justify-center
      "
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-black/40" />
        <div>
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
            <div
              className={`
            bg-white
            rounded-[36px]
            px-10 py-14
            md:px-20 md:py-16
            text-center
            shadow-[0_25px_60px_rgba(0,0,0,0.15)]
            transition-all duration-700
            ${section.isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}
          `}
            >
              {/* Heading */}
              <h2
                className="
              text-2xl
              sm:text-3xl
              md:text-4xl
              lg:text-[42px]
              font-bold
              text-[#FF8A1F]
              mb-4 sm:mb-6
              leading-tight
            "
              >
                Join the Movement
              </h2>

              {/*Description */}
              <p
                className="
              text-sm
              sm:text-base
              md:text-lg
              text-gray-800
              mb-6 sm:mb-10
              max-w-4xl
              mx-auto
              leading-relaxed
              font-medium
            "
              >
                Natural Farming is India's path towards: Healthy farmers,
                Safe food, Sustainable agriculture, A stronger nation.
                Join us in building a Natural Farming future.
              </p>

              {/* CTA Button */}
              <button
                className="
              bg-[#FF8A1F]
              hover:bg-[#e67912]
              text-white
              px-8 sm:px-14
              py-3 sm:py-4
              rounded-full
              font-semibold
              text-sm sm:text-base
              btn-premium
              hover:shadow-xl
            "
              >
                Farmer Registration
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JoinTheMovement;
