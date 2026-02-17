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
        <section id="speakers" className="section-padding bg-slate-50 relative overflow-hidden">
            <div className="container-wide relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-3 py-1 bg-blue-100 text-brand-blue text-xs font-bold rounded-full mb-4 uppercase tracking-wider"
                    >
                        🌍 World-Class Lineup
                    </motion.div>
                    <h2 className="heading-lg mb-6">Confirmed & Expected Speakers</h2>
                    <p className="text-body-lg">
                        Learn from industry leaders, policymakers, and ecosystem shapers driving Africa's digital transformation.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16 h-auto">
                    {speakers.map((speaker, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative"
                        >
                            <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-4 bg-slate-200">
                                <img 
                                    src={speaker.image} 
                                    alt={speaker.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent opacity-60 group-hover:opacity-50 transition-opacity duration-300" />
                                
                                <div className="absolute bottom-4 left-4 right-4">
                                     <h3 className="text-xl font-bold text-white mb-1 leading-tight">{speaker.name}</h3>
                                    <p className="text-sm text-blue-100 font-medium">{speaker.role}</p>
                                    <p className="text-xs text-slate-300 mt-1 uppercase tracking-wide">{speaker.company}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                    
                    {/* Unique "More" Card */}
                    <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ delay: 0.5 }}
                         className="rounded-2xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center p-8 text-center hover:border-brand-blue hover:bg-blue-50 transition-all duration-300 cursor-pointer min-h-[300px]"
                    >
                        <div className="text-5xl mb-4 text-slate-400">
                            ➕
                        </div>
                        <h3 className="text-lg font-bold text-brand-navy">And Many More</h3>
                        <p className="text-slate-500 text-sm mt-2">Government officials, industry experts, and surprise guests.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Speakers;
