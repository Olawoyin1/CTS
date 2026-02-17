import { motion } from 'framer-motion';

const WhyCalabar = () => {
    const solutions = [
        { emoji: '💡', title: 'Free Digital Skills Training', desc: 'Comprehensive programs for youth empowerment' },
        { emoji: '🤝', title: 'Structured Mentorship', desc: 'Connecting talent with industry leaders' },
        { emoji: '🌱', title: 'Talent Incubation', desc: 'Nurturing the next generation of innovators' },
        { emoji: '💼', title: 'Employment Pipelines', desc: 'Direct pathways to career opportunities' },
    ];

    return (
        <section id="why-calabar" className="section-padding bg-slate-50 relative overflow-hidden">
            <div className="container-wide">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    
                    {/* Left: Problem & Urgency */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block border border-orange-200 bg-orange-50 text-orange-700 rounded-full px-4 py-1.5 mb-8 text-sm font-semibold tracking-wide uppercase">
                            ⚠️ The Challenge
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-brand-navy tracking-tight leading-[1.1]">
                            Why Calabar? <br />
                            <span className="text-slate-400">Why Now?</span>
                        </h2>
                        
                        <div className="space-y-8 text-lg md:text-xl text-slate-600 leading-relaxed font-light">
                            <p>
                                Calabar is rich in culture, youth energy, and untapped potential. Yet <strong className="text-brand-navy font-semibold">youth unemployment and limited digital exposure remain critical challenges.</strong>
                            </p>
                            
                            <p>
                                The time to act is now. Cross River State has the talent, the energy, and the vision — what's needed is infrastructure, opportunity, and intentional investment in our digital future.
                            </p>
                        </div>
                        
                        <div className="mt-10 pt-10 border-t border-slate-200">
                             <div className="flex items-baseline gap-2">
                                <span className="text-5xl font-bold text-brand-blue tracking-tighter">500+</span>
                                <span className="text-lg font-medium text-slate-500">Youth Ready to Work</span>
                             </div>
                        </div>
                    </motion.div>

                    {/* Right: Mission & Solution */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-brand-navy p-8 md:p-12 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden"
                    >
                        {/* Decorative background blob */}
                         <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="h-12 w-12 bg-white/10 rounded-2xl flex items-center justify-center text-2xl backdrop-blur-sm">🎯</div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white tracking-tight">Our Mission</h3>
                                    <p className="text-blue-200 text-sm font-medium">Building the future, today.</p>
                                </div>
                            </div>
                            
                            <p className="text-xl md:text-2xl text-white mb-12 leading-relaxed font-light">
                                "To educate, inspire, and empower young people to transition into high-demand technology careers — while advocating for a <strong className="text-brand-blue font-semibold">government-backed tech hub</strong>."
                            </p>

                            <div className="grid gap-6">
                                {solutions.map((item, idx) => (
                                    <div key={idx} className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors duration-300">
                                        <div className="mt-1 text-2xl group-hover:scale-110 transition-transform">{item.emoji}</div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1 text-lg">{item.title}</h4>
                                            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhyCalabar;
