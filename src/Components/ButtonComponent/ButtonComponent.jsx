import React from "react";
import "./ButtonComponent.css";
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa6";
export default function ButtonComponent({ text, type, onClick }) {
  return (
    <motion.button
      whileHover={{
        scale: 1.06,
      }}
      whileTap={{ scale: 1 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className={` ${type}  px-10 py-3 text-black  rounded-sm flex justify-center items-center gap-2 shadow-lg transition-colors  cursor-pointer`}
      onClick={onClick}
    >
      <FaPlus />
      {text}
    </motion.button>
  );
}
