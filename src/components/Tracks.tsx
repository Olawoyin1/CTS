import { motion } from 'framer-motion';

const Tracks = () => {
    const tracks = [
        {
            emoji: '🤖',
            title: 'Emerging Tech (AI & ML)',
            desc: 'Explore artificial intelligence, machine learning, and future technologies shaping Africa\'s economic landscape.',
            bg: 'bg-blue-50',
        },
        {
            emoji: '🎨',
            title: 'The Creative Economy',
            desc: 'Where technology meets culture. A spotlight on creators, storytellers, and platforms redefining Africa\'s digital exports.',
            bg: 'bg-purple-50',
        },
        {
            emoji: '🧑🏾‍💻',
            title: 'Entering Tech',
            desc: 'A practical pathway for beginners, career switchers, and job seekers breaking into tech.',
            bg: 'bg-emerald-50',
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
                        className="heading-lg mb-6"
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
                        Three specialized tracks designed to meet you where you are and take you where you need to be.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {tracks.map((track, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15 }}
                            className={`p-10 rounded-3xl ${track.bg} hover:-translate-y-2 transition-transform duration-300 border border-transparent hover:border-slate-100/50`}
                        >
                            <div className="text-6xl mb-8">{track.emoji}</div>
                            
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
