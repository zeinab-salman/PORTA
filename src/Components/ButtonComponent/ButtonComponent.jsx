import React from "react";
import "./ButtonComponent.css";
import { motion } from "framer-motion";

export default function ButtonComponent({
  text,
  typeclass,
  onClick,
  icon: Icon,
  padding,
}) {
  return (
    <motion.button
      whileHover={{
        scale: 1.02,
      }}
      whileTap={{ scale: 1.1 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className={` ${typeclass}  ${padding} rounded-sm flex justify-center items-center gap-2 shadow-lg transition-colors  cursor-pointer`}
      onClick={onClick}
    >
      <Icon />
      {text}
    </motion.button>
  );
}
