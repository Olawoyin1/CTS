import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    return (
        <motion.a
            href="https://chat.whatsapp.com/ERsz30DzQLKGSy89jwVrOt"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-8 right-8 z-[9999] flex items-center gap-3 bg-[#25D366] text-white pl-5 pr-4 py-3.5 rounded-full shadow-[0_10px_40px_-10px_rgba(37,211,102,0.5)] hover:bg-[#128C7E] transition-all duration-500 group border border-white/20"
        >
            <span className="font-bold text-sm tracking-tight text-white">
                Join our community
            </span>
            <div className="bg-white/20 p-1.5 rounded-full">
                <FaWhatsapp size={22} className="text-white" />
            </div>
        </motion.a>
    );
};

export default WhatsAppButton;
