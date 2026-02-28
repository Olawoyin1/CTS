import { motion } from 'framer-motion';
import { HiOutlineUserGroup } from "react-icons/hi";
import { 
    Mic, 
    Briefcase, 
    GraduationCap, 
    Building2,
    ArrowUpRight,
    Handshake
} from 'lucide-react';

const KeyFeatures = () => {
    const mainFeatures = [
        {
            title: 'Flagship Summit Experience',
            desc: 'Featuring expert keynote speakers, career transition workshops, innovation showcases, exhibitions, live demos, and competitive hackathons.',
            icon: Mic,
            category: 'Core Event',
            color: 'from-blue-500 to-indigo-600',
            size: 'lg'
        },
        {
            title: 'Talent Development',
            desc: 'Continuous mentorship, coaching, career guidance, internship pathways, and job placement support for participants beyond the summit.',
            icon: Briefcase,
            category: 'Growth',
            color: 'from-emerald-500 to-teal-600',
            size: 'md'
        },
        {
            title: 'Strategic Networking',
            desc: 'High-level forum bringing together tech leaders, policymakers, investors, and ecosystem builders.',
            icon: Handshake,
            category: 'Partnership',
            color: 'from-orange-500 to-rose-600',
            size: 'md'
        },
    ];

    const secondaryFeatures = [
        {
            title: 'Digital Skills Scholarship',
            desc: 'Scholarships for Top 100 participants for certified digital skills training.',
            icon: GraduationCap,
            highlight: 'Top 100'
        },
        {
            title: 'Women in Tech Mixer',
            desc: 'Empowerment forum promoting female leadership in innovation.',
            icon: HiOutlineUserGroup,
            highlight: 'Leadership'
        },
        {
            title: 'PPP Tech Hub',
            desc: 'Government-backed hub for learning, innovation, and incubation.',
            icon: Building2,
            highlight: 'Innovation'
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 20
            }
        }
    };

    return (
        <section id="features" className="section-padding bg-[#FAFBFF] relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] bg-brand-blue/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-brand-emerald/5 rounded-full blur-[120px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03]" 
                    style={{ backgroundImage: 'radial-gradient(#2563EB 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
                />
            </div>

            <div className="container-wide relative z-10">
                {/* <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 px-4">
                    <div className="max-w-2xl">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 mb-6"
                        >
                            <span className="h-[1px] w-8 bg-brand-blue" />
                            <span className="text-xs font-black text-brand-blue uppercase tracking-[0.3em]">
                                Our Roadmap
                            </span>
                        </motion.div>
                        <motion.h2 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-7xl font-black text-brand-navy tracking-tighter leading-[0.9] mb-4"
                        >
                            The Future is <br />
                            <span className="text-brand-blue drop-shadow-sm">Built Here.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-slate-500 font-medium max-w-lg leading-relaxed mt-6"
                        >
                            A comprehensive ecosystem designed to accelerate innovation, nurture talent, and build bridges between ambition and opportunity.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="hidden lg:flex items-center gap-4 p-4 rounded-3xl bg-white shadow-xl shadow-slate-200/50 border border-slate-100"
                    >
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold overflow-hidden">
                                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                                </div>
                            ))}
                        </div>
                        <div className="text-sm">
                            <p className="font-bold text-brand-navy">5,000+ Participants</p>
                            <p className="text-slate-500">Ready to transform</p>
                        </div>
                    </motion.div>
                </div> */}

                {/* Main Features Bento-style Grid */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2  gap-6 mb-8"
                >
                    {/* Featured Item - Large */}
                    <motion.div 
                        variants={itemVariants}
                        className=" group relative overflow-hidden p-8  rounded-[2.5rem] bg-white border border-slate-100 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(37,99,235,0.15)] hover:-translate-y-2"
                    >
                        {/* Gradient Accent */}
                        <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${mainFeatures[0].color} opacity-[0.03] rounded-bl-full group-hover:opacity-[0.08] transition-opacity duration-500`} />
                        
                        <div className="relative z-10 h-full flex flex-col">
                            <div className="flex items-center justify-between mb-12">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${mainFeatures[0].color} flex items-center justify-center text-white shadow-lg shadow-blue-500/20`}>
                                    {(() => {
                                        const Icon = mainFeatures[0].icon;
                                        return <Icon size={32} strokeWidth={1.5} />;
                                    })()}
                                </div>
                                <span className="px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-[10px] font-bold text-brand-navy uppercase tracking-widest">
                                    {mainFeatures[0].category}
                                </span>
                            </div>
                            
                            <div className="mt-auto">
                                <h3 className="text-3xl md:text-5xl font-black text-brand-navy mb-6 leading-none">
                                    {mainFeatures[0].title}
                                </h3>
                                <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                                    <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-xl">
                                        {mainFeatures[0].desc}
                                    </p>
                                    <div className="flex-shrink-0 group/btn">
                                        <button className="flex items-center gap-2 text-brand-blue font-bold tracking-tight hover:gap-3 transition-all duration-300">
                                            VIEW SCHEDULE <ArrowUpRight size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Secondary Main Items */}
                    <div className="flex flex-col gap-6">
                        {mainFeatures.slice(1).map((feature, idx) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    variants={itemVariants}
                                    className="group relative overflow-hidden p-8 rounded-[2rem] bg-white border border-slate-100 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-1 h-full"
                                >
                                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-[0.05] rounded-bl-full transition-opacity duration-500`} />
                                    
                                    <div className="flex gap-6 items-start">
                                        <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-all duration-500 shadow-sm flex-shrink-0">
                                            <Icon size={28} strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
                                                {feature.category}
                                            </span>
                                            <h3 className="text-xl font-black text-brand-navy mb-3 group-hover:text-brand-blue transition-colors">
                                                {feature.title}
                                            </h3>
                                            <p className="text-sm hidden md:flex text-slate-500 font-medium leading-relaxed">
                                                {feature.desc}
                                            </p>
                                        </div>
                                    </div>
                                            <p className="text-sm flex md:hidden text-slate-500 p-0 m-0 font-medium leading-relaxed">
                                                {feature.desc}
                                            </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Bottom Row - More Tiles */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4"
                >
                    {secondaryFeatures.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                className="bg-white/40 backdrop-blur-sm border border-slate-200/50 p-6 rounded-3xl hover:bg-white hover:border-white hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className="flex items-center gap-5">
                                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-brand-navy group-hover:text-brand-blue group-hover:rotate-12 transition-all duration-500 shadow-sm">
                                        <Icon size={20} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-1">
                                            <h4 className="text-sm font-bold text-brand-navy">{feature.title}</h4>
                                            <span className="text-[9px] font-black text-brand-emerald bg-brand-emerald/10 px-2 py-0.5 rounded-full uppercase tracking-tighter italic">
                                                {feature.highlight}
                                            </span>
                                        </div>
                                        <p className="text-xs text-slate-400 leading-snug">
                                            {feature.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Integrated Vision Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 mx-4 p-1 rounded-[2.5rem] bg-gradient-to-r from-brand-navy via-brand-blue to-brand-navy group"
                >
                    <div className="bg-brand-navy rounded-[2.4rem] p-8 overflow-hidden relative">
                        {/* Animated background lines */}
                        <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                        </div>

                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
                            <div className="max-w-2xl">
                                <h3 className="text-2xl md:text-4xl font-black text-white mb-4 tracking-tight">
                                    Building the <span className="text-brand-blue italic">Innovation Corridor</span> of Africa.
                                </h3>
                                <p className="text-slate-400 text-lg font-medium italic">
                                    "Our mission is to democratize technology access and create a sustainable path for the next generation of African digital leaders."
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
                                <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
                                    <p className="text-2xl font-black text-white">#CTS26</p>
                                    <p className="text-[10px] text-brand-blue font-bold uppercase tracking-widest mt-1">Official Hash</p>
                                </div>
                                <div className="p-6 rounded-3xl bg-brand-blue border border-brand-blue text-white shadow-lg shadow-brand-blue/30">
                                    <p className="text-2xl font-black">2026</p>
                                    <p className="text-[10px] text-white/70 font-bold uppercase tracking-widest mt-1">The Year</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default KeyFeatures;
