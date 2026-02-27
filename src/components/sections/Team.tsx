import React from 'react';
import { Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const Team = () => {
    return (
        <section id="team" className="py-24 bg-bpcc-cream border-t border-bpcc-navy/5">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">
                    <h4 className="text-bpcc-gold font-sans font-bold tracking-widest text-sm uppercase mb-3">
                        Our Leadership
                    </h4>
                    <h2 className="font-serif text-4xl md:text-5xl text-bpcc-navy mb-6">
                        Meet the Team
                    </h2>
                    <p className="text-bpcc-grey max-w-2xl mx-auto">
                        The dedicated minds driving strategy, operations, and impact at BPCC.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        {
                            name: "Baibhab Mishra",
                            role: "President",
                            bio: "Leads strategic vision and industry partnerships to drive growth.",
                            image: "/api/placeholder/400/400",
                            linkedin: "#",
                            email: "mailto:president@bits-consulting.club"
                        },
                        {
                            name: "Varan Bhatia",
                            role: "Vice President",
                            bio: "Oversees daily operations and ensures seamless execution of all initiatives.",
                            image: "/api/placeholder/400/400",
                            linkedin: "#",
                            email: "mailto:vp@bits-consulting.club"
                        },
                        {
                            name: "Yashvardhan Parihar",
                            role: "Director of Outreach",
                            bio: "Builds bridges with corporate firms and alumni to create opportunities.",
                            image: "/api/placeholder/400/400",
                            linkedin: "#",
                            email: "mailto:outreach@bits-consulting.club"
                        },
                        {
                            name: "Jeevan Mohapatra",
                            role: "CaseQuesta Coordinator",
                            bio: "Spearheads the flagship case competition and quality assurance.",
                            image: "/api/placeholder/400/400",
                            linkedin: "#",
                            email: "mailto:casequesta@bits-consulting.club"
                        },
                        {
                            name: "Deepinder Singh Pruthi",
                            role: "Case Hackathon Coordinator",
                            bio: "Merges tech and strategy to deliver high-impact hackathon experiences.",
                            image: "/api/placeholder/400/400",
                            linkedin: "#",
                            email: "mailto:hackathon@bits-consulting.club"
                        },
                        {
                            name: "Anushka Purwar",
                            role: "Director of Brand Building",
                            bio: "Crafts the BPCC narrative and manages digital presence across platforms.",
                            image: "/api/placeholder/400/400",
                            linkedin: "#",
                            email: "mailto:branding@bits-consulting.club"
                        }
                    ].map((member, index) => (
                        <div
                            key={index}
                            className="group bg-[#FDFBF7] p-6 rounded-xl border border-bpcc-navy/5 
                           shadow-[0_4px_20px_-2px_rgba(11,17,32,0.05)] 
                           hover:border-[#F1C18A]/30 
                           hover:shadow-[0_20px_40px_-12px_rgba(11,17,32,0.15)] 
                           hover:-translate-y-1
                           transition-all duration-300 flex flex-col items-center text-center"
                        >

                            <div className="w-28 h-28 mb-5 relative">
                                <div className="absolute inset-0 rounded-full border border-bpcc-navy/5 group-hover:border-[#F1C18A] transition-colors duration-500"></div>
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 p-1"
                                />
                            </div>

                            <h3 className="text-xl font-serif text-bpcc-navy mb-1 group-hover:text-[#F1C18A] transition-colors">
                                {member.name}
                            </h3>

                            <p className="text-[10px] font-bold text-bpcc-gold uppercase tracking-widest mb-3">
                                {member.role}
                            </p>

                            <p className="text-sm text-bpcc-navy/60 leading-relaxed font-medium mb-5 min-h-[40px] px-2">
                                {member.bio}
                            </p>

                            <div className="mt-auto flex gap-3">
                                <a href={member.linkedin} className="w-8 h-8 rounded-full bg-[#F1C18A]/10 flex items-center justify-center text-bpcc-navy hover:bg-[#F1C18A] hover:text-white transition-colors">
                                    <Linkedin className="w-3.5 h-3.5" />
                                </a>
                                <a href={member.email} className="w-8 h-8 rounded-full bg-[#F1C18A]/10 flex items-center justify-center text-bpcc-navy hover:bg-[#F1C18A] hover:text-white transition-colors">
                                    <Mail className="w-3.5 h-3.5" />
                                </a>
                            </div>

                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default Team;