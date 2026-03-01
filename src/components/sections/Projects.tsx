import React from 'react';

const Projects = () => {
    return (
        <section id="work" className="py-20 bg-bpcc-cream border-t border-bpcc-navy/5">
            <div className="max-w-7xl mx-auto px-6">

                <div className="mb-12 border-b border-bpcc-navy/10 pb-8 flex justify-between items-end">
                    <div className="max-w-xl">
                        <h4 className="text-[#F1C18A] font-sans font-bold tracking-[0.2em] text-[10px] uppercase mb-2">
                            Engagement Portfolio
                        </h4>
                        <h2 className="font-serif text-3xl text-bpcc-navy">
                            Selected Capstone Projects
                        </h2>
                    </div>
                    <p className="hidden md:block font-serif italic text-bpcc-navy/50 text-sm max-w-[240px] text-right">
                        Direct impact delivered through rigorous strategic analysis.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-bpcc-navy/10">
                    {[
                        {
                            client: "Infosys Foundation",
                            type: "Social Impact Strategy",
                            challenge: "Developing a monitoring framework for 500k+ beneficiaries across 15+ diverse NGOs.",
                            solution: "Engineered comprehensive tracking SOPs and real-time evaluation dashboards for field data.",
                            impact: "Accelerated CSR decision-making and resource allocation efficiency."
                        },
                        {
                            client: "VISIT Health",
                            type: "Market Authority",
                            challenge: "Lacked a data-backed narrative on Employee Benefits for a major industry conclave.",
                            solution: "Synthesized complex market trends into evidence-based strategic narratives for HR leaders.",
                            impact: "Positioned client as the primary industry authority in corporate healthcare."
                        },
                        {
                            client: "NuPort",
                            type: "Go-To-Market",
                            challenge: "Required granular market insights to shape GTM launch for autonomous trucking.",
                            solution: "Conducted deep-dive competitive analysis and built a decision-ready entry framework.",
                            impact: "Aligned core strategy with actionable clarity for immediate operational scale."
                        },
                        {
                            client: "Smile Foundation",
                            type: "Operational Excellence",
                            challenge: "Challenges in tracking long-term outcomes for the 'Shiksha Na Ruke' initiative.",
                            solution: "Architected a digital-first monitoring framework focused on student retention reporting.",
                            impact: "Enabled high-precision data-driven resource allocation for educational programs."
                        }
                    ].map((project, index) => (
                        <div
                            key={index}
                            className="group p-10 border-r border-b border-bpcc-navy/10 bg-transparent transition-colors duration-300"
                        >
                            <div className="flex justify-between items-center mb-8">
                                <div className="flex items-center gap-3">
                                    <span className="text-[9px] font-bold text-[#F1C18A] opacity-80 uppercase tracking-[0.2em]">
                                        {project.type}
                                    </span>
                                </div>
                                <span className="font-serif text-bpcc-navy/5 text-3xl select-none group-hover:text-[#F1C18A] transition-colors duration-300">
                                    0{index + 1}
                                </span>
                            </div>

                            <h3 className="text-2xl font-serif text-bpcc-navy mb-6 font-bold group-hover:text-[#F1C18A] transition-colors duration-300">
                                {project.client}
                            </h3>

                            <div className="space-y-6">
                                <div className="grid grid-cols-1 gap-1">
                                    <h4 className="text-[9px] font-bold text-bpcc-navy/30 uppercase tracking-widest">
                                        Challenge
                                    </h4>
                                    <p className="text-sm text-bpcc-navy/80 leading-relaxed italic font-serif">
                                        "{project.challenge}"
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 gap-1">
                                    <h4 className="text-[9px] font-bold text-bpcc-navy/30 uppercase tracking-widest">
                                        Solution
                                    </h4>
                                    <p className="text-xs text-bpcc-navy/60 leading-relaxed font-medium">
                                        {project.solution}
                                    </p>
                                </div>

                                <div className="pt-5 border-t border-bpcc-navy/5 flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#F1C18A]"></div>
                                    <span className="text-[10px] font-bold text-bpcc-navy uppercase tracking-wider">
                                        Impact: <span className="text-bpcc-navy/60">{project.impact}</span>
                                    </span>
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