import { motion } from 'framer-motion';

interface TicketTier {
    name: string;
    emoji: string;
    description: string;
    features: string[];
    highlighted?: boolean;
    color: string;
}

const Tickets = () => {
    const tiers: TicketTier[] = [
        {
            name: 'General Access',
            emoji: '🎫',
            description: 'Full admission to the summit experience.',
            features: ['Full summit access', 'All keynotes & workshops', 'Exhibition floor access', 'Career & networking sessions'],
            highlighted: true,
            color: 'emerald'
        },
        {
            name: 'VIP Access',
            emoji: '🎫',
            description: 'Premium access for a superior experience.',
            features: ['Priority seating', 'Access to Stakeholder Mixer', 'Exclusive networking opportunities', 'Premium summit experience'],
            color: 'purple'
        },
        {
            name: 'Student Discount Pass',
            emoji: '🎫',
            description: 'Subsidized access for verified students.',
            features: ['Full summit access', 'Career workshops', 'Networking sessions', 'Student-only mentorship'],
            color: 'blue'
        },
        {
            name: 'Group & Corporate',
            emoji: '🎫',
            description: 'Special pricing for organizations and institutions.',
            features: ['Bulk registration', 'Dedicated support', 'Custom branding options', 'Team seating'],
            color: 'slate'
        },
    ];

    return (
        <section id="tickets" className="py-24 bg-brand-navy relative overflow-hidden">
             {/* Background Glow */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container-wide relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                     <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-bold uppercase tracking-wider text-blue-200 mb-4">
                        🎟 Get Your Ticket
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Early Bird Tickets Now Live</h2>
                    <p className="text-xl text-blue-100/80 font-light">
                        Secure your seat now. Choose the pass that matches your goals.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {tiers.map((tier, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`relative rounded-3xl p-8 flex flex-col transition-all duration-300 ${
                                tier.highlighted 
                                    ? 'bg-brand-blue text-white shadow-2xl shadow-blue-500/20 scale-105 z-10 ring-4 ring-blue-400/20' 
                                    : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10'
                            }`}
                        >
                            <div className="mb-8">
                                <div className="text-4xl mb-4">{tier.emoji}</div>
                                <h3 className={`font-bold text-xl mb-2 ${tier.highlighted ? 'text-white' : 'text-slate-200'}`}>{tier.name}</h3>
                                <p className={`text-sm ${tier.highlighted ? 'text-blue-100' : 'text-slate-400'} leading-relaxed`}>{tier.description}</p>
                            </div>

                            <div className="space-y-4 mb-8 flex-1">
                                {tier.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3 text-sm">
                                        <span className={`text-lg leading-none ${tier.highlighted ? 'text-white' : 'text-slate-500'}`}>✓</span>
                                        <span className={tier.highlighted ? 'text-blue-50' : 'text-slate-300'}>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button className={`w-full py-3.5 rounded-xl font-bold transition-all ${
                                tier.highlighted 
                                    ? 'bg-white text-brand-blue hover:bg-slate-50' 
                                    : 'bg-white/10 text-white hover:bg-white/20'
                            }`}>
                                Buy Tickets →
                            </button>
                        </motion.div>
                    ))}
                </div>
                
                 <div className="text-center">
                    <p className="text-slate-400 text-sm">
                        👉 <a href="#" className="underline hover:text-white transition-colors">Secure Your Seat Now</a> before prices increase.
                    </p>
                 </div>
            </div>
        </section>
    );
};

export default Tickets;
