import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const Team = () => {
    return (
        <section id="team" className="py-24 bg-bpcc-cream border-t border-bpcc-navy/5">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-20">
                    <div className="inline-block border-b border-[#F1C18A] pb-1 mb-4">
                        <h4 className="text-[#F1C18A] font-sans font-bold tracking-[0.2em] text-xs uppercase">
                            Our Leadership
                        </h4>
                    </div>
                    <h2 className="font-serif text-4xl md:text-5xl text-bpcc-navy mb-6">
                        Meet the Partners
                    </h2>
                    <p className="text-bpcc-navy/60 max-w-2xl mx-auto font-serif text-lg italic">
                        The strategists and operators driving impact at BITS Pilani Consulting Club.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
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
                            className="group bg-[#FDFBF7] p-8 border border-bpcc-navy/10 
                                       hover:border-[#F1C18A] transition-colors duration-500 
                                       flex flex-col items-center text-center relative overflow-hidden
                                       shadow-sm hover:shadow-md"
                        >
                            <div className="absolute inset-0 bg-bpcc-navy/0 group-hover:bg-bpcc-navy/[0.02] transition-colors duration-500 pointer-events-none"></div>

                            <div className="w-32 h-32 mb-6 relative">
                                <div className="absolute inset-0 rounded-full border border-bpcc-navy/10 group-hover:border-[#F1C18A] transition-colors duration-500 scale-100 group-hover:scale-105"></div>

                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full rounded-full object-cover filter grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 p-1.5"
                                />
                            </div>

                            <h3 className="text-2xl font-serif text-bpcc-navy mb-2 group-hover:text-[#F1C18A] transition-colors duration-300">
                                {member.name}
                            </h3>

                            <p className="text-[10px] font-bold text-bpcc-navy/40 uppercase tracking-[0.15em] mb-6">
                                {member.role}
                            </p>

                            <p className="text-sm text-bpcc-navy/70 font-serif italic leading-relaxed mb-8 px-4">
                                "{member.bio}"
                            </p>

                            <div className="mt-auto flex gap-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                                <a href={member.linkedin} className="text-bpcc-navy hover:text-[#F1C18A] transition-colors">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href={member.email} className="text-bpcc-navy hover:text-[#F1C18A] transition-colors">
                                    <Mail className="w-5 h-5" />
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