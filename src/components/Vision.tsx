import { motion } from 'framer-motion';

const Vision = () => {
    return (
        <section className="section-padding bg-white relative overflow-hidden">
            <div className="container-wide relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                         <h2 className="heading-lg mb-6">Our Long-Term Vision</h2>
                         <p className="text-body-lg mb-8 font-medium text-brand-navy">
                            To position Calabar as a model smart city and tech talent powerhouse in Nigeria’s South-South region — reducing youth unemployment and building a sustainable digital ecosystem.
                         </p>
                         <p className="text-lg text-slate-600 leading-relaxed mb-6">
                            The summit will culminate in:
                         </p>
                         <ul className="space-y-4 mb-8">
                             {[
                                 'A structured policy recommendation',
                                 'A public-private partnership model',
                                 'The launch of a government-backed tech hub'
                             ].map((item, idx) => (
                                 <li key={idx} className="flex items-center gap-3 text-lg text-slate-700">
                                     <span className="h-2 w-2 rounded-full bg-brand-blue flex-shrink-0" />
                                     {item}
                                 </li>
                             ))}
                         </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-brand-navy text-white p-10 md:p-14 rounded-[2.5rem] relative overflow-hidden shadow-2xl"
                    >
                        {/* Decorative background */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                        
                        <div className="relative z-10 flex flex-col items-center text-center">
                            <div className="text-6xl mb-6">🚀</div>
                            <blockquote className="text-3xl font-bold leading-tight mb-8">
                                "This is bigger than a conference. <br />
                                <span className="text-brand-blue">This is infrastructure for the future.</span>"
                            </blockquote>
                            <div className="w-16 h-1 bg-white/20 rounded-full" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Vision;
