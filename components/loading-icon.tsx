'use client';

import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa6';

export function LoadingIcon() {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: 'easeOut',
      }}
      className="flex flex-col items-center"
    >
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="w-16 h-16 rounded-full bg-white/30 dark:bg-black/30 backdrop-blur-lg flex items-center justify-center"
      >
        <FaCode className="w-8 h-8 text-primary dark:text-primary" />
      </motion.div>
    </motion.div>
  );
}
