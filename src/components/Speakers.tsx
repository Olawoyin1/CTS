import { motion } from 'framer-motion';

interface Speaker {
    name: string;
    role: string;
    company: string;
    image: string;
    featured?: boolean;
}

const Speakers = () => {
    const speakers: Speaker[] = [
        { name: 'Peace Itimi', role: 'Host', company: 'Founders Connect', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=500', featured: true },
        { name: 'Iyinoluwa Aboyeji', role: 'Founding Partner', company: 'Future Africa', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=500', featured: true },
        { name: 'Odunayo Eweniyi', role: 'Co-Founder & COO', company: 'PiggyVest', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=500' },
        { name: 'Fisayo Fosudo', role: 'Tech Creator', company: 'YouTube', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400&h=500' },
        { name: 'Startups & Investors', role: 'Ecosystem Leaders', company: 'Global', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=500' },
        { name: 'Policymakers', role: 'Government', company: 'Cross River State', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=500' },
    ];

    return (
        <section id="speakers" className="py-24 bg-white relative overflow-hidden">
             {/* Subtle pattern */}
             <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 skew-x-12 pointer-events-none" />

            <div className="container-wide relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-3 py-1 bg-brand-navy text-white text-xs font-bold rounded-full mb-6 uppercase tracking-wider"
                        >
                            🌍 World-Class Lineup
                        </motion.div>
                        <motion.h2 
                             initial={{ opacity: 0, y: 10 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             viewport={{ once: true }}
                             transition={{ delay: 0.1 }}
                             className="text-4xl md:text-6xl font-bold text-brand-navy tracking-tight leading-[1.1]"
                        >
                            Confirmed & <br /> <span className="text-brand-blue">Expected Speakers</span>
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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16 h-auto">
                    {speakers.map((speaker, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative"
                        >
                            <div className="relative overflow-hidden rounded-[2rem] bg-slate-100 aspect-[3/4]">
                                <img 
                                    src={speaker.image} 
                                    alt={speaker.name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                                
                                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                     <h3 className="text-2xl font-bold text-white mb-1 leading-none">{speaker.name}</h3>
                                    <p className="text-blue-300 font-medium text-sm mb-1">{speaker.role}</p>
                                    <p className="text-xs text-white/60 uppercase tracking-widest">{speaker.company}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                    
                    {/* Unique "More" Card with Modern Style */}
                    <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ delay: 0.5 }}
                         className="rounded-[2rem] bg-brand-navy flex flex-col items-center justify-center p-8 text-center hover:bg-brand-blue transition-colors duration-300 cursor-pointer min-h-[400px] text-white group"
                    >
                        <div className="h-16 w-16 rounded-full border border-white/20 flex items-center justify-center text-3xl mb-6 group-hover:bg-white group-hover:text-brand-blue transition-all">
                            ➕
                        </div>
                        <h3 className="text-2xl font-bold mb-2">And Many More</h3>
                        <p className="text-white/60 text-sm max-w-[200px]">Government officials, industry experts, and surprise guests.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Speakers;
