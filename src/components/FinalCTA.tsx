import { motion } from 'framer-motion';
import { 
Sparkles, ArrowRight, MessageSquare } from 'lucide-react';

const FinalCTA = () => {
    return (
        <section className="section-padding relative overflow-hidden bg-white text-brand-navy">
            {/* Minimal Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] pointer-events-none" />

            <div className="container-wide relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-navy/5 rounded-full mb-10 text-sm font-bold tracking-wide text-brand-navy uppercase">
                        <Sparkles size={16} /> Join the Movement
                    </div>
                    
                    <h2 className="text-4xl md:text-6xl  font-black mb-10 tracking-tighter leading-[0.9]">
                        Let's Build the <br /> 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-blue-500">Future Together</span>
                    </h2>
                    
                    <p className=" md:text-xl text-slate-500 mb-16 leading-relaxed max-w-4xl mx-auto font-medium tracking-tight">
                        Whether you're a student, founder, investor, or policymaker — your participation matters. Join us in reimagining what's possible for Calabar.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <a 
                             href="#tickets" 
                             className="group h-16 px-10 rounded-full bg-brand-navy text-white text-xl font-bold flex items-center gap-3 transition-all hover:scale-105 hover:bg-brand-blue shadow-2xl shadow-navy-900/20"
                        >
                            Get Your Ticket <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a 
                            href="mailto:calabartechsummit@thegenzhr.com"  
                            className="group h-16 px-10 rounded-full bg-white text-brand-navy border-2 border-slate-200 text-xl font-bold flex items-center gap-3 transition-all hover:border-brand-navy hover:bg-slate-50"
                        >
                            Contact Us <MessageSquare size={20} className="group-hover:rotate-12 transition-transform text-brand-navy" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTA;
