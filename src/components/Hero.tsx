import { motion } from 'framer-motion';
import { Ticket, Handshake } from 'lucide-react';
import { Spotlight } from './ui/spotlight';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center bg-brand-navy pt-32 pb-10 overflow-hidden text-center">
             {/* Spotlight Effect */}
             <Spotlight
                className="-top-40 left-0 md:-top-20 md:left-60"
                fill="white"
            />
            
             {/* Subtle Modern Grid Background */}
             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)] pointer-events-none" />

            <div className="container-wide relative z-10 px-4">
                <div className="max-w-6xl mx-auto">
                    
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm"
                    >
                         <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
                        </span>
                        <span className="text-sm font-semibold text-white/80 tracking-wide uppercase">JUNE 26th, 2026 • Calabar, Nigeria</span>
                    </motion.div>
    
                    {/* Main Title */}
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-8 leading-[0.9]"
                    >
                        CALABAR TECH <br />
                        <span className="bg-gradient-to-r from-brand-blue to-blue-400 bg-clip-text text-transparent">SUMMIT 2026</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-3xl font-medium text-slate-400 mb-10 leading-tight max-w-4xl mx-auto tracking-tight"
                    >
                        Reimagining the Future: Calabar's transition into a <span className="text-white block">Tech-Driven Economy</span>
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
                    >
                        <a href="#tickets" className="w-full sm:w-auto group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-brand-blue px-8 font-bold text-white transition-all duration-300 hover:bg-blue-600 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
                             <Ticket size={20} className="mr-2" /> Get Tickets
                        </a>
                        <a href="https://docs.google.com/presentation/d/1fKJQFH8SAuNrz2soV20yp1funW0kap_DG78xqXQzRRQ/edit?usp=sharing" target="_blank" className="w-full sm:w-auto group inline-flex h-14 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-8 font-bold text-white transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                            <Handshake size={20} className="mr-2 text-white" /> Become a Partner
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
