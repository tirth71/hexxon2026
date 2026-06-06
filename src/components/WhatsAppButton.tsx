import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

interface WhatsAppButtonProps {
  productName?: string;
}

const WhatsAppButton = ({ productName }: WhatsAppButtonProps) => {
  const message = productName
    ? `Hello, I am interested in ${productName}. Please share more details.`
    : "Hello, I am interested in your products. Please share more details.";

  const url = `https://wa.me/918128542365?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-7 h-7"
      />
    </motion.a>
  );
};

export default WhatsAppButton;
