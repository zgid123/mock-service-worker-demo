import * as React from 'react';

import { useMemo } from 'react';
import { Box } from '@chakra-ui/react';

import type { ITypeProps } from 'interface';

interface ITypeIconProps {
  data: ITypeProps;
}

export function TypeIcon({ data }: ITypeIconProps): JSX.Element {
  const { name } = data;

  const background = useMemo(() => {
    return {
      Dark: 'linear-gradient(180deg, #707070 50%, #707070 50%)',
      Fire: 'linear-gradient(180deg, #fd7d24 50%, #fd7d24 50%)',
      Fairy: 'linear-gradient(180deg, #fdb9e9 50%, #fdb9e9 50%)',
      Water: 'linear-gradient(180deg, #4592c4 50%, #4592c4 50%)',
      Normal: 'linear-gradient(180deg, #a4acaf 50%, #a4acaf 50%)',
      Flying: 'linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%)',
      Dragon: 'linear-gradient(180deg, #53a4cf 50%, #f16e57 50%)',
      Psychic: 'linear-gradient(180deg, #f366b9 50%, #f366b9 50%)',
      Electric: 'linear-gradient(180deg, #eed535 50%, #eed535 50%)',
      Fighting: 'linear-gradient(180deg, #d56723 50%, #d56723 50%)',
    };
  }, []);

  return (
    <Box
      w='80px'
      fontWeight='bold'
      textAlign='center'
      background={background[name as keyof typeof background]}
    >
      {name}
    </Box>
  );
}
