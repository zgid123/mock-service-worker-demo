import * as React from 'react';

import { Link } from 'react-router-dom';
import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react';

import type { IPokemonProps as IPokeProps } from 'interface';

import { TypeIcon } from './TypeIcon';

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
        <Image src={image} />
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
        <Link to={`/pokemons/${no}`}>
          <Text fontWeight='bold' fontSize='20px'>
            {name}
          </Text>
        </Link>
        <Stack isInline={true} spacing={10}>
          {types.map((type) => {
            return <TypeIcon key={type.id} data={type} />;
          })}
        </Stack>
      </Stack>
    </Box>
  );
}
