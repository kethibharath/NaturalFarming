import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import { useScrollReveal } from '../hooks/useScrollReveal';

const trainingPrograms = [
    {
        title: 'Foundation Course in Natural Farming',
        duration: '3 Days',
        level: 'Beginner',
        format: 'In-person / Online',
        topics: ['Basic principles', 'Jeevamrit & Beejamrit preparation', 'Mulching techniques', 'Soil health management'],
        certificate: true
    },
    {
        title: 'Advanced Natural Input Preparation',
        duration: '2 Days',
        level: 'Intermediate',
        format: 'In-person',
        topics: ['Neemastra & Brahmastra', 'Fermented plant extracts', 'Custom pest control solutions', 'Seasonal input planning'],
        certificate: true
    },
    {
        title: 'Master Trainer Program',
        duration: '7 Days',
        level: 'Advanced',
        format: 'Residential',
        topics: ['Training methodology', 'Field demonstrations', 'Community mobilization', 'Advanced troubleshooting'],
        certificate: true
    },
    {
        title: 'Women in Natural Farming',
        duration: '2 Days',
        level: 'All Levels',
        format: 'In-person',
        topics: ['Kitchen garden practices', 'Nutrition management', 'Value addition', 'Income generation'],
        certificate: true
    }
];

const videoModules = [
    {
        category: 'Getting Started',
        videos: [
            { title: 'Introduction to Natural Farming', duration: '12 min', language: 'Hindi, English, Telugu, Tamil' },
            { title: 'How to Prepare Jeevamrit', duration: '15 min', language: 'Hindi, English, Kannada, Marathi' },
            { title: 'Seed Treatment with Beejamrit', duration: '10 min', language: 'Hindi, English, Gujarati' }
        ]
    },
    {
        category: 'Crop Management',
        videos: [
            { title: 'Rice Cultivation in Natural Farming', duration: '25 min', language: 'Hindi, English, Telugu, Bengali' },
            { title: 'Cotton Natural Farming Guide', duration: '30 min', language: 'Hindi, English, Gujarati, Marathi' },
            { title: 'Vegetable Production Techniques', duration: '20 min', language: 'Hindi, English, Tamil, Malayalam' }
        ]
    },
    {
        category: 'Pest & Disease Control',
        videos: [
            { title: 'Preparing Neemastra', duration: '12 min', language: 'Hindi, English, Kannada' },
            { title: 'Integrated Pest Management', duration: '18 min', language: 'Hindi, English, Telugu' },
            { title: 'Disease Prevention Strategies', duration: '15 min', language: 'Hindi, English, Tamil' }
        ]
    }
];

const handbooks = [
    { title: 'Complete Guide to Natural Farming (Hindi)', size: '8.5 MB', pages: '120', format: 'PDF' },
    { title: 'Jeevamrit & Beejamrit Preparation Manual', size: '2.3 MB', pages: '28', format: 'PDF' },
    { title: 'Natural Pest Control Handbook', size: '4.1 MB', pages: '65', format: 'PDF' },
    { title: 'Season-wise Crop Planning Guide', size: '3.7 MB', pages: '45', format: 'PDF' },
    { title: 'Women\'s Guide to Kitchen Gardens', size: '2.9 MB', pages: '35', format: 'PDF' },
    { title: 'Soil Health Assessment Manual', size: '5.2 MB', pages: '52', format: 'PDF' }
];

const articles = [
    {
        title: 'Why Soil Microbes Are the Real Farmers',
        author: 'Dr. Rajesh Kumar',
        date: 'Jan 15, 2026',
        category: 'Soil Science',
        readTime: '8 min'
    },
    {
        title: 'Economic Analysis: Natural Farming vs Chemical Farming',
        author: 'Prof. Meera Desai',
        date: 'Jan 10, 2026',
        category: 'Economics',
        readTime: '12 min'
    },
    {
        title: 'Success Stories from Andhra Pradesh',
        author: 'Farm Collective Team',
        date: 'Jan 5, 2026',
        category: 'Case Studies',
        readTime: '15 min'
    },
    {
        title: 'Climate Resilience Through Natural Farming',
        author: 'Dr. Anjali Sharma',
        date: 'Dec 28, 2025',
        category: 'Climate',
        readTime: '10 min'
    }
];

