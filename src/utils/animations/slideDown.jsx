import React from 'react'
import { motion } from "motion/react"

const SlideDown = ({ children, delay = 1, className }) => {
    const slideLeftVariants = {
        offscreen: {
            y: -60,
            opacity: 0
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                // type: "spring",
                // bounce: 0.4,
                duration: 0.6,
                delay: (delay === 1 ? 0 : 0.1 * delay)
            }
        }
    };
    return (
        <motion.div
            variants={slideLeftVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0 }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export default SlideDown