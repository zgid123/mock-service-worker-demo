import * as React from 'react';

import { useFetch } from '@libs/rc-utils/queryHooks';
import { Box, Flex, Grid, Heading, Stack } from '@chakra-ui/react';

import { getPokemons } from './api';
import { Pokemon } from './Pokemon';

export function Overview(): JSX.Element {
  const { data, isLoading } = useFetch(getPokemons, ['fetchPokemons', []]);

  if (isLoading || !data) {
    return <Stack />;
  }

  return (
    <Box>
      <Flex mb={10} p={15} bgColor='white' justifyContent='space-between'>
        <Heading>List Pokemons</Heading>
      </Flex>
      <Grid templateColumns='repeat(4, 1fr)' gap={6}>
        {data.map((datumn) => {
          return <Pokemon key={datumn.no} data={datumn} />;
        })}
      </Grid>
    </Box>
  );
}
