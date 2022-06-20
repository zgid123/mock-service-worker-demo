import { api } from 'utils/api';

import type { IPokemonProps } from 'interface';

export function getPokemons(): Promise<IPokemonProps[]> {
  return api.get({
    endpoint: '/pokemons',
  });
}
