import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; // Keeping Menu/X for functionality
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Why CTS', href: '#why-calabar' },
        { name: 'Tracks', href: '#tracks' },
        { name: 'Speakers', href: '#speakers' },
        { name: 'Sponsors', href: '#sponsors' },
    ];

    return (
        <nav className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 font-satoshi w-full px-4 ${
            scrolled 
            ? 'top-4' 
            : 'top-0'
        }`}>
            <div className={`mx-auto transition-all duration-300 flex items-center justify-between ${
                scrolled && !isOpen
                ? 'bg-white/90 backdrop-blur-md border border-slate-200 shadow-lg rounded-full px-4 md:px-6 py-2.5 md:py-3 max-w-[95%] md:max-w-5xl'
                : 'bg-transparent border-transparent py-4 md:py-6 max-w-7xl px-4 md:px-8'
            }`}>
                
                {/* Logo Section */}
                <a href="#" className="flex items-center gap-2 group relative z-50">
                    <div className="flex flex-col leading-tight">
                        <span className="text-xl font-bold tracking-tight text-brand-navy group-hover:text-brand-blue transition-colors">
                            CTS 2026
                        </span>
                    </div>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href} 
                            className="text-sm font-semibold text-slate-600 hover:text-brand-blue transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a 
                        href="#tickets" 
                        className={`btn-primary px-6 py-2.5 text-sm transition-all ${scrolled ? 'rounded-full' : 'rounded-xl'}`}
                    >
                        Get Tickets
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    onClick={() => setIsOpen(!isOpen)} 
                    className="md:hidden p-2 text-brand-navy hover:text-brand-blue focus:outline-none bg-slate-50 border border-slate-100 rounded-full hover:bg-white transition-all z-50"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-white z-40 flex flex-col justify-center px-8 md:hidden h-[100dvh] w-full"
                    >
                         <div className="flex flex-col gap-6">
                            {navLinks.map((link, idx) => (
                                <motion.a 
                                    key={link.name} 
                                    href={link.href} 
                                    onClick={() => setIsOpen(false)}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + (idx * 0.1) }}
                                    className="text-3xl font-bold text-slate-800 hover:text-brand-blue flex items-center justify-between group"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                         </div>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="mt-12 space-y-4"
                        >
                            <a 
                                href="#tickets" 
                                onClick={() => setIsOpen(false)}
                                className="btn btn-primary w-full text-lg py-4 rounded-full text-center block"
                            >
                                Get Tickets
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
