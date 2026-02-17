import { motion } from 'framer-motion';

const Vision = () => {
    const pillars = [
        {
            emoji: '🏙️',
            title: 'Smart City Vision',
            desc: 'Positioning Calabar as a model for digital infrastructure, innovation hubs, and tech-enabled governance across Africa.',
        },
        {
            emoji: '📜',
            title: 'Policy Recommendations',
            desc: 'Actionable frameworks for digital skills integration, startup support, and technology adoption in government services.',
        },
        {
            emoji: '🤝',
            title: 'Public-Private Partnerships',
            desc: 'Collaborative models connecting government, private sector, and development partners for sustainable impact.',
        },
        {
            emoji: '🏛️',
            title: 'Government-Backed Tech Hub',
            desc: 'A permanent facility providing training, mentorship, workspace, and resources for the next generation of innovators.',
        },
    ];

    return (
        <section className="section-padding bg-white relative overflow-hidden">
            <div className="container-wide relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="heading-lg mb-6"
                    >
                        Long-Term Vision
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-body-lg"
                    >
                        This summit is the beginning of a legacy — a roadmap for transforming Cross River State into a thriving digital economy.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {pillars.map((pillar, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-brand-blue/30 shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
                        >
                            <div className="text-5xl mb-6">{pillar.emoji}</div>
                            <h3 className="text-2xl font-bold text-brand-navy mb-4 group-hover:text-brand-blue transition-colors">{pillar.title}</h3>
                            <p className="text-slate-600 leading-relaxed text-lg font-medium">{pillar.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Vision;
