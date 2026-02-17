
const Footer = () => {
    return (
        <footer className="bg-white text-brand-navy py-20 border-t border-slate-100 font-satoshi">
            <div className="container-wide">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <a href="#" className="inline-block text-2xl font-bold mb-6 tracking-tight">
                            Calabar Tech <span className="text-brand-blue">Summit</span>
                        </a>
                        <p className="leading-relaxed mb-8 max-w-md text-lg text-slate-600">
                            A movement to reimagine Calabar's future through technology, innovation, and youth empowerment. Building the infrastructure for a digital economy.
                        </p>
                        <div className="flex gap-4 text-2xl">
                             <a href="#" className="hover:scale-110 transition-transform">🐦</a>
                             <a href="#" className="hover:scale-110 transition-transform">💼</a>
                             <a href="#" className="hover:scale-110 transition-transform">📸</a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
                        <ul className="space-y-4 font-medium text-slate-600">
                            {['About', 'Why Calabar', 'Tracks', 'Speakers', 'Tickets', 'Sponsors'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-brand-blue transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold mb-6 text-lg">Contact Us</h4>
                        <ul className="space-y-5 text-slate-600">
                            <li className="flex items-start gap-3">
                                <span className="text-xl">📧</span>
                                <a href="mailto:contact@thegenzhr.com" className="hover:text-brand-blue transition-colors font-medium">contact@thegenzhr.com</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-xl">📞</span>
                                <span className="font-medium">+234 816 854 5860</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-xl">📍</span>
                                <span className="font-medium">Calabar, Cross River State<br />Nigeria</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-medium text-slate-500">
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
