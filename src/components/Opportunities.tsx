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
                {/* Integrated Vision Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 mx-4 p-1 rounded-[2.5rem] bg-gradient-to-r from-brand-navy via-brand-blue to-brand-navy group"
                >
                    <div className="bg-brand-navy rounded-[2.4rem] p-8 overflow-hidden relative">
                        {/* Animated background lines */}
                        <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                        </div>

                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
                            <div className="max-w-2xl">
                                <h3 className="text-2xl md:text-4xl font-black text-white mb-4 tracking-tight">
                                    Building the <span className="text-brand-blue italic">Innovation Corridor</span> of Africa.
                                </h3>
                                <p className="text-slate-400 text-lg font-medium italic">
                                    "Our mission is to democratize technology access and create a sustainable path for the next generation of African digital leaders."
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
                                <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
                                    <p className="text-2xl font-black text-white">#CTS26</p>
                                    <p className="text-[10px] text-brand-blue font-bold uppercase tracking-widest mt-1">Official Hash</p>
                                </div>
                                <div className="p-6 rounded-3xl bg-brand-blue border border-brand-blue text-white shadow-lg shadow-brand-blue/30">
                                    <p className="text-2xl font-black">2026</p>
                                    <p className="text-[10px] text-white/70 font-bold uppercase tracking-widest mt-1">The Year</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            
        </section>
    );
};

export default Opportunities;
