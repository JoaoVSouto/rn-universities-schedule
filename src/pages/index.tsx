import type { NextPage } from 'next';
import Head from 'next/head';
import {
  ButtonGroup,
  chakra,
  Container,
  Flex,
  Heading,
  shouldForwardProp,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { usePersistedState } from 'hooks/usePersistedState';

import type { Universities } from 'types/Universities';

import { schedules } from 'data/schedules';

import { Bubble } from 'components/Bubble';
import { UniversityButton } from 'components/UniversityButton';
import { Schedule } from 'components/Schedule';
import { Signature } from 'components/Signature';

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => shouldForwardProp(prop) || prop === 'transition',
});

const Home: NextPage = () => {
  const [university, setUniversity] = usePersistedState<Universities>(
    '@university-schedule',
    'ifrn'
  );

  const chosenSchedule = schedules[university];

  function handleChangeUniversity(chosenUniversity: Universities) {
    return () => {
      setUniversity(chosenUniversity);
    };
  }

  return (
    <>
      <Head>
        <title>
          Horários Universitários
          {typeof window !== 'undefined' && ` - ${university.toUpperCase()}`}
        </title>
      </Head>

      <Container maxW="container.xl" mt="10" mb="8">
        <motion.div layout>
          <Heading
            as="h1"
            fontSize={['4xl', '5xl', '6xl', '7xl']}
            textAlign="center"
            bgGradient="linear(114.85deg, blue.500 -16.23%, green.200 102.97%)"
            bgClip="text"
            userSelect="none"
          >
            Horários Universitários
          </Heading>
        </motion.div>
        <motion.div layout>
          <Flex justify="center" mt="8">
            <ButtonGroup
              isAttached
              color="gray.200"
              fontSize={{ base: 'xl', lg: '2xl' }}
              height={{ base: '12', lg: '16' }}
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
        </motion.div>

        <StyledDiv layout pos="relative" maxW="985" mx="auto" mt="10">
          <Schedule data={chosenSchedule} />

          <Bubble
            w="32"
            h="32"
            transform="rotate(65deg)"
            top="0.75rem"
            left="-3.375rem"
          />
          <Bubble
            w="14"
            h="14"
            transform="rotate(-95deg)"
            top="2.3125rem"
            right="1.5rem"
          />
          <Bubble
            variant="green"
            w="28"
            h="28"
            transform="rotate(-63deg)"
            bottom="3.3125rem"
            right="-3.5rem"
          />
          <Bubble
            w="8"
            h="8"
            transform="rotate(-63deg)"
            bottom="2.375rem"
            right="14.6875rem"
          />
          <Bubble
            variant="green"
            w="12"
            h="12"
            transform="rotate(-63deg)"
            bottom="0.5625rem"
            left="0.125rem"
          />
        </StyledDiv>

        <motion.div layout>
          <Signature />
        </motion.div>
      </Container>

      <Bubble
        w="80"
        h="80"
        position="fixed"
        transform="rotate(55deg)"
        top="-8.8125rem"
        right="-12.8125rem"
        display={{ base: 'none', md: 'block' }}
      />

      <Bubble
        variant="green"
        w="80"
        h="80"
        transform="rotate(-63deg)"
        position="fixed"
        bottom="-9.75rem"
        left="-15.1875rem"
        display={{ base: 'none', md: 'block' }}
      />
    </>
  );
};

export default Home;
