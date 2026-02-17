import { motion } from 'framer-motion';

const WhoShouldAttend = () => {
    const audiences = [
        { emoji: '🎓', title: 'Students & NYSC Members', desc: 'Launch your tech career' },
        { emoji: '💼', title: 'Job Seekers & Switchers', desc: 'Transition into tech roles' },
        { emoji: '🎨', title: 'Freelancers & Creatives', desc: 'Scale your creative business' },
        { emoji: '🚀', title: 'Founders & Startups', desc: 'Build and grow your venture' },
        { emoji: '👥', title: 'Employers & HR', desc: 'Access top talent' },
        { emoji: '🏛️', title: 'Policymakers', desc: 'Shape digital policy' },
        { emoji: '📈', title: 'Investors', desc: 'Discover opportunities' },
        { emoji: '❤️', title: 'Community Groups', desc: 'Drive social impact' },
    ];

    return (
        <section id="who-should-attend" className="section-padding bg-white relative">
            <div className="container-wide relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6 text-brand-navy tracking-tight"
                    >
                        Who Should Attend?
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-xl text-slate-600"
                    >
                        This summit is designed for everyone invested in Calabar's digital future — from students to policymakers.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-100">
                    {audiences.map((audience, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="group p-10 border-b border-r border-slate-100 hover:bg-slate-50 transition-colors duration-300 flex flex-col items-center text-center"
                        >
                             <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{audience.emoji}</div>
                            <h3 className="font-bold text-brand-navy mb-2 text-lg">
                                {audience.title}
                            </h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                {audience.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhoShouldAttend;
