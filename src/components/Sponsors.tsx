import { motion } from 'framer-motion';

const Sponsors = () => {
    const benefits = [
        { emoji: '🤝', title: 'Talent Access', desc: 'Direct access to emerging talent and recruitment pipelines.' },
        { emoji: '👁️', title: 'Brand Visibility', desc: 'Brand visibility before, during, and after the summit.' },
        { emoji: '🎯', title: 'Thought Leadership', desc: 'Thought leadership opportunities to shape industry conversations.' },
        { emoji: '📈', title: 'Social Impact', desc: 'Policy alignment & measurable social impact.' },
    ];

    const opportunities = [
        'Event Partnership',
        'Stage Sponsorship',
        'Exhibition Booth',
        'Workshop Sponsorship',
        'CTS Tech Starter Competition Sponsor'
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
                        Position your brand at the center of Calabar’s digital transformation.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                     {/* Why Sponsor */}
                    <div>
                         <h3 className="text-2xl font-bold text-brand-navy mb-8">Why Sponsor CTS?</h3>
                        <div className="grid gap-6">
                            {benefits.map((benefit, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-start gap-5 bg-white p-6 rounded-2xl border border-slate-100 hover:border-slate-200 transition-all duration-300"
                                >
                                    <div className="text-3xl flex-shrink-0">
                                        {benefit.emoji}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-navy mb-1">{benefit.title}</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">{benefit.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Sponsorship Opportunities */}
                    <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200">
                         <h3 className="text-2xl font-bold text-brand-navy mb-8">Sponsorship Opportunities</h3>
                         <ul className="space-y-4 mb-10">
                            {opportunities.map((opp, idx) => (
                                <motion.li 
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-center gap-3 text-lg text-slate-700 font-medium"
                                >
                                    <span className="text-brand-blue">✔</span>
                                    {opp}
                                </motion.li>
                            ))}
                         </ul>

                         <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                            <p className="text-brand-navy font-semibold mb-2">Interested in elevating your brand?</p>
                            <p className="text-sm text-slate-500">Contact our partnership team for a custom package.</p>
                         </div>
                    </div>
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
                            Download Sponsorship Brochure 📥
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
