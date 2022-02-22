import { HTMLAttributes, useEffect, useRef } from 'react';

import { motion } from 'framer-motion';

export function Container({ children }: HTMLAttributes<HTMLDivElement>) {
  return (
    <motion.div
      variants={{
        from: {
          opacity: '0%',
          // transform: 'translateX(4rem)',
        },
        to: {
          opacity: '100%',
          // transform: 'translateX(0rem)',
        },
      }}
      initial="from"
      exit="from"
      animate="to"
      style={{
        height: '100%',
        width: '100%',
      }}
      transition={{
        ease: 'easeInOut',
        duration: 0.1,
      }}>
      {children}
    </motion.div>
  );
}
