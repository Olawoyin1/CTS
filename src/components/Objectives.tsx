import { motion } from 'framer-motion';
import { Target, Zap, BookOpen, GraduationCap, CheckCircle2 } from 'lucide-react';
import { HiOutlineUserGroup } from "react-icons/hi";

const Objectives = () => {
    const goals = [
        {
            icon: HiOutlineUserGroup,
            text: 'Introduce 3,000+ young people and residents in Calabar to tech-driven opportunities',
            bg: 'bg-[#e65121]', 
        },
        {
            icon: Zap,
            text: 'Equip participants with practical, actionable skills for digital careers',
            bg: 'bg-[#002d6b]',
        },
        {
            icon: BookOpen,
            text: 'Promote digital literacy and future-ready skills development',
            bg: 'bg-[#c47d15]',
        },
        {
            icon: GraduationCap,
            text: 'Facilitate access to scholarships, mentorship, and learning opportunities',
            bg: 'bg-[#632467]',
        },
    ];

    return (
        <section className="section-padding bg-white relative overflow-hidden">
            {/* Subtle Gradient Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(59,130,246,0.02)_0%,rgba(255,255,255,0)_100%)] pointer-events-none" />
            
            <div className="container-wide relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-4 md:gap-16 items-center">
                        
                        {/* Left: Heading Section */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-3 py-1 bg-brand-navy text-white text-[10px] font-bold rounded-full mb-4 uppercase tracking-[0.2em]"
                            >
                                <Target size={12} /> Project Objectives & Goals
                            </motion.div>
                            
                            <h2 className="text-4xl md:text-6xl font-extrabold text-brand-navy mb-8 leading-[1.1] tracking-tighter">
                                This is what <br />
                                <span className="text-brand-blue">changes everything</span>
                            </h2>
                            
                            <p className="text-xl text-slate-500 leading-relaxed font-medium max-w-md">
                                We are focused on measurable impact. Our goals are designed to create a sustainable foundation for Calabar's digital economy.
                            </p>
                        </motion.div>

                        {/* Right: Goals List */}
                        <div className="space-y-4">
                            {goals.map((goal, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                                    className={` ${goal.bg} group flex items-center gap-6 p-6 rounded-[2rem] text-white border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500`}
                                >
                                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-brand-navy shadow-sm group-hover:scale-110 group-hover:bg-brand-navy group-hover:text-white transition-all duration-300">
                                        <goal.icon size={20} />
                                    </div>
                                    <p className="flex-1 font-bold leading-tight group-hover:text-brand-navy transition-colors">
                                        {goal.text}
                                    </p>
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                        <CheckCircle2 size={20} className="text-brand-blue" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Objectives;
