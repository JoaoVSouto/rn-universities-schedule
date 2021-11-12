import { Link, Text } from '@chakra-ui/react';

export function Signature() {
  return (
    <Text
      align="center"
      mt="10"
      color="gray.700"
      fontWeight="semibold"
      fontSize={{ base: 'sm', lg: 'md' }}
    >
      designed by{' '}
      <Link
        href="https://www.linkedin.com/in/mayra-perpetua/"
        target="_blank"
        rel="noopener noreferrer"
        color="green.300"
      >
        May
      </Link>{' '}
      &amp; developed by{' '}
      <Link
        href="https://www.linkedin.com/in/joao-vitor-souto/"
        target="_blank"
        rel="noopener noreferrer"
        color="cyan.300"
      >
        JV
      </Link>
    </Text>
  );
}
