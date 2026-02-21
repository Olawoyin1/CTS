import { motion } from 'framer-motion';
import { Cpu, Palette, Code2, Rocket, Landmark } from 'lucide-react';

const Tracks = () => {
    const tracks = [
        {
            icon: Cpu,
            title: 'Emerging Tech (AI & ML)',
            desc: 'Explore artificial intelligence, machine learning, and future technologies shaping Africa\'s economic landscape.',
            bg: 'bg-blue-50',
            color: 'text-brand-navy',
        },
        {
            icon: Palette,
            title: 'The Creative Economy',
            desc: 'Where technology meets culture. A spotlight on creators, storytellers, and platforms redefining Africa\'s digital exports.',
            bg: 'bg-purple-50',
            color: 'text-brand-navy',
        },
        {
            icon: Code2,
            title: 'Entering Tech',
            desc: 'A practical pathway for beginners, career switchers, and job seekers breaking into tech.',
            bg: 'bg-emerald-50',
            color: 'text-brand-navy',
        },
        {
            icon: Rocket,
            title: 'Startup Festival',
            desc: 'A celebration of Africa’s most promising startups, where founders pitch, share lessons, and connect with investors and enablers.',
            bg: 'bg-rose-50',
            color: 'text-brand-navy',
        },
        {
            icon: Landmark,
            title: 'Government & Policy',
            desc: 'Building an enabling environment for innovation through discussions on infrastructure, policy, and digital governance.',
            bg: 'bg-slate-50',
            color: 'text-brand-navy',
        },
    ];

    return (
        <section id="tracks" className="section-padding bg-white">
            <div className="container-wide">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="heading-lg mb-3"
                    >
                        Content Tracks
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-body-lg"
                    >
                        Specialized tracks designed to meet you where you are and take you where you need to be.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tracks.map((track, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15 }}
                            className={`group p-10 rounded-3xl ${track.bg} hover:-translate-y-2 transition-all duration-300 border border-transparent hover:shadow-xl hover:border-slate-100/50`}
                        >
                            <div className={`w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-300 shadow-sm ${track.color}`}>
                                <track.icon size={32} strokeWidth={1.5} />
                            </div>
                            
                            <h3 className="text-2xl font-bold text-brand-navy mb-4 tracking-tight">
                                {track.title}
                            </h3>
                            
                            <p className="text-slate-600 leading-relaxed font-medium">
                                {track.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tracks;
