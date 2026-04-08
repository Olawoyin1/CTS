import { motion } from 'framer-motion';

interface TicketTier {
    name: string;
    subtitle?: string;
    price: string;
    priceNote?: string;
    dates: string;
    access: string;
    audience: string;
    features: string[];
    extras?: string[];
    highlighted?: boolean;
    badge?: string;
    isFree?: boolean;
}

const tiers: TicketTier[] = [
    {
        name: 'Full Pass',
        subtitle: 'VIP',
        price: '₦70,000',
        dates: 'June 25–27',
        access: 'WITECH Mixer + Stakeholder Mixer + Main Event + After Party',
        audience: 'Govt officials, Tech ecosystem builders, Executives & Partners',
        features: [
            'Access to all 3 days & all stages',
            'Reserved VIP seating',
            'Backstage photo moments with speakers & performers',
            'Dedicated concierge check-in',
            'VIP red-carpet & press wall access',
            'Access to Exclusive VIP Lounge',
            'SYO After Party',
        ],
        highlighted: true,
        badge: '👑 VIP',
    },
    {
        name: 'Brand & Business Pass',
        price: '₦45,000',
        dates: 'June 26–27',
        access: 'Mixer + Conference',
        audience: 'Marketing teams, Agencies, Corporate reps & Startups',
        features: [
            'Mixer + Conference access',
            'All-stage access',
            'Entry to Creator Mixer',
            'Access to Brand & Partnerships Lounge',
            'Creator–Brand Matchmaking sessions',
            'Priority check-in & concierge',
            'Reserved seating at business panels',
        ],
        extras: ['Laptop raffle draw', 'Tech Scholarship', 'SYO After Party'],
        badge: '💼 Business',
    },
    {
        name: 'Standard Pass',
        price: '₦20,000',
        dates: 'June 26–27',
        access: 'Mixer + Conference',
        audience: 'Active creators, Influencers, Entrepreneurs seeking growth & deals',
        features: [
            'All General Admission privileges',
            'Entry to Stakeholder Mixer (June 26 evening)',
            'Priority registration & badge pickup',
            'Access to Founder & Business Lounge during conference',
            'SYO After Party',
        ],
        extras: ['Laptop raffle draw', 'Tech Scholarship'],
        badge: '⭐ Standard',
    },
    {
        name: 'Besties Pass',
        subtitle: '2 People',
        price: '₦7,000',
        priceNote: 'Save big!',
        dates: 'June 26–27',
        access: 'Mixer + Conference (×2)',
        audience: 'Business partners, Colleagues, Creator pairs, Entrepreneurial duos, friends',
        features: [
            'All Standard Pass privileges for TWO people',
            'Entry to Stakeholder Mixer for both',
            'Priority registration & badge pickup',
            'Access to Creator & Business Lounge',
        ],
        extras: ['Laptop raffle draw', 'Tech Scholarship', 'SYO After Party'],
        badge: '👯 Duo',
    },
    {
        name: 'General Admission',
        price: '₦4,000',
        dates: 'June 27 only',
        access: 'Conference day',
        audience: 'Entry-level, Enthusiasts, Community members',
        features: [
            'Access to all 3 stages (Main + 2 Side Stages)',
            'Exhibition floor access',
            'Brand activations & experience booths',
            'Event badge + wristband',
            'After party access',
        ],
        extras: ['Laptop raffle draw', 'Tech Scholarship'],
        badge: '🎫 General',
    },
    {
        name: 'Group Pass',
        subtitle: '5 People',
        price: '₦18,000',
        priceNote: 'Save big!',
        dates: 'June 27 only',
        access: 'Conference day (×5)',
        audience: 'Schools, Community orgs, Corporate teams, Faith groups',
        features: [
            '5× General Admission benefits',
            'Group photo opportunity',
            'Group badge collection',
            'Dedicated group seating area',
            'Community shoutout during event',
        ],
        extras: ['Laptop raffle draw', 'Tech Scholarship'],
        badge: '👥 Group',
    },
    {
        name: 'Free Pass',
        price: 'FREE',
        dates: 'June 27 only',
        access: 'Conference day',
        audience: 'Schools, Community orgs, Corporate teams, Faith groups',
        features: [
            '10× General Admission benefits',
            'Group photo opportunity',
            'Group badge collection',
            'Dedicated group seating area',
            'Community shoutout during event',
        ],
        isFree: true,
        badge: '🎁 Free',
    },
];

