import React from 'react';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import { useScrollReveal } from '../hooks/useScrollReveal';

const corePrinciples = [
    {
        number: '01',
        title: 'Jeevan (Life)',
        subtitle: 'Living Soil Ecosystem',
        description: 'Soil must be alive with billions of beneficial microorganisms. These microbes decompose organic matter, fix atmospheric nitrogen, and make nutrients available to plants. Chemical farming kills these organisms; Natural Farming nurtures them.',
        practices: ['Apply Jeevamrit regularly', 'Avoid soil disturbance', 'Use organic mulch', 'Maintain Waaphasa moisture']
    },
    {
        number: '02',
        title: 'Aachchhadan (Mulching)',
        subtitle: 'Protective Soil Cover',
        description: 'Cover soil with organic matter like crop residues, leaves, or straw. Mulch prevents water evaporation, maintains soil temperature, suppresses weeds, and gradually decomposes to enrich soil.',
        practices: ['Use crop residues as mulch', 'Apply 3-5 inch layer', 'Replenish regularly', 'Never burn crop waste']
    },
    {
        number: '03',
        title: 'Waaphasa (Moisture)',
        subtitle: 'Optimal Soil Aeration',
        description: 'Maintain soil moisture at a level where both air and water are present (not waterlogged, not dry). This condition supports aerobic beneficial microbes essential for plant growth.',
        practices: ['Monitor soil moisture daily', 'Irrigate judiciously', 'Use drip or sprinkler systems', 'Maintain mulch cover']
    },
    {
        number: '04',
        title: 'Beej Sanrakshan (Seed Protection)',
        subtitle: 'Indigenous Seed Conservation',
        description: 'Use native, locally adapted seeds that have evolved to thrive in regional conditions. Treat seeds with Beejamrit to enhance germination and protect against diseases.',
        practices: ['Save and exchange seeds', 'Treat with Beejamrit', 'Avoid hybrid/GM seeds', 'Preserve indigenous varieties']
    }
];

const naturalInputs = [
    {
        title: 'Jeevamrit',
        ingredients: ['10 kg cow dung', '10 liters cow urine', '2 kg jaggery', '2 kg pulse flour', '1 handful farm soil'],
        method: 'Mix all ingredients in 200 liters of water. Keep in shade and stir twice daily. Ready in 48 hours.',
        use: 'Soil application: 200 liters per acre, twice a month',
        benefit: 'Increases beneficial soil microbes, improves nutrient availability'
    },
    {
        title: 'Beejamrit',
        ingredients: ['5 liters cow urine', '50 grams lime', 'Handful of farm soil'],
        method: 'Mix ingredients well. Let stand for 24 hours.',
        use: 'Seed treatment: Dip seeds for 20 minutes before sowing',
        benefit: 'Protects seeds from soil-borne diseases, improves germination'
    },
    {
        title: 'Neemastra (Pest Control)',
        ingredients: ['5 kg neem leaves', '5 liters cow urine', '1 handful soil'],
        method: 'Boil neem leaves in 10 liters water. Cool and mix with cow urine and soil. Ferment for 48 hours. Filter and dilute 1:10.',
        use: 'Foliar spray for pest and disease control',
        benefit: 'Natural pesticide and fungicide, safe for beneficial insects'
    },
    {
        title: 'Brahmastra (Strong Pest Control)',
        ingredients: ['3 kg neem leaves', '2 kg custard apple leaves', '2 kg papaya leaves', '10 liters cow urine'],
        method: 'Crush all leaves. Mix with cow urine. Add some cow dung. Boil and cool. Filter after 24 hours.',
        use: 'Spray for severe pest infestations, dilute 1:10',
        benefit: 'Powerful natural pesticide for stubborn pest problems'
    }
];

const cropManagement = [
    {
        stage: 'Land Preparation',
        icon: '🚜',
        tasks: ['Minimal tillage to preserve soil structure', 'Apply Jeevamrit before planting', 'Create bunds for water conservation', 'Plan for mixed cropping']
    },
    {
        stage: 'Sowing',
        icon: '🌱',
        tasks: ['Treat seeds with Beejamrit', 'Use indigenous seeds', 'Practice seed spacing as per traditional methods', 'Sow companion crops together']
    },
    {
        stage: 'Growth Phase',
        icon: '🌾',
        tasks: ['Apply Jeevamrit every 15 days', 'Maintain mulch layer', 'Monitor Waaphasa moisture', 'Remove weeds by hand (use as mulch)']
    },
    {
        stage: 'Pest Management',
        icon: '🐛',
        tasks: ['Spray Neemastra preventively', 'Use Brahmastra for infestations', 'Encourage natural predators', 'Install light traps']
    },
    {
        stage: 'Harvest',
        icon: '🌾',
        tasks: ['Harvest at proper maturity', 'Sun dry produce naturally', 'Store in well-ventilated areas', 'Save seeds for next season']
    }
];

