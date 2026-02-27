import React from 'react';

const Testimonials = () => {
    return (
        <section className="py-20 bg-bpcc-cream text-white">
            <div className="max-w-7xl mx-auto px-6">
                <h4 className="text-bpcc-gold font-sans font-bold tracking-widest text-sm uppercase mb-12 text-center">
                    Client Testimonials
                </h4>

                <div className="grid md:grid-cols-2 gap-12 md:gap-24">
                    {/* Testimonial 1: Infosys */}
                    <div>
                        <p className="font-serif text-2xl leading-relaxed opacity-90 mb-6">
                            "The depth of research, clarity of thinking, and practical orientation made the recommendations highly relevant for strengthening how large-scale CSR programs can be monitored." [cite: 80]
                        </p>
                        <div>
                            <p className="font-bold text-bpcc-gold">Captain S. Shanti</p>
                            <p className="text-sm opacity-60">Senior Program Director, Infosys Foundation [cite: 81]</p>
                        </div>
                    </div>

                    {/* Testimonial 2: VISIT */}
                    <div>
                        <p className="font-serif text-2xl leading-relaxed opacity-90 mb-6">
                            "BPCC helped us bridge a critical resource gap by turning complex market data into a clear strategy. It positioned VISIT as a credible industry authority from day one." [cite: 87-88]
                        </p>
                        <div>
                            <p className="font-bold text-bpcc-gold">Anurag Prassad</p>
                            <p className="text-sm opacity-60">Co-Founder, VISIT Health [cite: 90-92]</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;