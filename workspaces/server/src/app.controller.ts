import { Controller, Get } from '@nestjs/common';

import pokemonLists, { IPokemonProps } from 'fixtures/pokemons';

@Controller('api/v1/pokemons')
export class AppController {
  @Get()
  pokemons(): { data: IPokemonProps[] } {
    return {
      data: pokemonLists,
    };
  }
}
