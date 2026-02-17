import { motion } from 'framer-motion';

const WhatToExpect = () => {
    const events = [
        {
            emoji: '🎤',
            title: 'Main Flagship Summit',
            desc: 'Keynote speeches, career transition workshops, innovation showcases, exhibitions, and real-life tech success stories.',
        },
        {
            emoji: '🤝',
            title: 'Stakeholder Mixer',
            desc: 'A high-level networking platform connecting policymakers, investors, founders, and ecosystem leaders.',
        },
        {
            emoji: '👩‍💻',
            title: 'Women in Tech (WITECH)',
            desc: 'In collaboration with government and private sector leaders to promote female inclusion and leadership.',
        },
        {
            emoji: '🎓',
            title: 'University Tours',
            desc: 'Campus engagements introducing students to digital career pathways through interactive sessions.',
        },
        {
            emoji: '🚀',
            title: 'Startup Festival',
            desc: 'A platform for founders to pitch, connect with investors, and showcase solutions shaping the future.',
        },
        {
            emoji: '🏛️',
            title: 'Policy Forum',
            desc: 'Discussions around infrastructure, digital governance, and creating an enabling environment for innovation.',
        },
    ];

    return (
        <section id="what-to-expect" className="section-padding bg-slate-50">
            <div className="container-wide">
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="heading-lg mb-6"
                    >
                        What to Expect
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-body-lg"
                    >
                        A multi-event experience designed to create lasting impact across every stakeholder in the ecosystem.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-8 rounded-3xl border border-transparent hover:border-slate-200 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="text-5xl mb-6">{event.emoji}</div>
                            
                            <h3 className="text-xl font-bold text-brand-navy mb-3 tracking-tight">
                                {event.title}
                            </h3>
                            
                            <p className="text-slate-600 leading-relaxed font-medium">
                                {event.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatToExpect;
