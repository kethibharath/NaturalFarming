import React from "react";

const Hero: React.FC = () => {
    return (
        <>
            <style>{`
                @keyframes heroFadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
                
                @keyframes heroFadeUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .hero-fade-in {
                    animation: heroFadeIn 0.8s ease-out forwards;
                }
                
                .hero-fade-up {
                    animation: heroFadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
                    opacity: 0;
                }
                
                .hero-delay-1 {
                    animation-delay: 0.2s;
                }
                
                .hero-delay-2 {
                    animation-delay: 0.4s;
                }
                
                .hero-delay-3 {
                    animation-delay: 0.6s;
                }
                
                .hero-delay-4 {
                    animation-delay: 0.8s;
                }
            `}</style>

            <section className="hidden lg:block relative overflow-hidden">
                <div className="relative w-full">

                    {/* Background image — FULL WIDTH, NO CROP */}
                    <img
                        src="/assets/hero-md.jpg"
                        alt="Hero Background"
                        className="w-full h-auto object-contain"
                    />

                    {/* Overlay content */}
                    <div className="absolute inset-0 z-10 flex flex-col">

                        {/* Logo with fade-in animation */}
                        <div className="mx-auto w-full max-w-7xl px-4 pt-8 xl:px-12 xl:pt-10 2xl:px-20 animate-fade-in">
                            <img
                                src="/assets/logo.png"
                                alt="Natural Farming Logo"
                                className="h-36 2xl:h-48 w-auto"
                            />
                        </div>

                        {/* Text content with staggered animations */}
                        <div className="mx-auto flex w-full max-w-7xl flex-1 items-start pt-16 px-4 pt-10 xl:px-12 xl:pt-16 2xl:px-20 2xl:pt-40">
                            <div className="text-white max-w-2xl">

                                <h1 className="
                    text-[42px]
                    2xl:text-[48px]
                    font-bold
                    leading-tight
                    hero-fade-up
                    hero-delay-1
                ">
                                    Natural Farming

                                </h1>
                                <h2 className="
                    text-[36px]
                    2xl:text-[42px]
                    font-bold
                    leading-tight
                    hero-fade-up
                    hero-delay-2">
                                    Healing Soil, Farmers &amp; Future
                                </h2>

                                <h3 className="
                    mb-4
                    text-[24px]
                    2xl:text-[30px]
                    font-medium
                    opacity-95
                    hero-fade-up
                    hero-delay-3
                ">
                                    Chemical-free farming rooted in Indian wisdom
                                </h3>

                                {/* Buttons with premium animations */}
                                <div className="flex gap-5 hero-fade-up hero-delay-4">
                                    <button className="
                    rounded-full
                    bg-[#86bb40]
                    hover:bg-[#75a636]
                    px-8
                    py-3.5
                    text-base
                    font-semibold
                    text-white
                    btn-premium
                    hover:shadow-lg">
                                        Start Natural Farming
                                    </button>

                                    <button className="
                    rounded-full
                    bg-[#fe7a00]
                    hover:bg-[#e56d00]
                    px-8
                    py-3.5
                    text-base
                    font-semibold
                    text-white
                    btn-premium
                    hover:shadow-lg">
                                        Farmer Registration
                                    </button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </section>


            <section className="lg:hidden relative overflow-hidden">
                <div className="relative w-full">

                    {/* Background image — ZOOMED ON MOBILE */}
                    <img
                        src="/assets/hero-sm.jpg"
                        alt="Hero Background"
                        className="
                            w-full
                            h-[85vh]
                            object-cover
                            scale-110
                            transition-transform
                            duration-300
                        "
                    />

                    {/* Overlay content container */}
                    <div className="absolute inset-0 z-10 flex flex-col">

                        {/* Logo with fade-in */}
                        <div className="mx-auto w-full max-w-7xl px-4 pt-4 hero-fade-in">
                            <img
                                src="/assets/logo.png"
                                alt="Natural Farming Logo"
                                className="h-32 w-auto"
                            />
                        </div>

                        {/* Text content with staggered animations */}
                        <div className="mx-auto flex w-full max-w-6xl flex-3 items-start px-4 pt-40 md:pt-20">
                            <div className="text-white max-w-sm">

                                <h1 className="mb-3 text-4xl font-bold leading-tight hero-fade-up hero-delay-1">
                                    Natural Farming
                                    <br />
                                    Healing Soil, Farmers &amp; Future
                                </h1>

                                <h3 className="mb-4 text-2xl font-medium opacity-95 hero-fade-up hero-delay-2">
                                    Chemical-free farming rooted in Indian wisdom
                                </h3>

                                <div className="flex w-full gap-2 hero-fade-up hero-delay-3">
                                    <button className="flex-3 rounded-full bg-[#86bb40] hover:bg-[#75a636] px-4 py-2.5 text-sm font-semibold text-white btn-premium hover:shadow-lg">
                                        Start Natural Farming
                                    </button>

                                    <button className="flex-3 rounded-full bg-[#fe7a00] hover:bg-[#e56d00] px-4 py-2.5 text-sm font-semibold text-white btn-premium hover:shadow-lg">
                                        Farmer Registration
                                    </button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>


        </>
    );
};

export default Hero;
