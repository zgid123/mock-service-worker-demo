import { api } from '../../utils/api';
import { IPokemonProps } from './interface';

export function getPokemons(): Promise<IPokemonProps[]> {
  return api.get({
    endpoint: '/pokemons',
  });
}
