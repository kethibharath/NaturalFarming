import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface PageHeroProps {
    title: string;
    subtitle: string;
    bgColor?: string;
}

const PageHero: React.FC<PageHeroProps> = ({
    title,
    subtitle,
    bgColor = '#ebf3ee'
}) => {
    const heroSection = useScrollReveal<HTMLElement>();

    return (
        <section
            ref={heroSection.ref}
            className="pt-16 pb-12 px-4"
            style={{ backgroundColor: bgColor }}
        >
            <div
                className={`max-w-6xl mx-auto text-center transition-all duration-700 ${heroSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    }`}
            >
                <h1 className="text-4xl md:text-5xl font-bold text-[#0b7a3b] mb-6">
                    {title}
                </h1>
                <p className="text-lg md:text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
                    {subtitle}
                </p>
            </div>
        </section>
    );
};

export default PageHero;
