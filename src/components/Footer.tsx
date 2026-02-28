import { Twitter, Instagram, Mail, Phone, MapPin, Music2 as Tiktok } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white text-brand-navy py-12 md:py-20 border-t border-slate-100 font-satoshi">
            <div className="container-wide">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    
                    {/* Brand */}
                    <div className="md:col-span-2">
                         <a href="#" className="flex items-center gap-2 group relative z-50 mb-6">
                            <div className="flex flex-col leading-tight">
                                <span className="text-2xl font-bold tracking-tight text-brand-navy group-hover:text-brand-blue transition-colors">
                                    CTS <span className="text-brand-blue">2026</span>
                                </span>
                            </div>
                        </a>
                        <p className="leading-relaxed mb-8 max-w-md text-lg text-slate-600 font-medium">
                            A movement to reimagine Calabar's future through technology, innovation, and youth empowerment. Building the infrastructure for a digital economy.
                        </p>
                        
                         <div className="mb-8">
                             <p className="font-bold text-lg mb-2">Follow us for updates.</p>
                             <p className="text-brand-blue font-semibold flex items-center gap-2">
                                 <span className="w-8 h-[2px] bg-brand-blue rounded-full"></span>
                                 Be part of history.
                             </p>
                         </div>
 
                        <div className="flex gap-4">
                             {[
                                { icon: Twitter, href: 'https://x.com/Calitechsummit' },
                                { icon: Tiktok, href: 'https://www.tiktok.com/@calabartechsummit' },
                                { icon: Instagram, href: '#' }
                             ].map((social, idx) => (
                                <a 
                                    key={idx} 
                                    href={social.href} 
                                    className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white hover:scale-110 transition-all duration-300 shadow-sm"
                                >
                                    <social.icon size={20} />
                                </a>
                             ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold mb-8 text-lg text-brand-navy">Quick Links</h4>
                        <ul className="space-y-4 font-semibold text-slate-500">
                            {[
                                { name: 'About', href: '#about' },
                                { name: 'Why CTS', href: '#why-calabar' },
                                { name: 'Tracks', href: '#tracks' },
                                { name: 'Speakers', href: '#speakers' },
                                { name: 'Tickets', href: '#tickets' },
                                { name: 'Sponsors', href: '#sponsors' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="hover:text-brand-blue transition-colors flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-brand-navy transition-colors"></span>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold mb-8 text-lg text-brand-navy">Contact Us</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors duration-300">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Email</p>
                                    <a href="mailto:contact@thegenzhr.com" className="text-slate-700 hover:text-brand-blue transition-colors font-bold break-all">calabartechsummit@thegenzhr.com</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors duration-300">
                                    <Phone size={18} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Phone</p>
                                    <span className="text-slate-700 font-bold">+234 816 854 5860</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors duration-300">
                                    <MapPin size={18} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Location</p>
                                    <span className="text-slate-700 font-bold">Calabar, Cross River State<br />Nigeria</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-bold text-slate-400">
                    <p>&copy; 2026 Calabar Tech Summit. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-brand-navy transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-brand-navy transition-colors">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
