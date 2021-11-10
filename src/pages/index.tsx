import * as React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import {
  ButtonGroup,
  Container,
  Flex,
  Heading,
  HStack,
  Stack,
  StackDivider,
  Text,
  VStack,
} from '@chakra-ui/react';

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
      </Container>
    </>
  );
};

export default Home;
