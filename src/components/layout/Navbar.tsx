"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Process', href: '#process' },
        { name: 'Work', href: '#work' },
        { name: 'Team', href: '#team' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${scrolled
                ? 'bg-bpcc-cream/95 backdrop-blur-md shadow-sm py-3 border-b border-bpcc-navy/5'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">


                <a href="#" className="flex items-center gap-3 group">

                    <div className="relative w-10 h-10">
                        <img
                            src={scrolled ? "/bpcclogo.png" : "/bpcclogo_light.png"}
                            alt="BPCC Logo"
                            className="w-full h-full object-contain transition-opacity duration-300"
                        />
                    </div>

                    <div className="flex flex-col">
                        <span className={`font-serif text-lg font-bold leading-none tracking-tight transition-colors duration-500 ${scrolled ? 'text-bpcc-navy' : 'text-white'
                            }`}>
                            BITS Pilani
                        </span>
                        <span className="text-[10px] font-bold text-bpcc-gold tracking-[0.2em] uppercase">
                            Consulting Club
                        </span>
                    </div>
                </a>


                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-bold uppercase tracking-widest transition-colors duration-300 relative group ${scrolled
                                ? 'text-bpcc-navy/70 hover:text-[#F1C18A]'
                                : 'text-white/80 hover:text-[#F1C18A]'
                                }`}
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#F1C18A] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}

                    <a
                        href="mailto:excom@bits-consulting.club"
                        className={`px-6 py-2 text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg ${scrolled
                            ? 'bg-bpcc-navy text-white hover:bg-[#F1C18A]' // Dark button on Light bg
                            : 'bg-white text-bpcc-navy hover:bg-[#F1C18A] hover:text-white' // Light button on Dark bg
                            }`}
                    >
                        Contact Us
                        <ArrowUpRight className="w-3 h-3" />
                    </a>
                </div>


                <button
                    className={`md:hidden transition-colors duration-300 ${scrolled ? 'text-bpcc-navy' : 'text-white'
                        }`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            <div className={`md:hidden absolute top-full left-0 w-full bg-bpcc-cream border-t border-bpcc-navy/5 shadow-xl transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <div className="flex flex-col p-6 gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-bpcc-navy font-serif text-xl hover:text-[#F1C18A] hover:pl-2 transition-all"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="h-[1px] bg-bpcc-navy/10 my-2"></div>
                    <a
                        href="mailto:excom@bits-consulting.club"
                        className="text-[#F1C18A] font-bold uppercase tracking-widest text-sm flex items-center gap-2"
                    >
                        Get in Touch <ArrowUpRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;