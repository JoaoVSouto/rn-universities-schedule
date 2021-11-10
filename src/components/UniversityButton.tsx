import { Button, ButtonProps } from '@chakra-ui/react';

import type { Universities } from 'types/Universities';

type UniversityButtonProps = {
  university: Universities;
  isActive: boolean;
} & ButtonProps;

type UniversitiesStyleObject = {
  [key in Universities]: {
    label: string;
    mainGradient: string;
    hoverGradient: string;
    boxShadowColor: string;
    borderTopLeftRadius?: string;
    borderBottomLeftRadius?: string;
    borderTopRightRadius?: string;
    borderBottomRightRadius?: string;
  };
};

const universities: UniversitiesStyleObject = {
  ifrn: {
    label: 'IFRN',
    mainGradient: 'linear(44.82deg, green.200 5.19%, green.800 82.45%)',
    hoverGradient: 'linear(to-r, green.200 5.19%, green.800 82.45%)',
    boxShadowColor: 'rgba(0, 255, 117, 0.6)',
    borderTopLeftRadius: '100',
    borderBottomLeftRadius: '10',
  },
  ufrn: {
    label: 'UFRN',
    mainGradient: 'linear(to-b, blue.300 0%, blue.700 100%)',
    hoverGradient: 'linear(190deg, blue.300 0%, blue.700 100%)',
    boxShadowColor: 'rgba(78, 95, 255, 0.6)',
    borderTopRightRadius: '10',
    borderBottomRightRadius: '100',
  },
};

export function UniversityButton({
  university,
  isActive,
  ...rest
}: UniversityButtonProps) {
  const chosenUniversity = universities[university];

  return (
    <Button
      bg="gray.900"
      bgGradient={isActive ? chosenUniversity.mainGradient : undefined}
      color={isActive ? 'white' : 'inherit'}
      borderTopLeftRadius={chosenUniversity.borderTopLeftRadius}
      borderBottomLeftRadius={chosenUniversity.borderBottomLeftRadius}
      borderTopRightRadius={chosenUniversity.borderTopRightRadius}
      borderBottomRightRadius={chosenUniversity.borderBottomRightRadius}
      fontSize="inherit"
      height="inherit"
      fontWeight="inherit"
      width="56"
      sx={{
        '&:hover': {
          color: 'white',
          bgGradient: isActive ? chosenUniversity.hoverGradient : undefined,
        },
        '&:hover, &:focus': {
          boxShadow: `0 0 0 3px ${chosenUniversity.boxShadowColor}`,
          zIndex: 1,
        },
      }}
      {...rest}
    >
      {chosenUniversity.label}
    </Button>
  );
}
