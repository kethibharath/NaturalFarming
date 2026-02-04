import React from 'react';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import { useScrollReveal } from '../hooks/useScrollReveal';

const announcements = [
    {
        title: 'National Natural Farming Mission Expands to 15 More States',
        date: 'January 25, 2026',
        category: 'Government Initiative',
        image: '🌾',
        summary: 'The Government of India announces expansion of Natural Farming programs to reach 10 million farmers by 2027. New resource centers to be established in every district.'
    },
    {
        title: 'Record Yields Reported from Natural Farming in Punjab',
        date: 'January 20, 2026',
        category: 'Success Story',
        image: '🎯',
        summary: 'Farmers in Punjab report wheat yields matching chemical farming while reducing costs by 40%. Study shows improved soil health and water retention.'
    },
    {
        title: 'Free Training Programs Launched in Rural Areas',
        date: 'January 12, 2026',
        category: 'Training',
        image: '📚',
        summary: 'Mobile training units to visit villages across India, offering free 3-day Natural Farming courses in local languages. Registration now open.'
    }
];

const upcomingEvents = [
    {
        title: 'State-Level Natural Farming Workshop',
        date: 'February 15-17, 2026',
        location: 'Bangalore, Karnataka',
        type: 'Workshop',
        capacity: '500 Participants',
        topics: ['Advanced techniques', 'Input preparation', 'Marketing strategies', 'Success stories'],
        registration: 'Open'
    },
    {
        title: 'Women Farmers Natural Farming Training',
        date: 'February 22-23, 2026',
        location: 'Jaipur, Rajasthan',
        type: 'Training',
        capacity: '200 Participants',
        topics: ['Kitchen gardens', 'Nutrition', 'Value addition', 'Self-help groups'],
        registration: 'Open'
    },
    {
        title: 'Natural Farming Expo & Farmers\' Meet',
        date: 'March 5-7, 2026',
        location: 'Hyderabad, Telangana',
        type: 'Exhibition',
        capacity: '2000+ Participants',
        topics: ['Equipment showcase', 'Product stalls', 'Live demonstrations', 'Expert talks'],
        registration: 'Open'
    },
    {
        title: 'Online Webinar: Climate-Resilient Farming',
        date: 'February 10, 2026',
        location: 'Online (Zoom)',
        type: 'Webinar',
        capacity: 'Unlimited',
        topics: ['Climate adaptation', 'Drought management', 'Water conservation', 'Q&A session'],
        registration: 'Open'
    }
];

const pastWorkshops = [
    {
        title: 'National Natural Farming Conclave 2025',
        date: 'December 2025',
        location: 'New Delhi',
        participants: '1500+',
        image: '/assets/home/potrait.jpg',
        highlights: 'Three-day event featuring 50+ expert speakers, farmer testimonials, and policy discussions'
    },
    {
        title: 'Regional Training - South India',
        date: 'November 2025',
        location: 'Chennai, Tamil Nadu',
        participants: '800+',
        image: '/assets/home/potrait.jpg',
        highlights: 'Hands-on training in local languages, field visits to successful Natural Farms'
    },
    {
        title: 'Youth in Agriculture Summit',
        date: 'October 2025',
        location: 'Pune, Maharashtra',
        participants: '600+',
        image: '/assets/home/potrait.jpg',
        highlights: 'Focused on engaging young farmers with modern Natural Farming techniques and entrepreneurship'
    }
];

const collaborations = [
    {
        organization: 'NABARD',
        type: 'Financial Institution',
        partnership: 'Providing low-interest loans and subsidies for Natural Farming adoption',
        logo: '🏦'
    },
    {
        organization: 'Ministry of Agriculture',
        type: 'Government',
        partnership: 'Policy support, training programs, and farmer incentives nationwide',
        logo: '🏛️'
    },
    {
        organization: 'ICAR (Indian Council of Agricultural Research)',
        type: 'Research',
        partnership: 'Scientific validation, research studies, and technical guidance',
        logo: '🔬'
    },
    {
        organization: 'State Agriculture Departments',
        type: 'Government',
        partnership: 'Implementation at state level, resource centers, and field support',
        logo: '🗺️'
    },
    {
        organization: 'NGO Partners',
        type: 'Civil Society',
        partnership: 'Grassroots mobilization, community training, and farmer networks',
        logo: '🤝'
    },
    {
        organization: 'Agricultural Universities',
        type: 'Education',
        partnership: 'Research, curriculum development, and student engagement programs',
        logo: '🎓'
    }
];

