import React from 'react';
import {
    Rocket,
    Box,
    Settings,
    TrendingUp,
    Search,
    BarChart3,
    CheckCircle2,
    Brain,
    Lightbulb,
    Trophy,
    ChevronRight
} from 'lucide-react';

const Services = () => {
    return (
        <section id="process" className="bg-bpcc-cream">


            <div className="py-24 px-6 max-w-7xl mx-auto">
                <div className="mb-20">
                    <h4 className="text-bpcc-gold font-sans font-bold tracking-widest text-sm uppercase mb-3">
                        Our Expertise
                    </h4>
                    <h2 className="font-serif text-4xl md:text-5xl text-bpcc-navy max-w-2xl">
                        Tailored Consulting Solutions
                    </h2>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-bpcc-navy/10">
                    {[
                        {
                            num: "01",
                            title: "Market Entry",
                            desc: "Break into new segments, geographies, or verticals with tailored research and impact-driven strategy."
                        },
                        {
                            num: "02",
                            title: "Product Consulting",
                            desc: "Turn user insights into actionable feedback, helping you prioritize the right features, flows, and fixes."
                        },
                        {
                            num: "03",
                            title: "Tailored Services",
                            desc: "From strategy to execution, we customize our approach to fit your stage, sector, and specific challenges."
                        },
                        {
                            num: "04",
                            title: "Company Strategy",
                            desc: "We work at the foundational level to assess your business model and market positioning to sharpen direction."
                        },
                        {
                            num: "05",
                            title: "Research",
                            desc: "Uncover nuanced insights specific to your business and industry beyond basic market trends."
                        },
                        {
                            num: "06",
                            title: "Market Strategies",
                            desc: "Channels, pricing, and activation playbooks created to build scalable go-to-market strategies with your team."
                        }
                    ].map((service, index) => (
                        <div
                            key={index}
                            className="group relative p-10 border-r border-b border-bpcc-navy/10 
                           bg-transparent hover:bg-bpcc-navy 
                           transition-colors duration-500 cursor-default 
                           flex flex-col justify-between min-h-[280px]"
                        >
                            <div className="mb-8">
                                <span className="font-serif text-4xl text-bpcc-navy/10 group-hover:text-[#F1C18A] transition-colors duration-500">
                                    {service.num}
                                </span>
                            </div>

                            <div>
                                <h3 className="font-serif text-2xl text-bpcc-navy mb-3 group-hover:text-[#F1C18A] transition-colors duration-300">
                                    {service.title}
                                </h3>

                                <p className="text-sm text-bpcc-navy/60 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                                    {service.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* philosphy   */}

            <div className="py-24 bg-bpcc-cream border-t border-bpcc-navy/5">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="font-serif text-4xl md:text-5xl text-bpcc-navy mb-4">
                            Our Working Principle
                        </h2>
                        <p className="text-bpcc-grey">Understand. Solve. Succeed.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                        <div className="hidden md:block absolute top-12 left-[12%] w-[76%] h-[3px] bg-bpcc-gold/30 -z-0"></div>

                        {[
                            {
                                icon: <Brain className="w-10 h-10" />,
                                num: "01",
                                title: "Understanding Your Needs",
                                desc: "Deep analysis of your problems and needs is conducted so our ideas work best for you."
                            },
                            {
                                icon: <BarChart3 className="w-10 h-10" />,
                                num: "02",
                                title: "Data Driven Analysis",
                                desc: "Thorough research and data analysis ensure our solutions bring the maximum impact."
                            },
                            {
                                icon: <Lightbulb className="w-10 h-10" />,
                                num: "03",
                                title: "Strategic Problem Solving",
                                desc: "We turn insights into focused strategies aligning with your vision for impact and growth."
                            },
                            {
                                icon: <Trophy className="w-10 h-10" />,
                                num: "04",
                                title: "Deliver & Iterate",
                                desc: "We ensure smooth execution and continuous improvement, delivering the best results."
                            }
                        ].map((item, index) => (
                            <div key={index} className="relative z-10 text-center group">
                                <div className="w-24 h-24 mx-auto bg-bpcc-cream border-4 border-[#F1C18A] rounded-full flex items-center justify-center text-bpcc-navy mb-6 shadow-sm group-hover:bg-[#F1C18A] group-hover:text-white transition-all duration-300">
                                    {item.icon}
                                </div>
                                <div className="flex items-center justify-center gap-2 mb-3">
                                    <span className="text-[#F1C18A] font-bold font-serif text-xl opacity-60">{item.num}.</span>
                                    <h3 className="font-serif text-xl text-bpcc-navy font-bold">{item.title}</h3>
                                </div>
                                <p className="text-bpcc-grey text-sm leading-relaxed max-w-[250px] mx-auto">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* process  */}


            <div className="py-24 px-6 max-w-7xl mx-auto border-t border-bpcc-navy/5">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-3xl md:text-4xl text-bpcc-navy">
                        What Our Process Looks Like
                    </h2>
                    <p className="text-bpcc-grey mt-4">From kickoff to measurable outcomes</p>
                </div>

                <div className="relative mb-16">
                    <div className="hidden md:block absolute top-0 left-[10%] w-[80%] h-[4px] bg-bpcc-navy rounded-full"></div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pt-8">
                        {[
                            { step: "01", title: "Kickoff & Alignment", desc: "Alignment" },
                            { step: "02", title: "Deep-Dive & Validation", desc: "Validation" },
                            { step: "03", title: "Solution Building", desc: "Building" },
                            { step: "04", title: "Delivery & Handover", desc: "Delivery" },
                            { step: "05", title: "Ongoing Support & Review", desc: "Review" }
                        ].map((item, i) => (
                            <div key={i} className="relative flex flex-col items-center text-center group">
                                <div className="hidden md:block absolute -top-10 w-1 h-10 bg-bpcc-navy group-hover:bg-[#F1C18A] transition-colors"></div>
                                <div className="hidden md:block absolute -top-[2.7rem] w-4 h-4 bg-[#F1C18A] rounded-full border-2 border-bpcc-cream z-10"></div>


                                <div className="bg-[#F1C18A] w-full p-6 rounded-xl relative min-h-[180px] flex flex-col justify-center transition-all duration-500 ease-out 
                                        shadow-[0_10px_40px_-10px_rgba(11,17,32,0.2)] 
                                        group-hover:-translate-y-2 
                                        group-hover:shadow-[0_20px_50px_-12px_rgba(241,193,138,0.9)]">

                                    <div className="hidden md:block absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[12px] border-b-[#F1C18A]"></div>
                                    <span className="block text-4xl font-serif font-bold text-bpcc-navy/20 mb-1">{item.step}</span>
                                    <h3 className="font-serif text-lg font-bold text-bpcc-navy leading-tight">{item.title}</h3>
                                    <p className="text-[10px] font-bold text-bpcc-navy/60 uppercase tracking-widest mt-2">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* where u   */}

                <div className="relative mt-12 pt-16 border-t border-bpcc-navy/5">
                    <h3 className="font-serif text-3xl text-bpcc-navy mb-12 text-center">Where You Come In</h3>

                    <div className="max-w-6xl mx-auto bg-[#F1C18A]/5 border border-[#F1C18A]/30 rounded-2xl shadow-sm overflow-hidden backdrop-blur-sm">
                        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#F1C18A]/20">
                            {[
                                {
                                    title: "Set Direction",
                                    phase: "Phase A",
                                    items: ["Share context, constraints, and goals", "Define what success looks like", "Align on priorities"]
                                },
                                {
                                    title: "Enable Progress",
                                    phase: "Phase B",
                                    items: ["Provide access to data & stakeholders", "Join short, structured check-ins", "Pressure-test insights & options"]
                                },
                                {
                                    title: "Decide & Champion",
                                    phase: "Phase C",
                                    items: ["Make key decisions at milestones", "Align cross-functional teams", "Sponsor execution & outcomes"]
                                }
                            ].map((col, idx) => (
                                <div key={idx} className="relative p-10 group hover:bg-[#F1C18A]/10 transition-colors duration-500">
                                    <span className="inline-block text-[10px] font-bold text-bpcc-gold uppercase tracking-[0.2em] mb-6 bg-[#F1C18A]/20 px-3 py-1 rounded-full">
                                        {col.phase}
                                    </span>
                                    <h4 className="text-bpcc-navy font-serif text-2xl font-bold mb-8 group-hover:text-bpcc-gold transition-colors">{col.title}</h4>
                                    <ul className="space-y-4">
                                        {col.items.map((li, liIdx) => (
                                            <li key={liIdx} className="flex gap-4 items-start">
                                                <div className="mt-1.5 w-1 h-1 rounded-full bg-bpcc-gold shrink-0 ring-4 ring-bpcc-gold/10" />
                                                <span className="text-sm text-bpcc-navy/70 leading-relaxed font-medium">{li}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {idx < 2 && (
                                        <div className="hidden md:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10 w-8 h-8 items-center justify-center">
                                            <ChevronRight className="w-5 h-5 text-[#F1C18A]/40" strokeWidth={3} />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-16 text-center max-w-2xl mx-auto px-6">
                        <p className="text-bpcc-navy font-serif text-xl italic tracking-wide mb-4">
                            "You focus on decisions. We take care of everything else."
                        </p>
                        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#F1C18A] to-transparent opacity-60"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
