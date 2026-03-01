"use client";

import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => setLoaded(true), 200);
    }, []);


    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        let frame = 0;
        const centerX = width / 2;
        const centerY = height / 2;
        const maxRadius = Math.max(width, height);

        const numRays = 24;
        const finalTilt = Math.PI / 8;

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            frame++;


            const introDuration = 100;
            const unfurlStart = 60;

            const ease = (t: number) => t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

            const introProgress = Math.min(frame / 60, 1);
            const easedIntro = ease(introProgress);
            const currentLen = maxRadius * easedIntro;


            let currentRotation = 0;
            if (frame > unfurlStart) {
                const rotProgress = Math.min((frame - unfurlStart) / 100, 1);
                currentRotation = ease(rotProgress) * finalTilt;
            }

            ctx.save();
            ctx.translate(centerX, centerY);
            ctx.rotate(currentRotation);

            const drawRay = (angle: number, length: number, alpha: number) => {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(241, 193, 138, ${alpha})`;
                ctx.lineWidth = 1;
                ctx.moveTo(0, 0);
                ctx.lineTo(Math.cos(angle) * length, Math.sin(angle) * length);
                ctx.stroke();
            };


            if (introProgress > 0) {
                drawRay(0, currentLen, 0.3);
                drawRay(Math.PI, currentLen, 0.3);
                drawRay(Math.PI / 2, currentLen, 0.3);
                drawRay(-Math.PI / 2, currentLen, 0.3);
            }

            if (frame > unfurlStart) {
                const unfurlProgress = Math.min((frame - unfurlStart) / 80, 1);
                const easedUnfurl = ease(unfurlProgress);

                for (let i = 0; i < numRays; i++) {
                    const angleStep = (Math.PI * 2) / numRays;
                    const targetAngle = i * angleStep;


                    const alpha = 0.08 * easedUnfurl;

                    if (alpha > 0.01) {
                        drawRay(targetAngle, maxRadius, alpha);
                    }
                }
            }


            if (frame > 100) {
                const pulseTime = Date.now() / 8000;

                for (let i = 0; i < numRays; i++) {
                    const angle = (Math.PI * 2 / numRays) * i;

                    const offset = (i % 4) * 0.25;
                    const t = (pulseTime + offset) % 1;

                    const pulseDist = maxRadius * t;
                    const pulseX = Math.cos(angle) * pulseDist;
                    const pulseY = Math.sin(angle) * pulseDist;

                    const pulseAlpha = 0.4 * Math.sin(t * Math.PI);

                    if (t < 1) {
                        ctx.beginPath();
                        ctx.fillStyle = `rgba(241, 193, 138, ${pulseAlpha})`;
                        ctx.arc(pulseX, pulseY, 1.5, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }
            }

            if (introProgress > 0.5) {
                ctx.beginPath();
                ctx.fillStyle = '#F1C18A';
                ctx.arc(0, 0, 3, 0, Math.PI * 2);
                ctx.fill();
            }

            ctx.restore();
            requestAnimationFrame(animate);
        };

        animate();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center bg-bpcc-navy overflow-hidden pt-20">


            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0 pointer-events-none"
            />


            <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay z-0">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <filter id="noise">
                        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#noise)" />
                </svg>
            </div>


            <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 h-full">


                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="h-[1px] bg-[#F1C18A] w-12"></div>
                        <span className="text-[#F1C18A] font-bold tracking-widest text-xs uppercase">
                            Est. 20XX • BITS Pilani Consulting Club
                        </span>
                    </div>

                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[0.9] mb-8 drop-shadow-2xl">
                        Strategize.<br />
                        <span className="text-white/50 italic">Solve.</span><br />
                        <span className="text-[#F1C18A]">Succeed.</span>
                    </h1>

                    <p className="text-white/80 text-lg md:text-xl max-w-md leading-relaxed mb-10 border-l border-[#F1C18A]/30 pl-6 backdrop-blur-sm">
                        Bridging the gap between academic excellence and strategic impact. We solve complex problems for the world's leading organizations.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a href="#work" className="px-8 py-4 bg-white text-bpcc-navy font-bold uppercase tracking-widest text-xs hover:bg-[#F1C18A] hover:text-white transition-colors duration-300 shadow-lg shadow-white/5">
                            View Our Work
                        </a>
                        <a href="#contact" className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-xs hover:border-[#F1C18A] hover:text-[#F1C18A] transition-colors duration-300 backdrop-blur-sm">
                            Contact Us
                        </a>
                    </div>
                </div>


                <div className="relative h-screen w-full flex items-end justify-center lg:justify-end pointer-events-none overflow-visible">
                    <div
                        className="absolute bottom-[-5%] right-[-10%] z-10"
                        style={{
                            maskImage: 'linear-gradient(to top, transparent 0%, black 15%, black 100%)',
                            WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 15%, black 100%)'
                        }}
                    >
                        <img
                            src="/clocktower.png"
                            alt="BITS Pilani Clock Tower"

                            className="max-w-none w-[90vw] md:w-[60vw] lg:w-[40vw] h-auto object-contain drop-shadow-2xl brightness-90 contrast-110"
                        />
                    </div>
                </div>

            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/20">
                <ArrowDown className="w-6 h-6" />
            </div>

        </section>
    );
};

export default Hero;