import { motion } from 'framer-motion';

const Movement = () => {
    const stats = [
        { emoji: '👥', label: '5,000+ Attendees', desc: 'Young people, founders, innovators' },
        { emoji: '📈', label: 'Exposure to Opportunity', desc: 'Government leaders & investors' },
        { emoji: '💡', label: 'Ideas to Employment', desc: 'Turning innovation into jobs' },
        { emoji: '🧩', label: 'Conversation to Infrastructure', desc: 'Creating sustainable pathways' },
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden border-b border-slate-100">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-bold mb-6 text-brand-navy tracking-tight"
                    >
                        A Digital Awakening for Cross River State
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
                    >
                        We are bringing together young people, founders, innovators, government leaders, investors, and ecosystem builders to spark a digital revolution.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100 border-y border-slate-100 bg-white">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-10 px-3 text-center hover:bg-slate-50 transition-colors duration-300 group"
                        >
                            <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300 inline-block">
                                {stat.emoji}
                            </div>
                            <h3 className="text-lg font-bold text-brand-navy mb-3">{stat.label}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">{stat.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Movement;
