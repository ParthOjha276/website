import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-24 bg-bpcc-cream border-t border-bpcc-navy/5">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">
                    <h4 className="text-bpcc-gold font-sans font-bold tracking-widest text-sm uppercase mb-3">
                        Client Impact
                    </h4>
                    <h2 className="font-serif text-4xl md:text-5xl text-bpcc-navy mb-6">
                        From Our Clients
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {[
                        {
                            quote: "Working with the BITS Pilani Consulting Club on this engagement brought a fresh, structured perspective to how we think about impact monitoring. The depth of research, clarity of thinking, and practical orientation made the recommendations highly relevant for strengthening how large-scale CSR programs can be monitored and evaluated going forward.",
                            author: "Captain S. Shanti",
                            role: "Senior Program Director",
                            company: "Infosys Foundation"
                        },
                        {
                            quote: "BPCC helped us bridge a critical resource gap by turning complex, fragmented market data into a clear, evidence-based strategy. Their work didn't just inform our thinking, it positioned VISIT as a credible industry authority from day one.",
                            author: "Anurag Prassad",
                            role: "Co-Founder",
                            company: "Visit Health"
                        }
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="group bg-white p-10 rounded-2xl border border-bpcc-navy/5 shadow-sm hover:shadow-[0_20px_50px_-12px_rgba(11,17,32,0.1)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col"
                        >
                            <Quote className="absolute top-6 right-8 w-24 h-24 text-[#F1C18A]/10 rotate-180 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[190deg]" />

                            <div className="relative z-10 mb-8 flex-grow">
                                <p className="font-serif text-lg md:text-xl text-bpcc-navy italic leading-relaxed opacity-90">
                                    "{item.quote}"
                                </p>
                            </div>

                            <div className="relative z-10 flex items-center gap-4 pt-6 border-t border-bpcc-navy/5 mt-auto">
                                <div className="flex flex-col">
                                    <h4 className="text-sm font-bold text-bpcc-navy uppercase tracking-wide">
                                        {item.author}
                                    </h4>
                                    <p className="text-xs text-bpcc-gold font-bold mt-1">
                                        {item.role}, {item.company}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonials;