import { motion } from 'framer-motion';

interface TicketTier {
    name: string;
    price: string;
    description: string;
    features: string[];
    highlighted?: boolean;
    color: string;
}

const Tickets = () => {
    const tiers: TicketTier[] = [
        {
            name: 'Student Discount',
            price: '₦2,000',
            description: 'For students and NYSC members',
            features: ['Full Summit Access', 'Career Workshops', 'Certificate of Attendance', 'Networking Sessions'],
            color: 'blue'
        },
        {
            name: 'General Access',
            price: '₦5,000',
            description: 'Most popular option',
            features: ['All Student Benefits', 'Exhibition Floor Access', 'Lunch Included', 'Summit Swag Bag', 'Post-Summit Materials'],
            highlighted: true,
            color: 'emerald'
        },
        {
            name: 'VIP Access',
            price: '₦20,000',
            description: 'Premium experience',
            features: ['Priority VIP Seating', 'Speaker Lounge Access', 'Exclusive Investor Dinner', 'Premium Swag Box', 'Fast-Track Entry'],
            color: 'purple'
        },
        {
            name: 'Corporate',
            price: 'Custom',
            description: 'For organizations (10+ attendees)',
            features: ['Bulk Pricing Available', 'Dedicated Support', 'Custom Branding Options', 'Team Registration Portal'],
            color: 'slate'
        },
    ];

    return (
        <section id="tickets" className="py-24 bg-brand-navy relative overflow-hidden">
             {/* Background Glow */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container-wide relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Secure Your Seat</h2>
                    <p className="text-xl text-blue-100/80 font-light">
                        Early bird pricing available. Choose the ticket that matches your goals.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                             {tier.highlighted && (
                                <div className="absolute top-0 right-0 p-4">
                                    <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-wider text-white">
                                        Popular
                                    </span>
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className={`font-medium mb-1 ${tier.highlighted ? 'text-blue-100' : 'text-slate-400'}`}>{tier.name}</h3>
                                <div className="text-3xl font-bold mb-4 text-white tracking-tight">{tier.price}</div>
                                <p className={`text-sm ${tier.highlighted ? 'text-blue-50' : 'text-slate-400'} leading-relaxed`}>{tier.description}</p>
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
                                Get Ticket →
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tickets;
