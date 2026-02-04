import React from 'react';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Link } from 'react-router-dom';

const principles = [
    {
        icon: '🌱',
        title: 'Living Soil',
        description: 'Treat soil as a living ecosystem with beneficial microorganisms, earthworms, and organic matter rather than an inert medium.'
    },
    {
        icon: '🚫',
        title: 'Zero Chemicals',
        description: 'Completely eliminate synthetic fertilizers, pesticides, and herbicides. Use only natural, on-farm inputs.'
    },
    {
        icon: '🌾',
        title: 'Biodiversity',
        description: 'Encourage diverse crops, native plants, and beneficial insects to create a balanced farm ecosystem.'
    },
    {
        icon: '💧',
        title: 'Water Conservation',
        description: 'Use mulching, cover crops, and efficient irrigation to conserve water and improve soil moisture retention.'
    },
    {
        icon: '♻️',
        title: 'On-Farm Inputs',
        description: 'Prepare all nutrients and pest control solutions from locally available cow dung, urine, jaggery, and plant materials.'
    },
    {
        icon: '🌍',
        title: 'Climate Resilience',
        description: 'Build soil health and biodiversity to withstand droughts, floods, and extreme weather conditions.'
    }
];

const practices = [
    {
        title: 'Jeevamrit',
        description: 'A microbial culture prepared from cow dung, cow urine, jaggery, pulse flour, and soil. Applied to enhance soil microbes.',
        frequency: 'Apply twice a month'
    },
    {
        title: 'Beejamrit',
        description: 'Seed treatment solution made from cow dung and cow urine to protect seeds from soil-borne diseases and improve germination.',
        frequency: 'Before sowing'
    },
    {
        title: 'Mulching',
        description: 'Cover soil with organic matter like crop residues, leaves, or straw to retain moisture, suppress weeds, and improve soil health.',
        frequency: 'Continuous practice'
    },
    {
        title: 'Waaphasa',
        description: 'Maintain optimal soil moisture (not too dry, not waterlogged) to support beneficial aerobic microorganisms.',
        frequency: 'Daily monitoring'
    }
];

