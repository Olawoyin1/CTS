import { motion } from 'framer-motion';
import { 
UserRound } from 'lucide-react';

interface Speaker {
    name: string;
    role: string;
    company: string;
    featured?: boolean;
}

const Speakers = () => {
    const speakers: Speaker[] = [
        { name: 'Peace Itimi', role: 'Host', company: 'Founders Connect', featured: true },
        { name: 'Iyinoluwa Aboyeji', role: 'Founding Partner', company: 'Future Africa', featured: true },
        { name: 'Odunayo Eweniyi', role: 'Co-Founder & COO', company: 'PiggyVest' },
        { name: 'Fisayo Fosudo', role: 'Tech Creator', company: 'YouTube' },
    ];

    return (
        <section id="speakers" className="section-padding bg-white relative overflow-hidden">
             {/* Subtle pattern */}
             <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 skew-x-12 pointer-events-none" />

            <div className="container-wide relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <motion.h2 
                             initial={{ opacity: 0, y: 10 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             viewport={{ once: true }}
                             transition={{ delay: 0.1 }}
                             className="text-3xl md:text-6xl font-bold text-brand-navy tracking-tight leading-tight"
                        >
                         <span className="text-brand-blue">Speakers</span>
                        </motion.h2>
                    </div>
                    <motion.p 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-600 max-w-md"
                    >
                        Learn from industry leaders, policymakers, and ecosystem shapers driving Africa's digital transformation.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 h-auto">
                    {speakers.map((speaker, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative"
                        >
                            <div className="relative overflow-hidden rounded-[2rem] bg-white border border-slate-100 md:aspect-[3/4] aspect-[1/1] flex items-center justify-center group-hover:bg-slate-50 transition-all duration-500 hover:shadow-xl shadow-sm">
                                <UserRound className="w-24 h-24 text-slate-200 group-hover:text-brand-navy transition-colors duration-500" />
                                
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                                
                                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                     <h3 className="text-2xl font-bold text-white mb-1 leading-none">{speaker.name}</h3>
                                    <p className="text-blue-300 font-medium text-sm mb-1">{speaker.role}</p>
                                    <p className="text-xs text-white/60 uppercase tracking-widest">{speaker.company}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Speakers;
