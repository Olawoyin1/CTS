import { motion } from 'framer-motion';
import { GraduationCap, Handshake, Sprout, Trophy } from 'lucide-react';

const Opportunities = () => {
    const programs = [
        {
            icon: GraduationCap,
            title: 'Digital Skills Scholarships',
            desc: 'Top 100 participants will receive full scholarships for advanced digital skills training.',
            color: 'text-brand-navy',
            bg: 'bg-slate-50'
        },
        {
            icon: Handshake,
            title: 'Mentorship & Internships',
            desc: 'Post-summit mentorship & internship pathways connecting talent with employment.',
            color: 'text-brand-navy',
            bg: 'bg-slate-50'
        },
        {
            icon: Sprout,
            title: 'Startup Incubation',
            desc: 'Access to startup incubation pipelines for early-stage founders and innovators.',
            color: 'text-brand-navy',
            bg: 'bg-slate-50'
        },
        {
            icon: Trophy,
            title: 'Tech Starter Competition',
            desc: 'Pitch your idea for a chance to win seed funding and resources.',
            color: 'text-brand-navy',
            bg: 'bg-slate-50'
        },
    ];

    return (
        <section className="section-padding bg-white relative">
            <div className="container-wide">
                <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
                    <div className="md:w-1/2">
                        <motion.h2 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-bold text-brand-navy mb-6 leading-tight tracking-tight"
                        >
                            Scholarships & <br />
                            <span className="text-brand-blue">Opportunities</span>
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-slate-600 mb-8 font-medium"
                        >
                            We aren't just talking about the future; we're funding it. Access scholarships, internships, and incubation.
                        </motion.p>
                        <motion.a 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            href="#" 
                            className="inline-flex h-14 items-center justify-center rounded-full bg-brand-navy px-8 font-bold text-white transition-all duration-300 hover:bg-brand-blue hover:scale-105 active:scale-95 shadow-lg shadow-blue-100"
                        >
                            Apply for Opportunities
                        </motion.a>
                    </div>

                    <div className="md:w-1/2 grid sm:grid-cols-2 gap-6">
                        {programs.map((program, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-slate-50 p-6 rounded-3xl hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-slate-100 group"
                            >
                                <div className={`w-14 h-14 rounded-2xl ${program.bg} ${program.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <program.icon size={28} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-bold text-brand-navy mb-3">{program.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">{program.desc}</p>
                                <div className="flex items-center text-sm font-bold text-brand-navy group-hover:text-brand-blue transition-colors cursor-pointer">
                                    Learn Details <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Opportunities;
