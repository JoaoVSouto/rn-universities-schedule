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

import { Bubble } from 'components/Bubble';
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

      <Container maxW="container.xl" mt="24" mb="8">
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

        <Box pos="relative" maxW="985" mx="auto">
          <Stack
            direction="row"
            justify="space-between"
            spacing={0}
            bgGradient="linear(to-b, cyan.10 0%, green.10 100%)"
            backdropFilter="blur(20px)"
            borderRadius="40"
            mt="14"
            pt="10"
            px="14"
            pb="14"
            divider={
              <StackDivider
                borderColor="gray.100"
                borderStyle="dashed"
                height="21rem"
                alignSelf="flex-end"
              />
            }
          >
            <VStack spacing="12">
              <Heading variant="shift">Matutino</Heading>

              <VStack spacing="6">
                <HStack spacing="4">
                  <Text fontSize="2xl">M1</Text>
                  <Text fontSize="2xl">07h00 às 07h50</Text>
                </HStack>
                <HStack spacing="4">
                  <Text fontSize="2xl">M1</Text>
                  <Text fontSize="2xl">07h00 às 07h50</Text>
                </HStack>
                <HStack spacing="4">
                  <Text fontSize="2xl">M1</Text>
                  <Text fontSize="2xl">07h00 às 07h50</Text>
                </HStack>
                <HStack spacing="4">
                  <Text fontSize="2xl">M1</Text>
                  <Text fontSize="2xl">07h00 às 07h50</Text>
                </HStack>
                <HStack spacing="4">
                  <Text fontSize="2xl">M1</Text>
                  <Text fontSize="2xl">07h00 às 07h50</Text>
                </HStack>
                <HStack spacing="4">
                  <Text fontSize="2xl">M1</Text>
                  <Text fontSize="2xl">07h00 às 07h50</Text>
                </HStack>
              </VStack>
            </VStack>
            <VStack spacing="12">
              <Heading variant="shift">Vespertino</Heading>

              <VStack spacing="6">
                <HStack spacing="4">
                  <Text fontSize="2xl">M1</Text>
                  <Text fontSize="2xl">07h00 às 07h50</Text>
                </HStack>
                <HStack spacing="4">
                  <Text fontSize="2xl">M1</Text>
                  <Text fontSize="2xl">07h00 às 07h50</Text>
                </HStack>
                <HStack spacing="4">
                  <Text fontSize="2xl">M1</Text>
                  <Text fontSize="2xl">07h00 às 07h50</Text>
                </HStack>
                <HStack spacing="4">
                  <Text fontSize="2xl">M1</Text>
                  <Text fontSize="2xl">07h00 às 07h50</Text>
                </HStack>
                <HStack spacing="4">
                  <Text fontSize="2xl">M1</Text>
                  <Text fontSize="2xl">07h00 às 07h50</Text>
                </HStack>
                <HStack spacing="4">
                  <Text fontSize="2xl">M1</Text>
                  <Text fontSize="2xl">07h00 às 07h50</Text>
                </HStack>
              </VStack>
            </VStack>
            <VStack spacing="12">
              <Heading variant="shift">Noturno</Heading>

              <VStack spacing="6">
                <HStack spacing="4">
                  <Text fontSize="2xl">M1</Text>
                  <Text fontSize="2xl">07h00 às 07h50</Text>
                </HStack>
                <HStack spacing="4">
                  <Text fontSize="2xl">M1</Text>
                  <Text fontSize="2xl">07h00 às 07h50</Text>
                </HStack>
                <HStack spacing="4">
                  <Text fontSize="2xl">M1</Text>
                  <Text fontSize="2xl">07h00 às 07h50</Text>
                </HStack>
                <HStack spacing="4">
                  <Text fontSize="2xl">M1</Text>
                  <Text fontSize="2xl">07h00 às 07h50</Text>
                </HStack>
              </VStack>
            </VStack>
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
        <Text align="center" mt="10" color="gray.700" fontWeight="semibold">
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
      />

      <Bubble
        variant="green"
        w="80"
        h="80"
        transform="rotate(-63deg)"
        pos="fixed"
        bottom="-9.75rem"
        left="-15.1875rem"
      />
    </>
  );
};

export default Home;
