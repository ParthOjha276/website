import React from 'react';
// putting text rn , will do images later 

const companies = [
    "McKinsey & Co", "BCG", "Bain & Co", "Deloitte", "KPMG",
    "Ey-Parthenon", "J.P. Morgan", "Goldman Sachs", "BlackRock", "PwC"
];

const LogoTicker = () => {
    return (
        <section className="py-12 bg-bpcc-navy border-b border-white/10 overflow-hidden">
            <div className="flex items-center gap-8">
                <div className="pl-6 md:pl-12 min-w-fit z-10 bg-bpcc-navy pr-4 shadow-[10px_0_20px_#0B1120]">
                    <p className="text-bpcc-gold text-xs font-bold tracking-widest uppercase">
                        Our Alumni Lead At
                    </p>
                </div>

                <div className="relative flex overflow-x-hidden group w-full mask-linear-fade">
                    <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
                        {[...companies, ...companies, ...companies].map((company, index) => (
                            <span
                                key={index}
                                className="text-xl md:text-2xl font-serif text-white/40 font-bold uppercase tracking-tight hover:text-white transition-colors duration-300 cursor-default"
                            >
                                {company}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogoTicker;