import { HTMLAttributes, useEffect, useRef } from 'react';

import { motion } from 'framer-motion';

export function Container({ children }: HTMLAttributes<HTMLDivElement>) {
  return (
    <motion.div
      variants={{
        from: {
          opacity: '0%',
          transform: 'translateX(4rem)',
        },
        to: {
          opacity: '100%',
          transform: 'translateX(0rem)',
        },
      }}
      initial="from"
      exit="from"
      animate="to"
      transition={{
        ease: 'easeInOut',
        duration: 0.3,
      }}>
      {children}
    </motion.div>
  );
}