const NewsWorkshops: React.FC = () => {
    const newsSection = useScrollReveal<HTMLElement>();
    const eventsSection = useScrollReveal<HTMLElement>();
    const pastSection = useScrollReveal<HTMLElement>();
    const collabSection = useScrollReveal<HTMLElement>();

    return (
        <PageLayout>
            <PageHero
                title="News & Workshops"
                subtitle="Stay updated with the latest developments, upcoming training events, and collaborative initiatives in Natural Farming across India."
            />

            {/* Latest Announcements */}
            <section ref={newsSection.ref} className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className={`text-3xl md:text-4xl font-bold text-[#0b7a3b] mb-12 text-center transition-all duration-700 ${newsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`}>
                        Latest Announcements
                    </h2>

                    <div className="space-y-6">
                        {announcements.map((news, index) => (
                            <div
                                key={index}
                                className={`card-premium bg-gradient-to-r from-[#ebf3ee] to-white rounded-[26px] p-8 md:p-10 shadow-lg transition-all duration-500 ${newsSection.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                                    }`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="flex-shrink-0 w-20 h-20 bg-[#006738] rounded-xl flex items-center justify-center text-5xl">
                                        {news.image}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center gap-3 mb-3">
                                            <span className="bg-[#FF8A1F] text-white px-4 py-1 rounded-full text-sm font-semibold">
                                                {news.category}
                                            </span>
                                            <span className="text-sm text-slate-500">{news.date}</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-[#0b7a3b] mb-3">
                                            {news.title}
                                        </h3>
                                        <p className="text-slate-700 leading-relaxed">
                                            {news.summary}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Upcoming Events */}
            <section ref={eventsSection.ref} className="py-16 px-4 bg-[#ebf3ee]">
                <div className="max-w-6xl mx-auto">
                    <h2 className={`text-3xl md:text-4xl font-bold text-[#0b7a3b] mb-6 text-center transition-all duration-700 ${eventsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`}>
                        Upcoming Training Events
                    </h2>

                    <p className={`text-center text-slate-700 mb-12 max-w-4xl mx-auto transition-all duration-700 ${eventsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`} style={{ transitionDelay: '100ms' }}>
                        Register for upcoming workshops, training programs, and events across India.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {upcomingEvents.map((event, index) => (
                            <div
                                key={index}
                                className={`card-premium bg-white rounded-[26px] p-8 shadow-lg transition-all duration-500 ${eventsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                    }`}
                                style={{ transitionDelay: `${index * 100 + 200}ms` }}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-[#0b7a3b] mb-2">
                                            {event.title}
                                        </h3>
                                        <div className="space-y-1 text-sm text-slate-600">
                                            <p>📅 {event.date}</p>
                                            <p>📍 {event.location}</p>
                                            <p>👥 {event.capacity}</p>
                                        </div>
                                    </div>
                                    <span className="bg-[#7fb43a] text-white px-3 py-1 rounded-full text-xs font-semibold">
                                        {event.type}
                                    </span>
                                </div>

                                <div className="bg-[#ebf3ee] rounded-xl p-4 mb-6">
                                    <p className="font-semibold text-[#0b7a3b] mb-2">Topics:</p>
                                    <ul className="grid grid-cols-2 gap-2">
                                        {event.topics.map((topic, i) => (
                                            <li key={i} className="text-sm text-slate-700 flex items-center gap-1">
                                                <span className="text-[#FF8A1F]">✓</span>
                                                {topic}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex items-center gap-3">
                                    <button className="flex-1 bg-[#006738] hover:bg-[#0b7a3b] text-white px-6 py-3 rounded-full font-semibold btn-premium transition-all">
                                        Register Now
                                    </button>
                                    <button className="px-6 py-3 border-2 border-[#006738] text-[#006738] rounded-full font-semibold hover:bg-[#006738] hover:text-white transition-all">
                                        Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Past Workshops Gallery */}
            <section ref={pastSection.ref} className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className={`text-3xl md:text-4xl font-bold text-[#0b7a3b] mb-6 text-center transition-all duration-700 ${pastSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`}>
                        Past Workshop Gallery
                    </h2>

                    <p className={`text-center text-slate-700 mb-12 max-w-4xl mx-auto transition-all duration-700 ${pastSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`} style={{ transitionDelay: '100ms' }}>
                        Highlights from our recent workshops and events across India.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {pastWorkshops.map((workshop, index) => (
                            <div
                                key={index}
                                className={`group card-premium overflow-hidden rounded-[26px] shadow-lg transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl ${pastSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                    }`}
                                style={{ transitionDelay: `${index * 100 + 200}ms` }}
                            >
                                <div className="relative overflow-hidden rounded-t-[26px]">
                                    <img
                                        src={workshop.image}
                                        alt={workshop.title}
                                        className="
                                        w-full 
                                        h-[320px] 
                                        md:h-[280px]
                                        object-cover 
                                        object-top
                                        transition-transform duration-[1500ms]
                                        group-hover:scale-[1.05]
                                        "
                                    />
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-3 text-sm text-slate-600">
                                        <span>{workshop.date}</span>
                                        <span>•</span>
                                        <span>{workshop.participants} farmers</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-[#0b7a3b] mb-2">
                                        {workshop.title}
                                    </h3>

                                    <p className="text-sm text-slate-600 mb-3">
                                        📍 {workshop.location}
                                    </p>

                                    <p className="text-sm text-slate-700 leading-relaxed">
                                        {workshop.highlights}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Government & NGO Collaborations */}
            <section ref={collabSection.ref} className="py-16 px-4 bg-gradient-to-br from-[#006738] to-[#0b7a3b]">
                <div className="max-w-6xl mx-auto">
                    <h2 className={`text-3xl md:text-4xl font-bold text-white mb-6 text-center transition-all duration-700 ${collabSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`}>
                        Government & NGO Collaborations
                    </h2>

                    <p className={`text-center text-white/90 text-lg mb-12 max-w-4xl mx-auto transition-all duration-700 ${collabSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`} style={{ transitionDelay: '100ms' }}>
                        Working together with government institutions, research organizations, and NGOs to scale Natural Farming across India.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {collaborations.map((collab, index) => (
                            <div
                                key={index}
                                className={`bg-white/10 backdrop-blur-sm rounded-[26px] p-8 border border-white/20 transition-all duration-500 ${collabSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                    }`}
                                style={{ transitionDelay: `${index * 100 + 200}ms` }}
                            >
                                <div className="text-5xl mb-4">{collab.logo}</div>
                                <h3 className="text-xl font-bold text-white mb-2">
                                    {collab.organization}
                                </h3>
                                <p className="text-[#FF8A1F] text-sm font-semibold mb-3">
                                    {collab.type}
                                </p>
                                <p className="text-white/90 text-sm leading-relaxed">
                                    {collab.partnership}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact for Event Organization */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-[#ebf3ee] rounded-[36px] p-12">
                        <h2 className="text-3xl font-bold text-[#0b7a3b] mb-4">
                            Want to Organize a Workshop in Your Region?
                        </h2>
                        <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
                            We support community-led initiatives. Contact us to organize Natural Farming workshops, training programs, or awareness campaigns in your area.
                        </p>
                        <button className="bg-[#FF8A1F] hover:bg-[#e67912] text-white px-12 py-4 rounded-full font-semibold text-lg btn-premium hover:shadow-lg transition-all">
                            Contact Us
                        </button>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
};

export default NewsWorkshops;
