import React from 'react';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import { useScrollReveal } from '../hooks/useScrollReveal';

const suitableCrops = [
    {
        category: 'Cereals',
        crops: [
            { name: 'Rice (Paddy)', season: 'Kharif', duration: '120-150 days', image: '🌾' },
            { name: 'Wheat', season: 'Rabi', duration: '120-140 days', image: '🌾' },
            { name: 'Millets (Bajra, Jowar, Ragi)', season: 'Kharif', duration: '90-120 days', image: '🌾' },
            { name: 'Maize', season: 'Kharif/Rabi', duration: '90-110 days', image: '🌽' }
        ]
    },
    {
        category: 'Pulses',
        crops: [
            { name: 'Chickpea (Chana)', season: 'Rabi', duration: '120-140 days', image: '🫘' },
            { name: 'Pigeon Pea (Arhar)', season: 'Kharif', duration: '150-180 days', image: '🫘' },
            { name: 'Green Gram (Moong)', season: 'Kharif', duration: '60-75 days', image: '🫘' },
            { name: 'Black Gram (Urad)', season: 'Kharif', duration: '70-90 days', image: '🫘' }
        ]
    },
    {
        category: 'Vegetables',
        crops: [
            { name: 'Tomato', season: 'Year-round', duration: '90-120 days', image: '🍅' },
            { name: 'Brinjal', season: 'Year-round', duration: '120-150 days', image: '🍆' },
            { name: 'Okra (Bhindi)', season: 'Kharif', duration: '50-60 days', image: '🌶️' },
            { name: 'Leafy Vegetables', season: 'Year-round', duration: '30-45 days', image: '🥬' }
        ]
    },
    {
        category: 'Cash Crops',
        crops: [
            { name: 'Cotton', season: 'Kharif', duration: '150-180 days', image: '🧺' },
            { name: 'Sugarcane', season: 'Year-round', duration: '12-18 months', image: '🎋' },
            { name: 'Turmeric', season: 'Kharif', duration: '7-9 months', image: '🌿' },
            { name: 'Ginger', season: 'Kharif', duration: '8-10 months', image: '🌿' }
        ]
    }
];

const seasonalPlanning = [
    {
        season: 'Kharif (June-October)',
        icon: '🌧️',
        months: 'Monsoon Season',
        crops: 'Rice, Millets, Cotton, Soybean, Groundnut, Maize, Pulses (Moong, Urad, Arhar)',
        activities: [
            'Land preparation with minimal tillage in May',
            'Apply Jeevamrit before sowing',
            'Sow after first good monsoon rain',
            'Maintain mulch to manage excess water',
            'Regular Neemastra sprays for pest prevention'
        ]
    },
    {
        season: 'Rabi (October-March)',
        icon: '☀️',
        months: 'Winter Season',
        crops: 'Wheat, Chickpea, Mustard, Lentil, Vegetables, Barley, Peas',
        activities: [
            'Prepare land after Kharif harvest',
            'Treat seeds with Beejamrit',
            'Plan irrigation schedule',
            'Use winter mulch for moisture retention',
            'Monitor for winter pests'
        ]
    },
    {
        season: 'Zaid (March-June)',
        icon: '🌤️',
        months: 'Summer Season',
        crops: 'Cucumber, Watermelon, Muskmelon, Bottle Gourd, Moong (short duration)',
        activities: [
            'Select drought-resistant varieties',
            'Heavy mulching essential',
            'Efficient drip irrigation',
            'Plant early morning or evening',
            'Use shade nets for delicate crops'
        ]
    }
];

const mixedCropping = [
    {
        main: 'Cotton',
        companion: 'Pigeon Pea (Arhar)',
        benefit: 'Pigeon pea fixes nitrogen, improves soil. Both share resources efficiently.',
        ratio: '2:1 (2 rows cotton, 1 row pigeon pea)'
    },
    {
        main: 'Wheat',
        companion: 'Chickpea',
        benefit: 'Chickpea adds nitrogen. Different root depths use soil efficiently.',
        ratio: '4:2 (4 rows wheat, 2 rows chickpea)'
    },
    {
        main: 'Maize',
        companion: 'Beans',
        benefit: 'Beans climb maize stalks, fix nitrogen. Saves space and improves soil.',
        ratio: '1:1 alternating'
    },
    {
        main: 'Vegetable Crops',
        companion: 'Marigold / Coriander',
        benefit: 'Repels pests naturally, attracts beneficial insects.',
        ratio: 'Border planting'
    }
];

