import { motion } from 'framer-motion';
import { Building2, Mic2, Calendar } from 'lucide-react';
import { HiOutlineUserGroup } from "react-icons/hi";

const CTSStats = () => {
    const stats = [
        { 
            value: '50+', 
            label: 'Global & Local Brands', 
            icon: Building2, 
            bg: 'bg-[#e65121]', // Orange/Red
            delay: 0.1 
        },
        { 
            value: '3000+', 
            label: 'Expected Attendees', 
            icon: HiOutlineUserGroup, 
            bg: 'bg-[#002d6b]', // Navy Blue
            delay: 0.2 
        },
        { 
            value: '20+', 
            label: 'Featured Speakers', 
            icon: Mic2, 
            bg: 'bg-[#c47d15]', // Gold/Brown
            delay: 0.3 
        },
        { 
            value: '3', 
            label: 'Intensive Days', 
            icon: Calendar, 
            bg: 'bg-[#632467]', // Purple
            delay: 0.4 
        },
    ];

    return (
        <section className="py-24 bg-black text-white relative overflow-hidden">
            <div className="container-wide relative z-10 px-4">
                <div className="mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
                    >
                        How Big is CTS?
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-300 leading-relaxed font-medium max-w-3xl border-l-2 border-brand-blue pl-6"
                    >
                        An immersive networking and learning experience connecting young professionals with industry leaders through live sessions, panel discussions, workshops, and interactive career activations designed to inspire growth and opportunity.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: stat.delay, duration: 0.5 }}
                            className={`${stat.bg} relative aspect-[4/5] p-8 rounded-2xl md:rounded-3xl overflow-hidden group hover:scale-[1.02] transition-transform duration-500 shadow-xl`}
                        >
                            {/* Decorative Icon in bottom-left */}
                            <div className="absolute -bottom-6 -left-6 opacity-20 transform -rotate-12 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-110">
                                <stat.icon size={160} strokeWidth={1} />
                            </div>

                            {/* Content right-aligned */}
                            <div className="relative z-10 h-full flex flex-col items-end text-right">
                                <span className="text-5xl md:text-7xl font-black tracking-tighter mb-2">
                                    {stat.value}
                                </span>
                                <span className="text-sm md:text-lg font-bold leading-tight opacity-90 max-w-[150px]">
                                    {stat.label}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Bottom Pattern Decors */}
            <div className="absolute bottom-0 left-0 w-full h-4 bg-white/5 opacity-20 border-t border-white/10" />
        </section>
    );
};

export default CTSStats;
