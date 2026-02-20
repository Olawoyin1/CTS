import { motion } from 'framer-motion';
import { Users, Eye, Lightbulb, TrendingUp, CheckCircle2, Download, Handshake, Star } from 'lucide-react';

const Sponsors = () => {
    const benefits = [
        { icon: Users, title: 'Talent Access', desc: 'Direct access to emerging talent and recruitment pipelines.', color: 'text-brand-navy', bg: 'bg-slate-50' },
        { icon: Eye, title: 'Brand Visibility', desc: 'Brand visibility before, during, and after the summit.', color: 'text-brand-navy', bg: 'bg-slate-50' },
        { icon: Lightbulb, title: 'Thought Leadership', desc: 'Thought leadership opportunities to shape industry conversations.', color: 'text-brand-navy', bg: 'bg-slate-50' },
        { icon: TrendingUp, title: 'Social Impact', desc: 'Policy alignment & measurable social impact.', color: 'text-brand-navy', bg: 'bg-slate-50' },
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
                        className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200"
                    >
                        <Star size={14} className="fill-current" /> Partner With Us
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
                                    className="flex items-start gap-5 bg-white p-6 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group"
                                >
                                    <div className={`w-12 h-12 rounded-xl ${benefit.bg} ${benefit.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                        <benefit.icon size={24} strokeWidth={2} />
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
                    <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm">
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
                                    <CheckCircle2 className="text-brand-blue" size={20} />
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
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:20px_20px]"></div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Ready to Make an Impact?</h3>
                    <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-xl font-light relative z-10">
                        Download our sponsorship brochure or schedule a call to discuss partnership opportunities.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 justify-center relative z-10">
                        <button className="group relative flex items-center justify-center gap-2 h-14 rounded-full bg-white px-8 font-bold text-brand-navy transition-all duration-300 hover:bg-slate-100 hover:scale-105 active:scale-95">
                            <Download size={20} className="text-brand-navy" /> Download Brochure
                        </button>
                        <button className="group relative flex items-center justify-center gap-2 h-14 rounded-full bg-slate-100 px-8 font-bold text-brand-navy transition-all duration-300 hover:bg-white hover:scale-105 active:scale-95">
                            <Handshake size={20} className="text-brand-navy" /> Become a Partner
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Sponsors;
