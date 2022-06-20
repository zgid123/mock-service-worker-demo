import { Box, Flex, Grid, Heading, Stack } from '@chakra-ui/react';

import type { GetServerSideProps } from 'next';

import { getPokemons } from '../features/pokemon/api';
import { Pokemon } from '../features/pokemon/Pokemon';

import type { IPokemonProps } from '../features/pokemon/interface';

interface IHomeProps {
  data: IPokemonProps[];
}

function Home({ data }: IHomeProps): JSX.Element {
  if (!data.length) {
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

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const data = await getPokemons();

    return {
      props: { data },
    };
  } catch (err) {
    return {
      props: {
        data: [],
      },
    };
  }
};

export default Home;
