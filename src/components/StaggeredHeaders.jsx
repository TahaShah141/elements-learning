import React from 'react';
import { motion } from 'framer-motion';

export const StaggeredHeaders = () => {
  const containerVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 80 },
        duration: 0.3
      }
    }
  };

  return (
    <div className="text-8xl text-[#353535] font-bold">    
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 variants={itemVariants}>
          Life
        </motion.h1>
        <motion.h1 variants={itemVariants}>
          Long
        </motion.h1>
        <motion.h1 variants={itemVariants}>
          Learning.
        </motion.h1>
      </motion.div>
    </div>
  );
};