const Tickets = () => {
    return (
        <section id="tickets" className="section-padding bg-brand-navy relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container-wide relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-bold uppercase tracking-wider text-blue-200 mb-4">
                        🎟 Get Your Ticket
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">Choose Your Pass</h2>
                    <p className="text-xl text-blue-100/80 font-light">
                        Secure your seat now. Pick the pass that matches your goals.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
                    {tiers.map((tier, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.08 }}
                            className={`relative rounded-3xl p-6 flex flex-col transition-all duration-300 ${
                                tier.highlighted
                                    ? 'bg-brand-blue text-white shadow-2xl shadow-blue-500/20 ring-4 ring-blue-400/30 z-10'
                                    : tier.isFree
                                    ? 'bg-emerald-900/40 border border-emerald-500/30 text-slate-200 hover:bg-emerald-900/60'
                                    : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10'
                            }`}
                        >
                            {/* Badge */}
                            {tier.badge && (
                                <span className={`self-start text-xs font-bold px-2.5 py-1 rounded-full mb-4 ${
                                    tier.highlighted ? 'bg-white/20 text-white' : 'bg-white/10 text-slate-300'
                                }`}>
                                    {tier.badge}
                                </span>
                            )}

                            {/* Name & Price */}
                            <div className="mb-4">
                                <h3 className={`font-bold text-lg leading-tight ${tier.highlighted ? 'text-white' : 'text-slate-100'}`}>
                                    {tier.name}
                                    {tier.subtitle && <span className="ml-1 text-sm font-normal opacity-70">({tier.subtitle})</span>}
                                </h3>
                                <div className="mt-2 flex items-baseline gap-2">
                                    <span className={`text-3xl font-extrabold ${tier.isFree ? 'text-emerald-400' : tier.highlighted ? 'text-white' : 'text-white'}`}>
                                        {tier.price}
                                    </span>
                                    {tier.priceNote && (
                                        <span className="text-xs text-yellow-400 font-semibold">{tier.priceNote}</span>
                                    )}
                                </div>
                                <p className={`text-xs mt-1 ${tier.highlighted ? 'text-blue-200' : 'text-slate-400'}`}>{tier.dates}</p>
                                <p className={`text-xs mt-0.5 font-medium ${tier.highlighted ? 'text-blue-100' : 'text-slate-300'}`}>{tier.access}</p>
                            </div>

                            {/* Audience */}
                            <p className={`text-xs italic mb-4 leading-relaxed ${tier.highlighted ? 'text-blue-100/80' : 'text-slate-400'}`}>
                                {tier.audience}
                            </p>

                            {/* Features */}
                            <div className="space-y-2 mb-4 flex-1">
                                {tier.features.map((f, i) => (
                                    <div key={i} className="flex items-start gap-2 text-xs">
                                        <span className={`mt-0.5 shrink-0 ${tier.highlighted ? 'text-white' : 'text-emerald-400'}`}>✓</span>
                                        <span className={tier.highlighted ? 'text-blue-50' : 'text-slate-300'}>{f}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Extras */}
                            {tier.extras && tier.extras.length > 0 && (
                                <div className="flex flex-wrap gap-1.5 mb-5">
                                    {tier.extras.map((e, i) => (
                                        <span key={i} className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                                            tier.highlighted ? 'bg-white/20 text-white' : 'bg-white/10 text-slate-300'
                                        }`}>
                                            {e}
                                        </span>
                                    ))}
                                </div>
                            )}

                            <button
                                className={`w-full py-3 rounded-xl font-bold text-sm transition-all ${
                                    tier.highlighted
                                        ? 'bg-white text-brand-blue hover:bg-slate-50'
                                        : tier.isFree
                                        ? 'bg-emerald-500 text-white hover:bg-emerald-400'
                                        : 'bg-white/10 text-white hover:bg-white/20'
                                }`}
                            >
                                {tier.isFree ? 'Register Free →' : 'Get Ticket →'}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tickets;
