"use client";

import React from 'react';

const Hero = () => {
    return (

        <section id="home" className="relative h-[85vh] w-full flex items-center justify-center bg-bpcc-navy overflow-hidden">

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-bpcc-gold/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto -mt-20">
                <p className="text-bpcc-gold font-sans font-semibold tracking-[0.2em] text-sm uppercase mb-6 animate-fade-in">
                    BITS Pilani Consulting Club
                </p>

                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-8">
                    Strategize. <br />
                    <span className="italic text-gray-400">Solve.</span>{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-bpcc-gold to-yellow-500">
                        Succeed.
                    </span>
                </h1>

                <p className="font-sans text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                    Bridging the gap between academic excellence and strategic impact.
                    We solve complex problems for the world's leading organizations.
                </p>

                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                    <button
                        onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-white text-bpcc-navy px-8 py-4 font-semibold rounded-sm hover:bg-gray-100 transition-all min-w-[180px]"
                    >
                        View Our Work
                    </button>
                    <button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="border border-gray-600 text-white px-8 py-4 font-semibold rounded-sm hover:border-bpcc-gold hover:text-bpcc-gold transition-all min-w-[180px]"
                    >
                        Contact Us
                    </button>
                </div>
            </div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white to-transparent opacity-50"></div>
            </div>
        </section>
    );
};

export default Hero;