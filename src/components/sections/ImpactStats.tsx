import React from 'react';

const stats = [
    {
        number: "1000+",
        label: "Consulting Alumni",
        sub: "Leading top firms globally"
    },
    {
        number: "15+",
        label: "Unicorn Founders",
        sub: "Innovating across industries"
    },
    {
        number: "60+",
        label: "Years of Legacy",
        sub: "Excellence since inception"
    },
    {
        number: "150k+",
        label: "Alumni Network",
        sub: "Strong global connection"
    },
];

const ImpactStats = () => {
    return (
        <section className="py-20 bg-bpcc-cream border-b border-bpcc-navy/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x-0 md:divide-x divide-bpcc-navy/10">
                    {stats.map((stat, index) => (
                        <div key={index} className="group px-4">
                            <h3 className="font-serif text-5xl md:text-6xl font-bold text-bpcc-navy mb-3 group-hover:scale-105 transition-transform duration-300">
                                {stat.number}
                            </h3>
                            <p className="font-sans text-xs font-bold text-bpcc-gold uppercase tracking-[0.2em] mb-2">
                                {stat.label}
                            </p>
                            <p className="font-sans text-xs text-bpcc-grey hidden md:block opacity-80">
                                {stat.sub}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImpactStats;