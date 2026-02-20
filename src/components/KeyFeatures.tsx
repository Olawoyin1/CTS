import { motion } from 'framer-motion';
import { 
    Users, 
    Mic2, 
    Briefcase, 
    Handshake, 
    GraduationCap, 
    Building2
} from 'lucide-react';

const KeyFeatures = () => {
    const mainFeatures = [
        {
            title: 'Flagship Summit Experience',
            desc: '1-Day Flagship Tech Summit: Featuring expert keynote speakers, career transition workshops, innovation showcases, exhibitions, live demos, and competitive hackathons.',
            icon: Mic2,
            category: 'Core Event'
        },
        {
            title: 'Talent Development & Support',
            desc: 'Post-Summit Mentorship & Career Support Program: Continuous mentorship, coaching, career guidance, internship pathways, and job placement support for participants beyond the summit.',
            icon: Briefcase,
            category: 'Growth'
        },
        {
            title: 'Strategic Networking & Collaboration',
            desc: 'High-Level Stakeholder & Investment Mixer: A curated networking forum bringing together tech leaders, policymakers, government officials, investors, development partners, and ecosystem builders to foster strategic collaboration and partnerships.',
            icon: Handshake,
            category: 'Partnership'
        },
    ];

    const secondaryFeatures = [
        {
            title: 'Digital Skills Scholarship Program',
            desc: 'Scholarships for the Top 100 high-performing participants, enabling access to certified digital skills training and advanced learning programs.',
            icon: GraduationCap,
        },
        {
            title: 'Women in Tech Leadership Mixer',
            desc: 'A special empowerment forum in collaboration with the Office of the Wife of the Governor and private sector leaders, promoting female participation, leadership, and inclusion in technology and innovation.',
            icon: Users,
        },
        {
            title: 'PPP Tech Hub Initiative',
            desc: 'A structured public-private partnership model for the establishment and launch of a government-backed, sustainable tech hub for learning, innovation, incubation, and mentorship.',
            icon: Building2,
        },
    ];

    return (
        <section id="features" className="py-24 bg-white relative overflow-hidden">
            <div className="container-wide relative z-10">
                <div className="max-w-3xl mb-20">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue/10 text-brand-blue text-[10px] font-bold rounded-full mb-6 uppercase tracking-[0.2em]"
                    >
                        🚀 Our Roadmap
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-brand-navy tracking-tighter leading-tight"
                    >
                        Key Features of <br />
                        <span className="text-brand-blue">the Project</span>
                    </motion.h2>
                </div>

                {/* Main Features Grid */}
                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    {mainFeatures.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group p-8 md:p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-brand-navy mb-8 group-hover:bg-brand-navy group-hover:text-white transition-all duration-300 shadow-sm">
                                <feature.icon size={28} strokeWidth={1.5} />
                            </div>
                            <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest block mb-4">
                                {feature.category}
                            </span>
                            <h3 className="text-2xl font-black text-brand-navy mb-4 leading-tight group-hover:text-brand-blue transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-slate-600 font-medium leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Secondary Features Grid */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {secondaryFeatures.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + (idx * 0.1) }}
                            className="group p-8 rounded-[2rem] border border-slate-100 hover:border-brand-blue/20 hover:bg-blue-50/30 transition-all duration-300"
                        >
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-brand-navy mb-8 group-hover:bg-brand-navy group-hover:text-white transition-all duration-300 flex-shrink-0">
                                    <feature.icon size={22} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-brand-navy mb-3 leading-tight group-hover:text-brand-blue transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-slate-500 font-medium leading-relaxed italic">
                                        {feature.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KeyFeatures;
