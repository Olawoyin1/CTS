import { motion } from 'framer-motion';

const FinalCTA = () => {
    return (
        <section className="py-32 relative overflow-hidden bg-brand-navy text-white">
            <div className="container-wide relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-8 text-sm font-semibold tracking-wide border border-white/10">
                        ✨ Join the Movement
                    </div>
                    
                    <h2 className="heading-xl text-white mb-8 leading-tight">
                        Let's Build the Future Together
                    </h2>
                    
                    <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
                        Whether you're a student, founder, investor, or policymaker — your participation matters. Join us in reimagining what's possible for Calabar.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a 
                             href="#tickets" 
                             className="btn bg-brand-blue hover:bg-blue-600 text-white text-lg px-10 py-5 transition-transform hover:-translate-y-1"
                        >
                            Get Your Ticket →
                        </a>
                        <a 
                            href="#sponsors" 
                            className="btn bg-white/10 text-white hover:bg-white/20 text-lg px-10 py-5 transition-transform hover:-translate-y-1"
                        >
                            Partner With Us 🤝
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTA;
