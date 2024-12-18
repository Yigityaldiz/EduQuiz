import { motion } from "framer-motion";
import * as React from "react";

interface GrowProps {
  children: React.ReactNode;
  duration?: number;
  className?: string;
}

const Grow: React.FC<GrowProps> = ({ children, duration = 0.5, className }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration, ease: "easeIn", type: "tween" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Grow;
