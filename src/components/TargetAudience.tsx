import { motion } from 'framer-motion';
import { 
    Landmark, 
    Rocket, 
    Building2,
    Palette,
    GraduationCap
} from 'lucide-react';
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoCheckmarkOutline } from "react-icons/io5";

const TargetAudience = () => {
    const categories = [
        {
            title: 'Public Sector & Governance',
            icon: Landmark,
            items: [
                'Government Functionaries & Public Servants',
                'Government Agencies & Parastatals',
                'Industry Leaders & Policymakers'
            ],
            color: 'bg-blue-50',
            iconColor: 'text-blue-600'
        },
        {
            title: 'Entrepreneurship & Innovation',
            icon: Rocket,
            items: [
                'Entrepreneurs & SME Owners',
                'Startup Founders & Innovators',
                'Tech Enthusiasts & Aspiring Innovators'
            ],
            color: 'bg-emerald-50',
            iconColor: 'text-emerald-600'
        },
        {
            title: 'Private Sector & Business Leadership',
            icon: Building2,
            items: [
                'Private Sector Leaders & Executives',
                'Employers, Hiring Managers & HR Professionals',
                'Tech Founders, Startup Leaders & Business Owners'
            ],
            color: 'bg-purple-50',
            iconColor: 'text-purple-600'
        },
        {
            title: 'Workforce & Career Professionals',
            icon: HiOutlineUserGroup,
            items: [
                'Career Professionals & Young Workers',
                'Freelancers & Gig Workers',
                'Corps (NYSC) Members',
                'Job Seekers, Career Switchers & Underemployed Graduates'
            ],
            color: 'bg-amber-50',
            iconColor: 'text-amber-600'
        },
        {
            title: 'Creative Economy & Digital Media',
            icon: Palette,
            items: [
                'Content Creators, Influencers & Digital Creatives'
            ],
            color: 'bg-rose-50',
            iconColor: 'text-rose-600'
        },
        {
            title: 'Community & Faith-Based Organizations',
            icon: HiOutlineUserGroup,
            items: [
                'Church Organizations & Community Groups'
            ],
            color: 'bg-cyan-50',
            iconColor: 'text-cyan-600'
        },
        {
            title: 'Education & Academic Institutions',
            icon: GraduationCap,
            items: [
                'University & Polytechnic Students',
                'Recent Secondary School Graduates',
                'Lecturers, Teachers & Academic Staff',
                'Universities, Polytechnics & Training Institutions'
            ],
            color: 'bg-indigo-50',
            iconColor: 'text-indigo-600'
        },
    ];

    return (
        <section id="audience" className="section-padding bg-white relative overflow-hidden">
            <div className="container-wide relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 bg-brand-navy/5 text-brand-navy text-[10px] font-bold rounded-full mb-6 uppercase tracking-[0.2em]"
                    >
                        👥 Who is this for?
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-brand-navy tracking-tighter mb-3"
                    >
                        Target <span className="text-brand-blue">Audience</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-500 font-medium"
                    >
                        Connecting the brightest minds and most influential stakeholders in the ecosystem.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {categories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group p-8 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500"
                        >
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className={`w-16 h-16 rounded-2xl ${category.color} ${category.iconColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                    <category.icon size={32} strokeWidth={1.5} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-black text-brand-navy mb-6 group-hover:text-brand-blue transition-colors">
                                        {category.title}
                                    </h3>
                                    <div className="space-y-4">
                                        {category.items.map((item, i) => (
                                            <div key={i} className="flex items-start gap-3">
                                                <IoCheckmarkOutline size={18} className="text-brand-navy mt-1 flex-shrink-0 opacity-20 group-hover:opacity-100 transition-opacity" />
                                                <p className="text-slate-600 font-semibold leading-snug">
                                                    {item}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TargetAudience;
