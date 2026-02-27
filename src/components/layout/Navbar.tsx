"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // CHANGED: We now switch MUCH earlier (at 100px scroll)
            // This prevents the "white text on white background" clash
            setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setIsMobileMenuOpen(false);
        }
    };

    const navLinks = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Our Work', id: 'work' },
        { name: 'Process', id: 'process' },
        { name: 'Team', id: 'contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${isScrolled
                ? 'bg-bpcc-cream shadow-md py-4' // Solid Cream Mode
                : 'bg-transparent py-6'          // Transparent Mode
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                {/* LOGO */}
                <Link href="/" onClick={(e) => scrollToSection(e, 'home')} className="group relative z-50">
                    <span className={`font-serif text-2xl font-bold tracking-tight transition-colors duration-300 ${
                        // Text turns Navy immediately when scrolled
                        isScrolled || isMobileMenuOpen ? 'text-bpcc-navy' : 'text-white'
                        }`}>
                        BPCC<span className="text-bpcc-gold">.</span>
                    </span>
                </Link>

                {/* DESKTOP LINKS */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={`#${link.id}`}
                            onClick={(e) => scrollToSection(e, link.id)}
                            className={`text-sm font-sans font-medium tracking-wide transition-colors duration-300 hover:text-bpcc-gold ${
                                // Text turns Navy immediately when scrolled
                                isScrolled ? 'text-bpcc-navy' : 'text-white/90'
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}

                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className={`px-6 py-2 rounded-sm text-sm font-semibold transition-all duration-300 border ${isScrolled
                            ? 'border-bpcc-navy text-bpcc-navy hover:bg-bpcc-navy hover:text-white'
                            : 'border-white text-white hover:bg-white hover:text-bpcc-navy'
                            }`}
                    >
                        Partner With Us
                    </button>
                </div>

                {/* MOBILE MENU ICON */}
                <button
                    className="md:hidden relative z-50 p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className="text-bpcc-navy w-6 h-6" />
                    ) : (
                        <Menu className={`w-6 h-6 transition-colors duration-300 ${isScrolled ? 'text-bpcc-navy' : 'text-white'}`} />
                    )}
                </button>
            </div>

            {/* MOBILE FULLSCREEN MENU */}
            <div
                className={`fixed inset-0 bg-bpcc-cream z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
                    }`}
            >
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={`#${link.id}`}
                        onClick={(e) => scrollToSection(e, link.id)}
                        className="text-bpcc-navy font-serif text-3xl font-medium hover:text-bpcc-gold"
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;