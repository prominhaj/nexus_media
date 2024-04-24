"use client";
import { motion } from 'framer-motion';

const FramerMotion = ({ children }) => {
    return (
        <motion.div
            animate={{
                rotate: [0, 360],
            }}
            transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear'
            }}
        >
            {children}
        </motion.div>
    );
};

export default FramerMotion;