import { motion } from 'framer-motion';
import { 
    Lightbulb, 
    Handshake, 
    Sprout, 
    Briefcase, 
    Target, 
    AlertTriangle, 
    ArrowRight 
} from 'lucide-react';

const WhyCalabar = () => {
    const solutions = [
        { icon: Lightbulb, title: 'Free Digital Skills Training', desc: 'Comprehensive programs for youth empowerment', color: 'text-white' },
        { icon: Handshake, title: 'Structured Mentorship', desc: 'Connecting talent with industry leaders', color: 'text-white' },
        { icon: Sprout, title: 'Talent Incubation', desc: 'Nurturing the next generation of innovators', color: 'text-white' },
        { icon: Briefcase, title: 'Employment Pipelines', desc: 'Direct pathways to career opportunities', color: 'text-white' },
    ];

    return (
        <section id="why-calabar" className="pt-10 py-14 bg-slate-50 relative overflow-hidden">
            <div className="container-wide">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    
                    {/* Left: Problem & Urgency */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 border border-orange-200 bg-orange-50 text-orange-700 rounded-full px-4 py-1.5 mb-8 text-sm font-bold tracking-wide uppercase">
                            <AlertTriangle size={16} /> The Challenge
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-brand-navy tracking-tight leading-[1.1]">
                            Why Calabar? <br />
                            <span className="text-slate-400">Why Now?</span>
                        </h2>
                        
                        <div className="space-y-8 text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                            <p>
                                Calabar, the capital of Cross River State, is a city with a rich cultural heritage, youthful energy, and immense untapped potential. However, like many regions in Nigeria, it faces <strong className="text-brand-navy">high youth unemployment, underemployment, and limited exposure to the digital economy.</strong>
                            </p>
                            
                            <p>
                                Despite a rapidly growing tech industry across the country, many young people in Calabar are still disconnected from the tools, resources, and knowledge needed to thrive in tech-driven careers. <strong className="text-brand-navy">Menial jobs remain a default option for many.</strong>
                            </p>
                        </div>
                        
                        <div className="mt-10 pt-10 border-t border-slate-200">
                             <div className="flex items-baseline gap-2">
                                <span className="text-5xl font-bold text-brand-blue tracking-tighter">5000+</span>
                                <span className="text-lg font-bold text-slate-500 uppercase tracking-tight">Youth Ready to Work</span>
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
                                <div className="h-12 w-12 bg-white rounded-2xl flex items-center justify-center text-brand-navy shadow-sm">
                                    <Target size={24} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white tracking-tight">Our Mission</h3>
                                    <p className="text-blue-200 text-sm font-semibold">Building the future, today.</p>
                                </div>
                            </div>
                            
                            <p className="text-xl  text-white mb-5 leading-relaxed font-light">
                                "To educate, inspire, and empower young people to transition into high-demand technology careers — while advocating for a <strong className="text-brand-blue font-semibold">government-backed tech hub</strong>."
                            </p>

                            <div className="grid gap-4">
                                {solutions.map((item, idx) => (
                                    <div key={idx} className="group flex items-start gap-4 md:p-4 rounded-2xl hover:bg-white/5 transition-all duration-300">
                                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform text-brand-navy">
                                            <item.icon size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1 text-lg">{item.title}</h4>
                                            <p className="text-slate-400 text-sm leading-relaxed font-medium">{item.desc}</p>
                                        </div>
                                        <ArrowRight size={20} className="ml-auto hidden md:flex text-white/20 group-hover:text-white/50 group-hover:translate-x-1 transition-all" />
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