const soilPreparation = [
    {
        step: 'Step 1: Assessment',
        description: 'Evaluate soil type, moisture, previous crop residue, and weed pressure.',
        timing: '2-3 weeks before sowing'
    },
    {
        step: 'Step 2: Minimal Tillage',
        description: 'Light tillage only if necessary. Avoid deep plowing to preserve soil structure and microbes.',
        timing: '10-15 days before sowing'
    },
    {
        step: 'Step 3: Residue Management',
        description: 'Spread crop residues as mulch. Never burn. Decomposition enriches soil.',
        timing: 'Immediately after harvest'
    },
    {
        step: 'Step 4: Jeevamrit Application',
        description: 'Apply 200 liters of Jeevamrit per acre to boost microbial activity.',
        timing: '7-10 days before sowing'
    },
    {
        step: 'Step 5: Mulch Layer',
        description: 'Spread 3-5 inch mulch layer to conserve moisture and regulate temperature.',
        timing: 'Just before sowing'
    },
    {
        step: 'Step 6: Seed Treatment',
        description: 'Treat seeds with Beejamrit for disease protection and better germination.',
        timing: '24 hours before sowing'
    }
];

const harvestStorage = [
    {
        title: 'Harvesting Guidelines',
        icon: '✂️',
        points: [
            'Harvest at proper physiological maturity',
            'Avoid harvesting in wet conditions',
            'Handle produce gently to prevent damage',
            'Separate damaged from healthy produce',
            'Clean harvesting tools regularly'
        ]
    },
    {
        title: 'Drying Methods',
        icon: '☀️',
        points: [
            'Sun-dry grains to 12-14% moisture',
            'Use drying mats, not direct ground contact',
            'Turn grains regularly for even drying',
            'Cover at night to prevent dew absorption',
            'Test moisture before storage'
        ]
    },
    {
        title: 'Storage Practices',
        icon: '🏺',
        points: [
            'Use clean, dry, pest-free storage containers',
            'Store in cool, well-ventilated areas',
            'Use neem leaves as natural pest deterrent',
            'Regular inspection for pests and moisture',
            'Maintain proper labeling with date and variety'
        ]
    },
    {
        title: 'Seed Preservation',
        icon: '🌱',
        points: [
            'Select best plants for seed saving',
            'Dry seeds thoroughly before storage',
            'Store in airtight containers with neem',
            'Maintain seed viability records',
            'Exchange seeds with other farmers'
        ]
    }
];

