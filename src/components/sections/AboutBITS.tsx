import React from 'react';

const AboutBITS = () => {
    return (
        <section className="py-16 bg-bpcc-cream border-t border-black-100">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <div className="mb-10">
                    <h4 className="text-bpcc-grey font-sans font-bold tracking-widest text-xs uppercase mb-2">
                        Backed By A Legacy Of Excellence
                    </h4>
                    <h2 className="font-serif text-3xl text-bpcc-navy">
                        BITS Pilani
                    </h2>
                    <p className="max-w-2xl mx-auto mt-4 text-bpcc-grey">
                        A globally acclaimed institution with a legacy of over 60 years, consistently nurturing exceptional talent who lead at the world's top firms.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { label: "Years of Legacy", value: "60+" },
                        { label: "Unicorn Founders", value: "15+" },
                        { label: "Alumni Network", value: "150k+" },
                        { label: "Consulting Alumni", value: "1000+" }
                    ].map((stat, i) => (
                        <div key={i}>
                            <h3 className="text-3xl font-serif font-bold text-bpcc-navy">{stat.value}</h3>
                            <p className="text-[10px] uppercase font-bold text-bpcc-gold tracking-wider">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutBITS;