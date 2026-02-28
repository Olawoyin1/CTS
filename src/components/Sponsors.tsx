import { motion } from 'framer-motion';
import { 
    Eye, 
    Lightbulb, 
    TrendingUp, 
     
    Download,
    Star,
    Handshake
} from 'lucide-react';
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoCheckmarkOutline } from "react-icons/io5";
const Sponsors = () => {
    const benefits = [
        { 
            icon: Eye, 
            title: 'Brand Visibility & Movement', 
            desc: 'Gain high-impact visibility through omni-channel activations, aligning your brand with innovation and digital empowerment before, during, and after the summit.', 
            color: 'text-brand-navy', 
            bg: 'bg-[#e65121]',
        },
        { 
            icon: HiOutlineUserGroup, 
            title: 'Talent & Market Access', 
            desc: 'Access a direct pipeline of emerging talent and innovators, gaining data insights and recruitment opportunities to drive customer acquisition and market growth.', 
            color: 'text-brand-navy', 
            bg: 'bg-[#002d6b]', 
        },
        { 
            icon: Lightbulb, 
            title: 'Thought Leadership', 
            desc: 'Showcase your expertise through keynotes, panels, and workshops, positioning your organization as a top-tier leader in technology and economic development.', 
            color: 'text-brand-navy', 
            bg: 'bg-[#c47d15]',
        },
        { 
            icon: TrendingUp, 
            title: 'Policy & Social Impact', 
            desc: 'Align with government digital transformation priorities to deliver measurable social impact and strengthen strategic public-private partnerships.', 
            color: 'text-brand-navy', 
            bg: 'bg-[#632467]',
        },
    ];

    const opportunities = [
        { title: 'Conference Sponsorship', desc: 'High-level brand visibility through multiple categories.' },
        { title: 'Stage Sponsorship', desc: 'Sponsor key stages: Main, Startup, Creative, or Enterprise.' },
        { title: 'Exhibition Booths', desc: 'Showcase your brand and build sales leads via engaging exhibitions.' },
        { title: 'Product Showcase', desc: 'Sponsor portfolio showcases or live tech demos (e.g., 5G/AI).' },
        { title: 'Session Sponsorship', desc: 'Sponsor specific panels, fireside chats, or masterclasses.' },
        { title: 'CTS Battlefield', desc: 'Sponsor our flagship annual startup pitch competition.' },
        { title: 'Mixers & After-Parties', desc: 'Sponsor the opening stakeholder mixer and closing party.' }
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
                    <h2 className="heading-lg mb-2">Become a Sponsor</h2>
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
                                    className={`${benefit.bg} flex items-start gap-5 p-6 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow transition-all duration-300 group`}
                                >
                                    <div className={`w-12 h-12 rounded-xl  bg-white ${benefit.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                        <benefit.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1">{benefit.title}</h4>
                                        <p className="text-white text-sm leading-relaxed">{benefit.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Sponsorship Opportunities */}
                    <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm">
                         <h3 className="text-2xl font-bold text-brand-navy mb-8">Sponsorship Opportunities</h3>
                         <ul className="space-y-6 mb-10">
                            {opportunities.map((opp, idx) => (
                                <motion.li 
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="mt-1 flex-shrink-0">
                                        <IoCheckmarkOutline className="text-brand-blue" size={18} />
                                    </div>
                                    <div>
                                        <p className="text-brand-navy font-bold leading-none mb-1">
                                            {opp.title}
                                        </p>
                                        <p className="text-slate-500 text-sm leading-tight">
                                            {opp.desc}
                                        </p>
                                    </div>
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
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-[#0FA958]"></div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Ready to Make an Impact?</h3>
                    <p className="text-white mb-10 max-w-3xl mx-auto text-xl font-light relative z-10">
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
