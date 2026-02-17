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
        { name: 'Why Calabar', href: '#why-calabar' },
        { name: 'Tracks', href: '#tracks' },
        { name: 'Speakers', href: '#speakers' },
        { name: 'Sponsors', href: '#sponsors' },
    ];

    return (
        <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 font-satoshi border-b ${
            scrolled 
            ? 'bg-white/90 backdrop-blur-md border-slate-200/50 py-3 shadow-sm' 
            : 'bg-transparent border-transparent py-5'
        }`}>
            <div className="container-wide flex items-center justify-between">
                
                {/* Logo Section */}
                <a href="#" className="flex items-center gap-2 group z-50 relative">
                    <div className="flex flex-col leading-tight">
                        <span className="text-xl font-bold tracking-tight text-brand-navy group-hover:text-brand-blue transition-colors">
                            CALABAR TECH
                        </span>
                        <span className="text-xs font-semibold text-slate-500 tracking-widest uppercase">Summit 2026</span>
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
                        className="btn btn-primary px-6 py-2.5 text-sm"
                    >
                        Get Tickets
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    onClick={() => setIsOpen(!isOpen)} 
                    className="md:hidden p-2 text-slate-600 hover:text-brand-blue z-50 relative focus:outline-none bg-slate-100 rounded-lg hover:bg-blue-50 transition-colors"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-white z-40 flex flex-col justify-center px-8 md:hidden"
                    >
                         <div className="flex flex-col gap-6">
                            {navLinks.map((link, idx) => (
                                <motion.a 
                                    key={link.name} 
                                    href={link.href} 
                                    onClick={() => setIsOpen(false)}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
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
                                className="btn btn-primary w-full text-lg py-4"
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
