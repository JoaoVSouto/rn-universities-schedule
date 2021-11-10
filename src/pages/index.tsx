import type { NextPage } from 'next';
import Head from 'next/head';
import { Container, Heading } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Horários Universitários</title>
      </Head>

      <Container maxW="container.xl" mt="24">
        <Heading
          as="h1"
          size="4xl"
          textAlign="center"
          bgGradient="linear(114.85deg, blue.500 -16.23%, green.200 102.97%)"
          bgClip="text"
        >
          Horários Universitários
        </Heading>
      </Container>
    </>
  );
};

export default Home;