const CropsPractices: React.FC = () => {
    const cropsSection = useScrollReveal<HTMLElement>();
    const seasonSection = useScrollReveal<HTMLElement>();
    const mixedSection = useScrollReveal<HTMLElement>();
    const soilSection = useScrollReveal<HTMLElement>();
    const harvestSection = useScrollReveal<HTMLElement>();

    return (
        <PageLayout>
            <PageHero
                title="Crops & Practices"
                subtitle="Discover suitable crops for Natural Farming and learn season-wise planning, intercropping techniques, and best practices."
            />

            {/* Suitable Crops */}
            <section ref={cropsSection.ref} className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className={`text-3xl md:text-4xl font-bold text-[#0b7a3b] mb-6 text-center transition-all duration-700 ${cropsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`}>
                        Suitable Crops for Natural Farming
                    </h2>

                    <p className={`text-center text-slate-700 mb-12 max-w-4xl mx-auto transition-all duration-700 ${cropsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`} style={{ transitionDelay: '100ms' }}>
                        Almost all crops can be grown using Natural Farming methods. Here are the most commonly practiced crops in India.
                    </p>

                    <div className="space-y-8">
                        {suitableCrops.map((category, catIndex) => (
                            <div
                                key={catIndex}
                                className={`bg-[#ebf3ee] rounded-[26px] p-8 transition-all duration-500 ${cropsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                    }`}
                                style={{ transitionDelay: `${catIndex * 100 + 200}ms` }}
                            >
                                <h3 className="text-2xl font-bold text-[#0b7a3b] mb-6">{category.category}</h3>
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                    {category.crops.map((crop, cropIndex) => (
                                        <div
                                            key={cropIndex}
                                            className="card-premium bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all"
                                        >
                                            <div className="text-4xl mb-3">{crop.image}</div>
                                            <h4 className="font-bold text-[#0b7a3b] mb-2">{crop.name}</h4>
                                            <p className="text-sm text-slate-600 mb-1">
                                                <strong>Season:</strong> {crop.season}
                                            </p>
                                            <p className="text-sm text-slate-600">
                                                <strong>Duration:</strong> {crop.duration}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Seasonal Planning */}
            <section ref={seasonSection.ref} className="py-16 px-4 bg-[#ebf3ee]">
                <div className="max-w-6xl mx-auto">
                    <h2 className={`text-3xl md:text-4xl font-bold text-[#0b7a3b] mb-12 text-center transition-all duration-700 ${seasonSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`}>
                        Seasonal Crop Planning
                    </h2>

                    <div className="space-y-8">
                        {seasonalPlanning.map((season, index) => (
                            <div
                                key={index}
                                className={`card-premium bg-white rounded-[26px] p-8 md:p-10 shadow-lg transition-all duration-500 ${seasonSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                    }`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="flex items-start gap-6">
                                    <div className="text-6xl">{season.icon}</div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl md:text-3xl font-bold text-[#0b7a3b] mb-2">
                                            {season.season}
                                        </h3>
                                        <p className="text-lg text-[#7fb43a] font-semibold mb-4">
                                            {season.months}
                                        </p>

                                        <div className="bg-[#7fb43a]/10 rounded-xl p-4 mb-6">
                                            <p className="font-semibold text-[#0b7a3b] mb-2">Key Crops:</p>
                                            <p className="text-slate-700">{season.crops}</p>
                                        </div>

                                        <div>
                                            <p className="font-semibold text-[#0b7a3b] mb-3">Activities:</p>
                                            <ul className="space-y-2">
                                                {season.activities.map((activity, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-slate-700">
                                                        <span className="text-[#FF8A1F] mt-1">✓</span>
                                                        <span>{activity}</span>
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

            {/* Mixed Cropping */}
            <section ref={mixedSection.ref} className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className={`text-3xl md:text-4xl font-bold text-[#0b7a3b] mb-6 text-center transition-all duration-700 ${mixedSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`}>
                        Mixed Cropping & Intercropping
                    </h2>

                    <p className={`text-center text-slate-700 mb-12 max-w-4xl mx-auto transition-all duration-700 ${mixedSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`} style={{ transitionDelay: '100ms' }}>
                        Grow multiple crops together to maximize land use, improve soil health, and reduce pest pressure.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {mixedCropping.map((combo, index) => (
                            <div
                                key={index}
                                className={`card-premium bg-gradient-to-br from-[#ebf3ee] to-white rounded-[26px] p-8 border-2 border-[#7fb43a]/30 shadow-lg transition-all duration-500 ${mixedSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                    }`}
                                style={{ transitionDelay: `${index * 100 + 200}ms` }}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-[#0b7a3b] text-white px-4 py-2 rounded-full font-bold">
                                        {combo.main}
                                    </div>
                                    <span className="text-2xl">+</span>
                                    <div className="bg-[#7fb43a] text-white px-4 py-2 rounded-full font-bold">
                                        {combo.companion}
                                    </div>
                                </div>

                                <p className="text-slate-700 mb-4">{combo.benefit}</p>

                                <div className="bg-white rounded-xl p-4">
                                    <p className="font-semibold text-[#0b7a3b] mb-1">Planting Ratio:</p>
                                    <p className="text-slate-700">{combo.ratio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Soil Preparation */}
            <section ref={soilSection.ref} className="py-16 px-4 bg-gradient-to-br from-[#006738] to-[#0b7a3b]">
                <div className="max-w-6xl mx-auto">
                    <h2 className={`text-3xl md:text-4xl font-bold text-white mb-12 text-center transition-all duration-700 ${soilSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`}>
                        Soil Preparation Methods
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {soilPreparation.map((step, index) => (
                            <div
                                key={index}
                                className={`bg-white/10 backdrop-blur-sm rounded-[26px] p-6 border border-white/20 transition-all duration-500 ${soilSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                    }`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="bg-[#FF8A1F] text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                                    {step.step}
                                </div>
                                <p className="text-white font-semibold mb-2">{step.description}</p>
                                <p className="text-white/80 text-sm">{step.timing}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Harvest & Storage */}
            <section ref={harvestSection.ref} className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className={`text-3xl md:text-4xl font-bold text-[#0b7a3b] mb-12 text-center transition-all duration-700 ${harvestSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`}>
                        Harvest & Storage Guidance
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {harvestStorage.map((guide, index) => (
                            <div
                                key={index}
                                className={`card-premium bg-[#ebf3ee] rounded-[26px] p-8 shadow-lg transition-all duration-500 ${harvestSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                    }`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-5xl">{guide.icon}</span>
                                    <h3 className="text-2xl font-bold text-[#0b7a3b]">{guide.title}</h3>
                                </div>

                                <ul className="space-y-3">
                                    {guide.points.map((point, i) => (
                                        <li key={i} className="flex items-start gap-2 text-slate-700">
                                            <span className="text-[#7fb43a] text-xl mt-0.5">•</span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </PageLayout>
    );
};

export default CropsPractices;
