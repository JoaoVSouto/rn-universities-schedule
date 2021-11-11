import { Box, BoxProps } from '@chakra-ui/react';

type Variants = 'blue' | 'green';

type BubbleProps = {
  variant?: Variants;
} & BoxProps;

const gradientByVariant = {
  green: 'linear(to-b, green.275 0%, green.250 48.96%, cyan.600 100%)',
  blue: 'linear(to-b, cyan.400 0%, cyan.800 100%)',
};

export function Bubble({ variant = 'blue', ...rest }: BubbleProps) {
  return (
    <Box
      bgGradient={gradientByVariant[variant]}
      borderRadius="full"
      pos="absolute"
      zIndex={-1}
      {...rest}
    />
  );
}
