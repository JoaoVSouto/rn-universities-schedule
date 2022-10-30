import type { NextPage } from 'next';
import Head from 'next/head';
import { Box, ButtonGroup, Container, Flex, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { usePersistedState } from 'hooks/usePersistedState';

import type { Universities } from 'types/Universities';

import { schedules } from 'data/schedules';

import { Bubble } from 'components/Bubble';
import { UniversityButton } from 'components/UniversityButton';
import { Schedule } from 'components/Schedule';
import { Signature } from 'components/Signature';
import { FadeInUp } from 'components/FadeInUp';

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
          Horários de Aula -
          {typeof window !== 'undefined'
            ? ` ${university.toUpperCase()}`
            : ' UFRN & IFRN'}
        </title>
      </Head>

      <Container maxW="container.xl" mt="10" mb="8">
        <FadeInUp>
          <motion.div layout>
            <Heading
              as="h1"
              fontSize={['4xl', '5xl', '6xl', '7xl']}
              textAlign="center"
              bgGradient="linear(114.85deg, blue.500 -16.23%, green.200 102.97%)"
              bgClip="text"
              userSelect="none"
            >
              Horários de Aula
            </Heading>
          </motion.div>
        </FadeInUp>
        <FadeInUp delay={0.4}>
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
        </FadeInUp>

        <Box pos="relative" maxW="985" mx="auto" mt="10">
          <FadeInUp delay={0.6}>
            <motion.div layout>
              <Schedule data={chosenSchedule} />

              <Bubble
                w="32"
                h="32"
                transform="rotate(65deg)"
                top="0.75rem"
                left="-3.375rem"
                delay={1}
              />
              <Bubble
                w="14"
                h="14"
                transform="rotate(-95deg)"
                top="2.3125rem"
                right="1.5rem"
                delay={1.4}
              />
              <Bubble
                variant="green"
                w="28"
                h="28"
                transform="rotate(-63deg)"
                bottom="3.3125rem"
                right="-3.5rem"
                delay={1.1}
              />
              <Bubble
                w="8"
                h="8"
                transform="rotate(-63deg)"
                bottom="2.375rem"
                right="14.6875rem"
                delay={1.2}
              />
              <Bubble
                variant="green"
                w="12"
                h="12"
                transform="rotate(-63deg)"
                bottom="0.5625rem"
                left="0.125rem"
                delay={1.6}
              />
            </motion.div>
          </FadeInUp>
        </Box>

        <FadeInUp delay={0.8}>
          <motion.div layout>
            <Signature />
          </motion.div>
        </FadeInUp>
      </Container>

      <Bubble
        w="80"
        h="80"
        position="fixed"
        transform="rotate(55deg)"
        top="-8.8125rem"
        right="-12.8125rem"
        display={{ base: 'none', md: 'block' }}
        delay={2}
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
        delay={2.2}
      />
    </>
  );
};

export default Home;