const ResourcesLearning: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const trainingSection = useScrollReveal<HTMLElement>();
    const videoSection = useScrollReveal<HTMLElement>();
    const handbookSection = useScrollReveal<HTMLElement>();
    const articleSection = useScrollReveal<HTMLElement>();
    const communitySection = useScrollReveal<HTMLElement>();

    const categories = ['All', 'Soil Science', 'Economics', 'Case Studies', 'Climate'];

    const filteredArticles = activeCategory === 'All'
        ? articles
        : articles.filter(article => article.category === activeCategory);

    return (
        <PageLayout>
            <PageHero
                title="Resources & Learning"
                subtitle="Access comprehensive training programs, video modules, handbooks, and expert knowledge to master Natural Farming."
            />

            {/* Training Programs */}
            <section ref={trainingSection.ref} className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className={`text-3xl md:text-4xl font-bold text-[#0b7a3b] mb-6 text-center transition-all duration-700 ${trainingSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`}>
                        Training Programs
                    </h2>

                    <p className={`text-center text-slate-700 mb-12 max-w-4xl mx-auto transition-all duration-700 ${trainingSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`} style={{ transitionDelay: '100ms' }}>
                        Hands-on training programs designed for farmers at every level, from beginners to master trainers.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {trainingPrograms.map((program, index) => (
                            <div
                                key={index}
                                className={`card-premium bg-[#ebf3ee] rounded-[26px] p-8 shadow-lg transition-all duration-500 ${trainingSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                    }`}
                                style={{ transitionDelay: `${index * 100 + 200}ms` }}
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-[#0b7a3b] flex-1">
                                        {program.title}
                                    </h3>
                                    {program.certificate && (
                                        <span className="bg-[#FF8A1F] text-white text-xs px-3 py-1 rounded-full font-semibold">
                                            Certificate
                                        </span>
                                    )}
                                </div>

                                <div className="grid grid-cols-3 gap-4 mb-6">
                                    <div className="text-center">
                                        <p className="text-sm text-slate-600">Duration</p>
                                        <p className="font-bold text-[#0b7a3b]">{program.duration}</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-sm text-slate-600">Level</p>
                                        <p className="font-bold text-[#0b7a3b]">{program.level}</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-sm text-slate-600">Format</p>
                                        <p className="font-bold text-[#0b7a3b] text-xs">{program.format}</p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl p-4">
                                    <p className="font-semibold text-[#0b7a3b] mb-2">Topics Covered:</p>
                                    <ul className="space-y-1">
                                        {program.topics.map((topic, i) => (
                                            <li key={i} className="text-sm text-slate-700 flex items-start gap-2">
                                                <span className="text-[#7fb43a]">•</span>
                                                {topic}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <button className="mt-6 w-full bg-[#006738] hover:bg-[#0b7a3b] text-white px-6 py-3 rounded-full font-semibold btn-premium transition-all">
                                    Register Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Learning Modules */}
            <section ref={videoSection.ref} className="py-16 px-4 bg-[#ebf3ee]">
                <div className="max-w-6xl mx-auto">
                    <h2 className={`text-3xl md:text-4xl font-bold text-[#0b7a3b] mb-6 text-center transition-all duration-700 ${videoSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`}>
                        Video Learning Modules
                    </h2>

                    <p className={`text-center text-slate-700 mb-12 max-w-4xl mx-auto transition-all duration-700 ${videoSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`} style={{ transitionDelay: '100ms' }}>
                        Watch and learn from expert farmers and trainers. Videos available in multiple Indian languages.
                    </p>

                    <div className="space-y-8">
                        {videoModules.map((module, moduleIndex) => (
                            <div
                                key={moduleIndex}
                                className={`bg-white rounded-[26px] p-8 shadow-lg transition-all duration-500 ${videoSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                    }`}
                                style={{ transitionDelay: `${moduleIndex * 100 + 200}ms` }}
                            >
                                <h3 className="text-2xl font-bold text-[#0b7a3b] mb-6">{module.category}</h3>
                                <div className="space-y-4">
                                    {module.videos.map((video, videoIndex) => (
                                        <div
                                            key={videoIndex}
                                            className="card-premium flex items-center gap-6 bg-gradient-to-r from-[#ebf3ee] to-white rounded-xl p-5 hover:shadow-md transition-all cursor-pointer"
                                        >
                                            <div className="flex-shrink-0 w-16 h-16 bg-[#FF8A1F] rounded-xl flex items-center justify-center text-white text-2xl">
                                                ▶
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-bold text-[#0b7a3b] mb-1">{video.title}</h4>
                                                <p className="text-sm text-slate-600">
                                                    {video.duration} • {video.language}
                                                </p>
                                            </div>
                                            <button className="bg-[#006738] hover:bg-[#0b7a3b] text-white px-6 py-2 rounded-full font-semibold text-sm btn-premium transition-all">
                                                Watch Now
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Farmer Handbooks */}
            <section ref={handbookSection.ref} className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className={`text-3xl md:text-4xl font-bold text-[#0b7a3b] mb-6 text-center transition-all duration-700 ${handbookSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`}>
                        Farmer Handbooks
                    </h2>

                    <p className={`text-center text-slate-700 mb-12 max-w-4xl mx-auto transition-all duration-700 ${handbookSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`} style={{ transitionDelay: '100ms' }}>
                        Download comprehensive guides and manuals for quick reference in the field.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {handbooks.map((handbook, index) => (
                            <div
                                key={index}
                                className={`card-premium bg-gradient-to-br from-[#ebf3ee] to-white rounded-[26px] p-6 border-2 border-[#7fb43a]/20 shadow-lg transition-all duration-500 ${handbookSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                    }`}
                                style={{ transitionDelay: `${index * 100 + 200}ms` }}
                            >
                                <div className="text-5xl mb-4">📘</div>
                                <h3 className="font-bold text-[#0b7a3b] mb-4 h-14">
                                    {handbook.title}
                                </h3>
                                <div className="flex justify-between text-sm text-slate-600 mb-4">
                                    <span>{handbook.pages} pages</span>
                                    <span>{handbook.size}</span>
                                </div>
                                <button className="w-full bg-[#FF8A1F] hover:bg-[#e67912] text-white px-6 py-3 rounded-full font-semibold btn-premium transition-all">
                                    Download PDF
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Expert Articles */}
            <section ref={articleSection.ref} className="py-16 px-4 bg-[#ebf3ee]">
                <div className="max-w-6xl mx-auto">
                    <h2 className={`text-3xl md:text-4xl font-bold text-[#0b7a3b] mb-6 text-center transition-all duration-700 ${articleSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`}>
                        Expert Articles
                    </h2>

                    <p className={`text-center text-slate-700 mb-8 max-w-4xl mx-auto transition-all duration-700 ${articleSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`} style={{ transitionDelay: '100ms' }}>
                        Read in-depth articles from agricultural scientists, researchers, and experienced farmers.
                    </p>

                    {/* Category Filter */}
                    <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 ${articleSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`} style={{ transitionDelay: '200ms' }}>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2 rounded-full font-semibold transition-all ${activeCategory === category
                                        ? 'bg-[#006738] text-white'
                                        : 'bg-white text-slate-700 hover:bg-[#7fb43a]/20'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {filteredArticles.map((article, index) => (
                            <div
                                key={index}
                                className={`card-premium bg-white rounded-[26px] p-8 shadow-lg transition-all duration-500 ${articleSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                    }`}
                                style={{ transitionDelay: `${index * 100 + 300}ms` }}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="bg-[#7fb43a]/20 text-[#0b7a3b] px-3 py-1 rounded-full text-xs font-semibold">
                                        {article.category}
                                    </span>
                                    <span className="text-sm text-slate-500">{article.readTime} read</span>
                                </div>

                                <h3 className="text-xl font-bold text-[#0b7a3b] mb-3">
                                    {article.title}
                                </h3>

                                <div className="flex items-center justify-between text-sm text-slate-600 mb-4">
                                    <span>By {article.author}</span>
                                    <span>{article.date}</span>
                                </div>

                                <button className="text-[#006738] hover:text-[#0b7a3b] font-semibold flex items-center gap-2 transition-all">
                                    Read Article
                                    <span>→</span>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Community Knowledge Sharing */}
            <section ref={communitySection.ref} className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className={`bg-gradient-to-r from-[#006738] to-[#0b7a3b] rounded-[36px] p-12 text-white text-center transition-all duration-700 ${communitySection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Community Knowledge Sharing
                        </h2>
                        <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
                            Join our vibrant community of Natural Farming practitioners. Share your experiences, learn from others, and get expert guidance.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                                <div className="text-4xl mb-3">👥</div>
                                <h3 className="font-bold text-xl mb-2">Discussion Forums</h3>
                                <p className="text-sm opacity-90">Ask questions, share solutions</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                                <div className="text-4xl mb-3">📱</div>
                                <h3 className="font-bold text-xl mb-2">WhatsApp Groups</h3>
                                <p className="text-sm opacity-90">Regional language support</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                                <div className="text-4xl mb-3">🏆</div>
                                <h3 className="font-bold text-xl mb-2">Success Stories</h3>
                                <p className="text-sm opacity-90">Inspire and get inspired</p>
                            </div>
                        </div>

                        <button className="bg-[#FF8A1F] hover:bg-[#e67912] text-white px-12 py-4 rounded-full font-semibold text-lg btn-premium hover:shadow-lg transition-all">
                            Join Community
                        </button>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
};

export default ResourcesLearning;
