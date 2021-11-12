import { Box, BoxProps } from '@chakra-ui/react';
import { motion, HTMLMotionProps } from 'framer-motion';

type Variants = 'blue' | 'green';

type BubbleProps = {
  variant?: Variants;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  position?: 'absolute' | 'fixed';
  motionProps?: HTMLMotionProps<'div'>;
} & BoxProps;

const gradientByVariant = {
  green: 'linear(to-b, green.275 0%, green.250 48.96%, cyan.600 100%)',
  blue: 'linear(to-b, cyan.400 0%, cyan.800 100%)',
};

export function Bubble({
  variant = 'blue',
  top,
  left,
  right,
  bottom,
  position = 'absolute',
  motionProps,
  ...rest
}: BubbleProps) {
  return (
    <motion.div
      layout
      style={{ position, top, left, right, bottom, zIndex: -1 }}
      {...motionProps}
    >
      <Box
        bgGradient={gradientByVariant[variant]}
        borderRadius="full"
        {...rest}
      />
    </motion.div>
  );
}