const NaturalFarming: React.FC = () => {
    const whatSection = useScrollReveal<HTMLElement>();
    const principlesSection = useScrollReveal<HTMLElement>();
    const traditionalSection = useScrollReveal<HTMLElement>();
    const scienceSection = useScrollReveal<HTMLElement>();
    const whySection = useScrollReveal<HTMLElement>();

    return (
        <PageLayout>
            <PageHero
                title="Natural Farming"
                subtitle="A chemical-free, sustainable approach to agriculture that works with nature to produce healthy food while restoring soil health and farmer prosperity."
            />

            {/* What is Natural Farming - Detailed */}
            <section ref={whatSection.ref} className="py-16 px-4 bg-white">
                <div className={`max-w-6xl mx-auto transition-all duration-700 ${whatSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    }`}>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0b7a3b] mb-6 text-center">
                        What is Natural Farming?
                    </h2>

                    <div className="space-y-6 text-slate-700 text-base md:text-lg leading-relaxed">
                        <p>
                            Natural Farming is a holistic, chemical-free agricultural system that eliminates the use of synthetic fertilizers, pesticides, and other external inputs. Instead, it relies on building healthy, living soil through natural processes and locally available resources.
                        </p>

                        <p>
                            Developed and popularized in India by agricultural scientist <strong>Subhash Palekar</strong>, Natural Farming is also known as <strong>Subhash Palekar Natural Farming (SPNF)</strong> or <strong>Zero Budget Natural Farming (ZBNF)</strong>. The approach draws inspiration from traditional Indian farming wisdom combined with modern ecological understanding.
                        </p>

                        <p>
                            At its core, Natural Farming recognizes that <strong>soil is alive</strong>—teeming with billions of beneficial bacteria, fungi, earthworms, and other organisms. These living communities break down organic matter, fix nitrogen from the air, solubilize minerals, and make nutrients available to plants naturally.
                        </p>

                        <p>
                            Unlike chemical farming, which treats soil as a lifeless substrate requiring constant external inputs, Natural Farming <strong>regenerates soil health</strong> over time, reduces farmer costs to near zero, and produces nutritious, chemical-free food.
                        </p>
                    </div>
                </div>
            </section>

            {/* Key Principles */}
            <section ref={principlesSection.ref} className="py-16 px-4 bg-[#ebf3ee]">
                <div className="max-w-6xl mx-auto">
                    <h2 className={`text-3xl md:text-4xl font-bold text-[#0b7a3b] mb-12 text-center transition-all duration-700 ${principlesSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`}>
                        Key Principles of Natural Farming
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {principles.map((principle, index) => (
                            <div
                                key={index}
                                className={`card-premium bg-white rounded-[26px] p-8 shadow-lg transition-all duration-500 ${principlesSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                    }`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="text-5xl mb-4">{principle.icon}</div>
                                <h3 className="text-xl font-bold text-[#0b7a3b] mb-3">
                                    {principle.title}
                                </h3>
                                <p className="text-slate-700 leading-relaxed">
                                    {principle.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Traditional Indian Practices */}
            <section ref={traditionalSection.ref} className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className={`text-3xl md:text-4xl font-bold text-[#0b7a3b] mb-6 text-center transition-all duration-700 ${traditionalSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`}>
                        Traditional Indian Practices in Natural Farming
                    </h2>

                    <p className={`text-center text-slate-700 mb-12 max-w-4xl mx-auto transition-all duration-700 ${traditionalSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`} style={{ transitionDelay: '100ms' }}>
                        Natural Farming revives time-tested methods used by Indian farmers for thousands of years, adapted for modern agricultural challenges.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {practices.map((practice, index) => (
                            <div
                                key={index}
                                className={`bg-gradient-to-br from-[#7fb43a]/10 to-[#006738]/10 rounded-[26px] p-8 border-2 border-[#7fb43a]/30 transition-all duration-500 ${traditionalSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                    }`}
                                style={{ transitionDelay: `${index * 100 + 200}ms` }}
                            >
                                <h3 className="text-2xl font-bold text-[#0b7a3b] mb-3">
                                    {practice.title}
                                </h3>
                                <p className="text-slate-700 mb-4 leading-relaxed">
                                    {practice.description}
                                </p>
                                <div className="inline-block bg-[#FF8A1F] text-white px-4 py-2 rounded-full text-sm font-semibold">
                                    {practice.frequency}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modern Scientific Support */}
            <section ref={scienceSection.ref} className="py-16 px-4 bg-[#ebf3ee]">
                <div className={`max-w-6xl mx-auto transition-all duration-700 ${scienceSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    }`}>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0b7a3b] mb-6 text-center">
                        Modern Scientific Support
                    </h2>

                    <div className="bg-white rounded-[26px] p-8 md:p-12 shadow-lg">
                        <div className="space-y-6 text-slate-700 text-base md:text-lg leading-relaxed">
                            <p>
                                Recent scientific studies validate the effectiveness of Natural Farming practices:
                            </p>

                            <ul className="space-y-4 ml-6">
                                <li className="flex gap-3">
                                    <span className="text-[#7fb43a] text-2xl">✓</span>
                                    <span><strong>Soil Microbiology:</strong> Research shows that cow-based preparations like Jeevamrit increase beneficial soil bacteria by 200-300%, improving nutrient availability.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[#7fb43a] text-2xl">✓</span>
                                    <span><strong>Carbon Sequestration:</strong> Natural Farming practices increase soil organic carbon, helping combat climate change while improving fertility.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[#7fb43a] text-2xl">✓</span>
                                    <span><strong>Crop Yields:</strong> Studies in Andhra Pradesh, Karnataka, and Himachal Pradesh show comparable or higher yields in Natural Farming compared to chemical farming.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[#7fb43a] text-2xl">✓</span>
                                    <span><strong>Economic Benefits:</strong> Farmers report 30-50% reduction in input costs while maintaining income, breaking debt cycles.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[#7fb43a] text-2xl">✓</span>
                                    <span><strong>Food Quality:</strong> Produce from Natural Farming shows higher nutrient density and zero chemical residues.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why It Matters for India Today */}
            <section ref={whySection.ref} className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className={`text-3xl md:text-4xl font-bold text-[#0b7a3b] mb-12 text-center transition-all duration-700 ${whySection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`}>
                        Why It Matters for India Today
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className={`transition-all duration-700 ${whySection.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                            }`} style={{ transitionDelay: '100ms' }}>
                            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-[26px] p-8 h-full border-2 border-red-200">
                                <h3 className="text-2xl font-bold text-red-800 mb-4">The Crisis</h3>
                                <ul className="space-y-3 text-slate-700">
                                    <li>• Farmer suicides due to debt</li>
                                    <li>• Degraded, unproductive soil</li>
                                    <li>• Rising costs of fertilizers and pesticides</li>
                                    <li>• Water pollution and depletion</li>
                                    <li>• Health problems from chemical residues</li>
                                    <li>• Climate change impacts on farming</li>
                                </ul>
                            </div>
                        </div>

                        <div className={`transition-all duration-700 ${whySection.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                            }`} style={{ transitionDelay: '200ms' }}>
                            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-[26px] p-8 h-full border-2 border-green-200">
                                <h3 className="text-2xl font-bold text-[#0b7a3b] mb-4">The Solution</h3>
                                <ul className="space-y-3 text-slate-700">
                                    <li>• Financial freedom for farmers</li>
                                    <li>• Regenerated, fertile soil</li>
                                    <li>• Near-zero input costs</li>
                                    <li>• Clean water and environment</li>
                                    <li>• Safe, nutritious food for all</li>
                                    <li>• Resilient farms adapting to climate</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className={`text-center transition-all duration-700 ${whySection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`} style={{ transitionDelay: '300ms' }}>
                        <div className="bg-gradient-to-r from-[#006738] to-[#0b7a3b] rounded-[36px] p-12 text-white">
                            <h3 className="text-3xl font-bold mb-4">Ready to Start Natural Farming?</h3>
                            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                                Join thousands of Indian farmers who have transformed their lives and land through Natural Farming practices.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
};

export default NaturalFarming;
