import { motion } from 'framer-motion';
import { 
    Mic, 
    Handshake, 
    Laptop, 
    GraduationCap, 
    Rocket, 
    Landmark 
} from 'lucide-react';

const WhatToExpect = () => {
    const events = [
        {
            icon: Mic,
            title: 'Main Flagship Summit',
            desc: 'Keynote speeches, career transition workshops, innovation showcases, exhibitions, and real-life tech success stories.',
            color: 'text-brand-navy',
            bg: 'bg-slate-50'
        },
        {
            icon: Handshake,
            title: 'Stakeholder Mixer',
            desc: 'A high-level networking platform connecting policymakers, investors, founders, and ecosystem leaders.',
            color: 'text-brand-navy',
            bg: 'bg-slate-50'
        },
        {
            icon: Laptop,
            title: 'Women in Tech (WITECH)',
            desc: 'In collaboration with government and private sector leaders to promote female inclusion and leadership.',
            color: 'text-brand-navy',
            bg: 'bg-slate-50'
        },
        {
            icon: GraduationCap,
            title: 'University Tours',
            desc: 'Campus engagements introducing students to digital career pathways through interactive sessions.',
            color: 'text-brand-navy',
            bg: 'bg-slate-50'
        },
        {
            icon: Rocket,
            title: 'Startup Festival',
            desc: 'A platform for founders to pitch, connect with investors, and showcase solutions shaping the future.',
            color: 'text-brand-navy',
            bg: 'bg-slate-50'
        },
        {
            icon: Landmark,
            title: 'Policy Forum',
            desc: 'Discussions around infrastructure, digital governance, and creating an enabling environment for innovation.',
            color: 'text-brand-navy',
            bg: 'bg-slate-50'
        },
    ];

    return (
        <section id="what-to-expect" className="section-padding bg-slate-50">
            <div className="container-wide">
                <div className="max-w-3xl mx-auto text-center mb-8">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="heading-lg mb-2"
                    >
                        What to Expect
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-body-lg"
                    >
                        A multi-event experience designed to create lasting impact across every stakeholder in the ecosystem.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${event.bg} ${event.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <event.icon size={28} strokeWidth={2} />
                            </div>
                            
                            <h3 className="text-xl font-bold text-brand-navy mb-3 tracking-tight">
                                {event.title}
                            </h3>
                            
                            <p className="text-slate-600 leading-relaxed font-medium">
                                {event.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatToExpect;