const waterConservation = [
    {
        method: 'Mulching',
        description: 'Reduces evaporation by 50-70%, keeping soil moist longer',
        impact: 'Save 30-40% irrigation water'
    },
    {
        method: 'Drip Irrigation',
        description: 'Delivers water directly to roots, minimizing waste',
        impact: 'Save up to 60% water compared to flood irrigation'
    },
    {
        method: 'Rainwater Harvesting',
        description: 'Collect and store monsoon water in farm ponds',
        impact: 'Provides irrigation during dry spells'
    },
    {
        method: 'Living Soil',
        description: 'Healthy soil with organic matter holds water like a sponge',
        impact: 'Improved soil moisture retention by 40-50%'
    }
];

const PrinciplesTechniques: React.FC = () => {
    const principlesSection = useScrollReveal<HTMLElement>();
    const inputsSection = useScrollReveal<HTMLElement>();
    const cropSection = useScrollReveal<HTMLElement>();
    const pestSection = useScrollReveal<HTMLElement>();
    const waterSection = useScrollReveal<HTMLElement>();

    return (
        <PageLayout>
            <PageHero
                title="Principles & Techniques"
                subtitle="Master the core principles and practical techniques of Natural Farming to transform your agricultural practice."
            />

            {/* Core Principles */}
            <section ref={principlesSection.ref} className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className={`text-3xl md:text-4xl font-bold text-[#0b7a3b] mb-12 text-center transition-all duration-700 ${principlesSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`}>
                        Four Core Principles
                    </h2>

                    <div className="space-y-8">
                        {corePrinciples.map((principle, index) => (
                            <div
                                key={index}
                                className={`bg-gradient-to-r from-[#ebf3ee] to-white rounded-[26px] p-8 md:p-10 border-l-8 border-[#7fb43a] shadow-lg transition-all duration-500 ${principlesSection.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                                    }`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="flex items-start gap-6">
                                    <div className="text-6xl font-bold text-[#7fb43a]/30">
                                        {principle.number}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl md:text-3xl font-bold text-[#0b7a3b] mb-2">
                                            {principle.title}
                                        </h3>
                                        <p className="text-lg text-[#7fb43a] font-semibold mb-4">
                                            {principle.subtitle}
                                        </p>
                                        <p className="text-slate-700 mb-6 leading-relaxed">
                                            {principle.description}
                                        </p>
                                        <div className="bg-white rounded-xl p-4">
                                            <p className="font-semibold text-[#0b7a3b] mb-2">Key Practices:</p>
                                            <ul className="grid md:grid-cols-2 gap-2">
                                                {principle.practices.map((practice, i) => (
                                                    <li key={i} className="flex items-center gap-2 text-slate-700">
                                                        <span className="text-[#FF8A1F]">✓</span>
                                                        {practice}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Natural Inputs Preparation */}
            <section ref={inputsSection.ref} className="py-16 px-4 bg-[#ebf3ee]">
                <div className="max-w-6xl mx-auto">
                    <h2 className={`text-3xl md:text-4xl font-bold text-[#0b7a3b] mb-6 text-center transition-all duration-700 ${inputsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`}>
                        Preparation of Natural Inputs
                    </h2>

                    <p className={`text-center text-slate-700 mb-12 max-w-4xl mx-auto transition-all duration-700 ${inputsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`} style={{ transitionDelay: '100ms' }}>
                        All inputs are prepared on-farm using locally available materials at near-zero cost.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {naturalInputs.map((input, index) => (
                            <div
                                key={index}
                                className={`card-premium bg-white rounded-[26px] p-8 shadow-lg transition-all duration-500 ${inputsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                    }`}
                                style={{ transitionDelay: `${index * 100 + 200}ms` }}
                            >
                                <h3 className="text-2xl font-bold text-[#0b7a3b] mb-4">{input.title}</h3>

                                <div className="space-y-4">
                                    <div>
                                        <p className="font-semibold text-slate-800 mb-2">Ingredients:</p>
                                        <ul className="text-sm text-slate-700 space-y-1 ml-4">
                                            {input.ingredients.map((ing, i) => (
                                                <li key={i}>• {ing}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <p className="font-semibold text-slate-800 mb-2">Method:</p>
                                        <p className="text-sm text-slate-700">{input.method}</p>
                                    </div>

                                    <div className="bg-[#7fb43a]/10 rounded-xl p-4">
                                        <p className="font-semibold text-[#0b7a3b] mb-1">Application:</p>
                                        <p className="text-sm text-slate-700 mb-3">{input.use}</p>
                                        <p className="font-semibold text-[#0b7a3b] mb-1">Benefit:</p>
                                        <p className="text-sm text-slate-700">{input.benefit}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Crop Management Timeline */}
            <section ref={cropSection.ref} className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className={`text-3xl md:text-4xl font-bold text-[#0b7a3b] mb-12 text-center transition-all duration-700 ${cropSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`}>
                        Crop Management Techniques
                    </h2>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#7fb43a] to-[#006738]" />

                        <div className="space-y-12">
                            {cropManagement.map((stage, index) => (
                                <div
                                    key={index}
                                    className={`relative transition-all duration-500 ${cropSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                        }`}
                                    style={{ transitionDelay: `${index * 100}ms` }}
                                >
                                    <div className={`md:flex gap-8 items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                        {/* Content */}
                                        <div className="md:w-1/2">
                                            <div className="card-premium bg-[#ebf3ee] rounded-[26px] p-6 shadow-lg">
                                                <div className="flex items-center gap-4 mb-4">
                                                    <span className="text-4xl">{stage.icon}</span>
                                                    <h3 className="text-2xl font-bold text-[#0b7a3b]">{stage.stage}</h3>
                                                </div>
                                                <ul className="space-y-2">
                                                    {stage.tasks.map((task, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-slate-700">
                                                            <span className="text-[#FF8A1F] mt-1">▸</span>
                                                            <span>{task}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Timeline dot */}
                                        <div className="hidden md:block md:w-12 flex-shrink-0 flex justify-center">
                                            <div className="w-6 h-6 bg-[#FF8A1F] rounded-full border-4 border-white shadow-lg" />
                                        </div>

                                        {/* Spacer */}
                                        <div className="hidden md:block md:w-1/2" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Pest Control */}
            <section ref={pestSection.ref} className="py-16 px-4 bg-gradient-to-br from-[#006738] to-[#0b7a3b]">
                <div className={`max-w-6xl mx-auto text-white transition-all duration-700 ${pestSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    }`}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                        Pest Control Without Chemicals
                    </h2>

                    <p className="text-center text-lg mb-12 max-w-4xl mx-auto opacity-90">
                        Natural Farming uses plant-based and microbial solutions to manage pests while protecting beneficial insects.
                    </p>

                    <div className="bg-white/10 backdrop-blur-sm rounded-[26px] p-8 md:p-12">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="text-5xl mb-4">🌿</div>
                                <h3 className="text-xl font-bold mb-3">Preventive Care</h3>
                                <ul className="space-y-2 text-sm opacity-90">
                                    <li>Apply Jeevamrit for plant immunity</li>
                                    <li>Maintain biodiversity</li>
                                    <li>Regular Neemastra sprays</li>
                                </ul>
                            </div>

                            <div className="text-center">
                                <div className="text-5xl mb-4">🐞</div>
                                <h3 className="text-xl font-bold mb-3">Biological Control</h3>
                                <ul className="space-y-2 text-sm opacity-90">
                                    <li>Encourage predatory insects</li>
                                    <li>Install bird perches</li>
                                    <li>Plant flowering borders</li>
                                </ul>
                            </div>

                            <div className="text-center">
                                <div className="text-5xl mb-4">🛡️</div>
                                <h3 className="text-xl font-bold mb-3">Active Treatment</h3>
                                <ul className="space-y-2 text-sm opacity-90">
                                    <li>Use Brahmastra for outbreaks</li>
                                    <li>Light and pheromone traps</li>
                                    <li>Hand-picking for large pests</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Water Conservation */}
            <section ref={waterSection.ref} className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className={`text-3xl md:text-4xl font-bold text-[#0b7a3b] mb-12 text-center transition-all duration-700 ${waterSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`}>
                        Water Conservation Practices
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {waterConservation.map((practice, index) => (
                            <div
                                key={index}
                                className={`card-premium bg-gradient-to-br from-blue-50 to-blue-100 rounded-[26px] p-8 border-2 border-blue-200 transition-all duration-500 ${waterSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                    }`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <h3 className="text-2xl font-bold text-[#0b7a3b] mb-3">{practice.method}</h3>
                                <p className="text-slate-700 mb-4">{practice.description}</p>
                                <div className="inline-block bg-[#FF8A1F] text-white px-4 py-2 rounded-full text-sm font-semibold">
                                    {practice.impact}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </PageLayout>
    );
};

export default PrinciplesTechniques;
