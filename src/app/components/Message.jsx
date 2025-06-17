import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  offscreen: { opacity: 0, y: 60 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.18, duration: 0.9 }
  }
};

const PresidentMessageCard = ({
  presidentName = "Melody Santos",
  presidentImg = "/images/president.jpg",
  message = "INSPIRE NEXT GLOBAL Inc., since 2012, has gained favor among prominent conglomerates, engaging in a wide range of activities, including microfinance, real estate development, sales, management, and national infrastructure projects. All of this is thanks to everyone, and we never forget to express our gratitude to all our employees. Our company is committed to creating happiness for everyone and contributing to a prosperous life. We strive to make each day a source of smiles and move towards a brighter future for both individuals and corporate development.",
  title = "Message from the President"
}) => (
  <motion.div
    className="bg-white rounded-lg shadow-xl p-8 flex flex-col items-center text-center max-w-xl mx-auto"
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: false, amount: 0.25 }}
    variants={cardVariants}
  >
    <img
      src={presidentImg}
      alt={presidentName}
      className="w-24 h-24 object-cover rounded-full shadow mb-4"
      style={{ background: "#eee" }}
    />
    <h3 className="text-[#208704] text-2xl font-bold mb-2">{title}</h3>
    <p className="text-gray-700 text-base mb-4">{message}</p>
    <span className="font-semibold text-[#039c00] mt-2">{presidentName}</span>
    <span className="text-gray-500 text-sm">President</span>
  </motion.div>
);

export default PresidentMessageCard;