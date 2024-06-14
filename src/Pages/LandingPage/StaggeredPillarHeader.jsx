import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const StaggeredPillarHeader = () => {
  const containerVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 100 },
        duration: 0.5
      }
    }
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="flex flex-col items-end"
      >
        <motion.h2 className="text-huge font-bold" variants={itemVariants}>
          4
        </motion.h2>
        <motion.h3 className="text-8xl font-semibold uppercase" variants={itemVariants}>
          Pillars
        </motion.h3>
        <motion.h5 className="text-7xl font-thin" variants={itemVariants}>
          of Education
        </motion.h5>
      </motion.div>
  );
};

