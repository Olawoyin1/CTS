import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-white pt-32 pb-20 overflow-hidden text-center">
             {/* Subtle Modern Grid Background */}
             <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)] pointer-events-none" />

            <div className="container-wide relative z-10 px-4">
                <div className="max-w-6xl mx-auto">
                    
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 bg-blue-50/50 border border-blue-100 rounded-full"
                    >
                         <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
                        </span>
                        <span className="text-sm font-semibold text-brand-navy tracking-wide">Nov 26th, 2026 • Calabar, Nigeria</span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-brand-navy mb-8 leading-[0.9]"
                    >
                        CALABAR TECH <br />
                        <span className="text-brand-blue">SUMMIT 2026</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-2xl md:text-3xl font-medium text-slate-500 mb-12 leading-tight max-w-4xl mx-auto tracking-tight"
                    >
                        Reimagining the Future: Calabar's transition into a <span className="text-brand-navy block">Tech-Driven Economy</span>
                    </motion.p>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-lg text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed"
                    >
                        A Digital Awakening. Calabar Tech Summit 2026 is not just an event — It is a movement to transform Cross River State into a thriving tech-powered economy.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <a href="#tickets" className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-brand-navy px-8 font-medium text-white transition-all duration-300 hover:bg-blue-600 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                             <span className="mr-2 text-xl">🎫</span> Get Tickets
                        </a>
                        <a href="#sponsors" className="group inline-flex h-14 items-center justify-center rounded-full border-2 border-slate-200 bg-white px-8 font-medium text-brand-navy transition-all duration-300 hover:border-brand-navy hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-brand-navy focus:ring-offset-2">
                            <span className="mr-2 text-xl">🤝</span> Become a Partner
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
