import { motion } from 'framer-motion';

const Sponsors = () => {
    const benefits = [
        { emoji: '🤝', title: 'Talent Access', desc: 'Connect with 5,000+ skilled professionals and emerging talent' },
        { emoji: '👁️', title: 'Brand Visibility', desc: 'Showcase your organization to government, media, and ecosystem leaders' },
        { emoji: '🎯', title: 'Policy Alignment', desc: 'Influence digital policy and infrastructure development' },
        { emoji: '📈', title: 'Measurable Social Impact', desc: 'Contribute to youth empowerment and economic transformation' },
    ];

    return (
        <section id="sponsors" className="section-padding bg-slate-50 relative overflow-hidden">
            <div className="container-wide relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
                    >
                        ⭐ Partner With Us
                    </motion.div>
                    <h2 className="heading-lg mb-6">Become a Sponsor</h2>
                    <p className="text-body-lg">
                        Partner with us to shape the future of technology in Cross River State and beyond.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-16">
                    {benefits.map((benefit, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-start gap-5 bg-white p-8 rounded-2xl border border-slate-100 hover:border-slate-200 transition-all duration-300"
                        >
                            <div className="text-4xl flex-shrink-0">
                                {benefit.emoji}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-brand-navy mb-2">{benefit.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-3xl bg-brand-navy text-white text-center p-12 md:p-16"
                >
                    <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make an Impact?</h3>
                    <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-xl font-light">
                        Download our sponsorship brochure or schedule a call to discuss partnership opportunities.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 justify-center">
                        <button className="btn bg-white text-brand-navy hover:bg-slate-100 text-lg">
                            Download Brochure 📥
                        </button>
                        <button className="btn border border-white/30 text-white hover:bg-white/10 text-lg">
                            Become a Partner 🤝
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Sponsors;
