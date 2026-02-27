import React from 'react';
import { HeartHandshake, Globe2, Target, Users, BarChart3 } from 'lucide-react';

const Projects = () => {
    return (
        /* 1. Reduced Section Padding (py-24 -> py-12) to fit in viewport */
        <section id="work" className="py-12 bg-bpcc-cream border-t border-bpcc-navy/5">
            <div className="max-w-7xl mx-auto px-6">

                {/* HEADER: Reduced bottom margin (mb-16 -> mb-10) */}
                <div className="mb-10 md:flex justify-between items-end">
                    <div className="max-w-2xl">
                        <h4 className="text-bpcc-gold font-sans font-bold tracking-widest text-sm uppercase mb-2">
                            Capstone Projects
                        </h4>
                        <h2 className="font-serif text-3xl md:text-4xl text-bpcc-navy">
                            Driving Real-World Impact
                        </h2>
                    </div>
                    <div className="hidden md:block">
                        <p className="text-bpcc-grey text-right text-xs uppercase tracking-wider font-bold">
                            Selected engagements from our portfolio
                        </p>
                    </div>
                </div>

                {/* PROJECTS GRID: Tighter Gap (gap-6 -> gap-5) */}
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
                    {[
                        {
                            client: "Infosys Foundation",
                            type: "Social Impact",
                            icon: <HeartHandshake className="w-5 h-5" />,
                            challenge: "Needed monitoring for 500k+ beneficiaries across 15+ NGOs.",
                            solution: "Developed tracking SOPs and real-time evaluation dashboards.",
                            impact: "Boosted CSR decision-making speed significantly."
                        },
                        {
                            client: "VISIT Health",
                            type: "Event Strategy",
                            icon: <Globe2 className="w-5 h-5" />,
                            challenge: "Lacked data-backed view of Employee Benefits for a major conclave.",
                            solution: "Synthesized market trends into evidence-based narratives.",
                            impact: "Established VISIT as an industry authority."
                        },
                        {
                            client: "NuPort",
                            type: "Market Expansion",
                            icon: <Target className="w-5 h-5" />,
                            challenge: "Required insights to shape GTM launch and scale operations.",
                            solution: "Conducted analysis and built a decision-ready strategic framework.",
                            impact: "Aligned strategy with actionable clarity for growth."
                        },
                        {
                            client: "Smile Foundation",
                            type: "Ops Strategy",
                            icon: <Users className="w-5 h-5" />,
                            challenge: "Challenges in tracking educational outcomes for 'Shiksha Na Ruke'.",
                            solution: "Created a digital-first monitoring framework for student retention.",
                            impact: "Enabled data-driven resource allocation."
                        }
                    ].map((project, index) => (
                        /* Card Style: Reduced Padding (p-8 -> p-6) */
                        <div
                            key={index}
                            className="group bg-[#FDFBF7] p-6 rounded-r-xl border-l-4 border-[#F1C18A] shadow-sm hover:shadow-[0_10px_40px_-10px_rgba(11,17,32,0.1)] transition-all duration-300 relative overflow-hidden"
                        >
                            {/* Header: Icon + Type (Reduced bottom margin mb-6 -> mb-3) */}
                            <div className="flex justify-between items-center mb-3">
                                <div className="w-10 h-10 bg-[#F1C18A]/10 rounded-full flex items-center justify-center text-bpcc-navy shadow-sm border border-[#F1C18A]/20 group-hover:bg-[#F1C18A] group-hover:text-white transition-colors duration-300">
                                    {project.icon}
                                </div>
                                <span className="text-[9px] font-bold text-bpcc-gold uppercase tracking-widest border border-bpcc-gold/20 px-2 py-1 rounded-full bg-bpcc-gold/5">
                                    {project.type}
                                </span>
                            </div>

                            {/* Client Name (Reduced text size and margin) */}
                            <h3 className="text-xl font-serif text-bpcc-navy mb-4 font-bold">
                                {project.client}
                            </h3>

                            {/* Content: Tighter spacing (space-y-4 -> space-y-3) */}
                            <div className="space-y-3 relative z-10">
                                <div>
                                    <h4 className="text-[10px] font-bold text-bpcc-grey uppercase tracking-wider mb-1 flex items-center gap-2">
                                        <div className="w-1 h-1 bg-red-400 rounded-full"></div> Challenge
                                    </h4>
                                    <p className="text-xs text-bpcc-navy/80 leading-relaxed">
                                        {project.challenge}
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-[10px] font-bold text-bpcc-grey uppercase tracking-wider mb-1 flex items-center gap-2">
                                        <div className="w-1 h-1 bg-blue-400 rounded-full"></div> Solution
                                    </h4>
                                    <p className="text-xs text-bpcc-navy/80 leading-relaxed">
                                        {project.solution}
                                    </p>
                                </div>

                                <div className="pt-3 border-t border-bpcc-navy/5 mt-3">
                                    <h4 className="text-[10px] font-bold text-[#F1C18A] uppercase tracking-wider mb-1 flex items-center gap-2">
                                        <BarChart3 className="w-3 h-3" /> Impact
                                    </h4>
                                    <p className="text-xs font-medium text-bpcc-navy italic">
                                        "{project.impact}"
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

export default Projects;