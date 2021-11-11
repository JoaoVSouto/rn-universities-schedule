import * as React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  StackDivider,
  Text,
  VStack,
} from '@chakra-ui/react';

import type { Universities } from 'types/Universities';

import { schedules } from 'data/schedules';

import { Bubble } from 'components/Bubble';
import { UniversityButton } from 'components/UniversityButton';

const Home: NextPage = () => {
  const [university, setUniversity] = React.useState<Universities>('ifrn');

  const chosenSchedule = schedules[university];

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

      <Container maxW="container.xl" mt="10" mb="8">
        <Heading
          as="h1"
          fontSize={['4xl', '5xl', '6xl', '7xl']}
          textAlign="center"
          bgGradient="linear(114.85deg, blue.500 -16.23%, green.200 102.97%)"
          bgClip="text"
        >
          Horários Universitários
        </Heading>
        <Flex justify="center" mt="8">
          <ButtonGroup
            isAttached
            color="gray.500"
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

        <Box pos="relative" maxW="985" mx="auto" mt="10">
          <Stack
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            spacing={{ base: '6', md: '4' }}
            bgGradient="linear(to-b, cyan.10 0%, green.10 100%)"
            backdropFilter="blur(20px)"
            borderRadius="40"
            pt={{ base: '6', md: '8', lg: '10' }}
            px={{ base: '10', md: '12', lg: '14' }}
            pb={{ base: '10', md: '12', lg: '14' }}
            w={{ base: 'max-content', md: 'unset' }}
            mx="auto"
            divider={
              <StackDivider
                borderColor="gray.100"
                borderStyle="dashed"
                height={{ md: '21rem' }}
                width={{ base: '100%', md: 'unset' }}
                alignSelf="flex-end"
              />
            }
          >
            {chosenSchedule.map(schedule => (
              <VStack key={schedule.shift} spacing={{ base: '4', md: '12' }}>
                <Heading variant="shift">{schedule.shift}</Heading>

                <VStack spacing={{ base: '4', md: '6' }} align="start">
                  {schedule.schedules.map(({ description, stamp }) => (
                    <HStack key={stamp} spacing="4">
                      <Text fontSize={{ base: 'lg', lg: '2xl' }}>{stamp}</Text>
                      <Text fontSize={{ base: 'lg', lg: '2xl' }}>
                        {description}
                      </Text>
                    </HStack>
                  ))}
                </VStack>
              </VStack>
            ))}
          </Stack>

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
        </Box>
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
      </Container>

      <Bubble
        w="80"
        h="80"
        pos="fixed"
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
        pos="fixed"
        bottom="-9.75rem"
        left="-15.1875rem"
        display={{ base: 'none', md: 'block' }}
      />
    </>
  );
};

export default Home;
