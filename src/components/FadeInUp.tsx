import * as React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

type FadeInUpProps = {
  children: React.ReactNode;
  delay?: number;
} & HTMLMotionProps<'div'>;

export function FadeInUp({ children, delay = 0, ...rest }: FadeInUpProps) {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      transition={{ duration: 0.5, delay }}
      variants={{ show: { y: 0, opacity: 1 } }}
      animate="show"
      {...rest}
    >
      {children}
    </motion.div>
  );
}
