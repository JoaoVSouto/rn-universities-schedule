import {
  Heading,
  HStack,
  Stack,
  StackDivider,
  Text,
  VStack,
} from '@chakra-ui/react';

type Schedule = {
  stamp: string;
  description: string;
};

type ScheduleData = {
  shift: string;
  schedules: Schedule[];
};

type ScheduleProps = {
  data: ScheduleData[];
};

export function Schedule({ data }: ScheduleProps) {
  return (
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
          width={{ base: '100%', md: 'unset' }}
          // not proud of that 😎
          mt={{ md: '5.25rem !important' }}
        />
      }
    >
      {data.map(schedule => (
        <VStack key={schedule.shift} spacing={{ base: '4', md: '12' }}>
          <Heading variant="shift">{schedule.shift}</Heading>

          <VStack spacing={{ base: '4', md: '6' }} align="start">
            {schedule.schedules.map(({ description, stamp }) => (
              <HStack key={stamp} spacing="4">
                <Text fontSize={{ base: 'lg', lg: '2xl' }}>{stamp}</Text>
                <Text fontSize={{ base: 'lg', lg: '2xl' }}>{description}</Text>
              </HStack>
            ))}
          </VStack>
        </VStack>
      ))}
    </Stack>
  );
}
