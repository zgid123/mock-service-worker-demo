import * as React from 'react';

import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react';

import { TypeIcon } from './TypeIcon';

import type { IPokemonProps as IPokeProps } from './interface';

interface IPokemonProps {
  data: IPokeProps;
}

export function Pokemon({ data, ...props }: IPokemonProps): JSX.Element {
  const { no, name, image, types } = data;

  return (
    <Box {...props} w='100%' bgColor='#fff'>
      <Flex
        h='140px'
        bgColor='#f5f5f5'
        alignItems='center'
        justifyContent='center'
      >
        <Image src={image} alt='' />
      </Flex>
      <Stack
        my={5}
        p={15}
        isInline={true}
        alignItems='center'
        justifyContent='space-between'
      >
        <Text>#{no}</Text>
      </Stack>
      <Stack spacing={5} p={15}>
        <Text fontWeight='bold' fontSize='20px'>
          {name}
        </Text>
        <Stack isInline={true} spacing={10}>
          {types.map((type) => {
            return <TypeIcon key={type.id} data={type} />;
          })}
        </Stack>
      </Stack>
    </Box>
  );
}
