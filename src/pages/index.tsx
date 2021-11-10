import * as React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { ButtonGroup, Container, Flex, Heading } from '@chakra-ui/react';

import type { Universities } from 'types/Universities';

import { UniversityButton } from 'components/UniversityButton';

const Home: NextPage = () => {
  const [university, setUniversity] = React.useState<Universities>('ifrn');

  function handleChangeUniversity(chosenUniversity: Universities) {
    return () => {
      setUniversity(chosenUniversity);
    };
  }

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

        <Flex justify="center" mt="12">
          <ButtonGroup
            isAttached
            color="gray.500"
            fontSize="3xl"
            height="20"
            fontWeight="bold"
          >
            <UniversityButton
              university="ifrn"
              isActive={university === 'ifrn'}
              onClick={handleChangeUniversity('ifrn')}
            />
            <UniversityButton
              university="ufrn"
              isActive={university === 'ufrn'}
              onClick={handleChangeUniversity('ufrn')}
            />
          </ButtonGroup>
        </Flex>
      </Container>
    </>
  );
};

export default Home;
