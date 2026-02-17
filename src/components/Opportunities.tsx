import { motion } from 'framer-motion';

const Opportunities = () => {
    const programs = [
        {
            emoji: '🎓',
            title: 'Digital Skills Scholarships',
            desc: 'Top 100 participants will receive full scholarships for advanced digital skills training.',
            color: 'bg-orange-50 text-orange-600'
        },
        {
            emoji: '🤝',
            title: 'Mentorship & Internships',
            desc: 'Post-summit mentorship & internship pathways connecting talent with employment.',
            color: 'bg-blue-50 text-blue-600'
        },
        {
            emoji: '🌱',
            title: 'Startup Incubation',
            desc: 'Access to startup incubation pipelines for early-stage founders and innovators.',
            color: 'bg-yellow-50 text-yellow-600'
        },
        {
            emoji: '🏆',
            title: 'Tech Starter Competition',
            desc: 'Pitch your idea for a chance to win seed funding and resources.',
            color: 'bg-purple-50 text-purple-600'
        },
    ];

    return (
        <section className="section-padding bg-white relative">
            <div className="container-wide">
                <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
                    <div className="md:w-1/2">
                        <motion.h2 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="heading-lg mb-6 leading-tight"
                        >
                            Scholarships & <br />
                            <span className="text-brand-blue">Opportunities</span>
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-body-lg mb-8"
                        >
                            We aren't just talking about the future; we're funding it. Access scholarships, internships, and incubation.
                        </motion.p>
                        <motion.a 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            href="#" 
                            className="btn border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-colors"
                        >
                            Apply for Opportunities
                        </motion.a>
                    </div>

                    <div className="md:w-1/2 grid sm:grid-cols-2 gap-6">
                        {programs.map((program, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-slate-50 p-6 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100 group"
                            >
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">{program.emoji}</div>
                                <h3 className="text-lg font-bold text-brand-navy mb-2">{program.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-4">{program.desc}</p>
                                <div className="flex items-center text-sm font-semibold text-brand-navy group-hover:translate-x-2 transition-transform cursor-pointer">
                                    Details →
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Opportunities;
