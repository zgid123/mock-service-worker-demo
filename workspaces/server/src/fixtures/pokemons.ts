import raichu from './images/raichu';
import mewtwo from './images/mewtwo';
import sylveon from './images/sylveon';
import victini from './images/victini';
import gyarados from './images/gyarados';
import exeggutor from './images/exeggutor';
import internape from './images/infernape';
import charizard from './images/charizard';
import mewtwoXMega from './images/mega/mewtwoX.mega';
import mewtwoYMega from './images/mega/mewtwoY.mega';
import raichuAlola from './images/alola/raichu.alola';
import gyaradosMega from './images/mega/gyarados.mega';
import charizardXMega from './images/mega/charizardX.mega';
import charizardYMega from './images/mega/charizardY.mega';
import exeggutorAlola from './images/alola/exeggutor.alola';
import {
  fire,
  dark,
  grass,
  fairy,
  water,
  dragon,
  flying,
  psychic,
  electric,
  fighting,
  ITypeProps,
} from './pokemonTypes';
import {
  blaze,
  moxie,
  frisk,
  drought,
  unnerve,
  harvest,
  staticc,
  insomnia,
  ironFist,
  pixilate,
  pressure,
  cuteCharm,
  steadfast,
  solarPower,
  intimidate,
  toughClaws,
  surgeSurfer,
  victoryStar,
  moldBreaker,
  chlorophyll,
  lightningRod,
  IAbilityProps,
} from './pokemonAbilities';
import {
  vCreate,
  inferno,
  recover,
  overheat,
  psyshock,
  moonblast,
  psystrike,
  machPunch,
  hydroPump,
  leafStorm,
  solarBeam,
  auraSphere,
  dragonClaw,
  voltTackle,
  flameWheel,
  earthquake,
  flareBlitz,
  woodHammer,
  closeCombat,
  searingShot,
  thunderBolt,
  dragonDance,
  electroBall,
  thunderPunch,
  drainingKiss,
  dazzlingGleam,
  IMoveProps,
} from './pokemonMoves';

interface IBasicProps {
  image: string;
  types: ITypeProps[];
  abilities: IAbilityProps[];
}

export interface IPokemonProps extends IBasicProps {
  id: number;
  no: string;
  name: string;
  moves: IMoveProps[];
  alola?: IBasicProps;
  mega?:
    | IBasicProps
    | {
        x: IBasicProps;
        y: IBasicProps;
      };
}

const pokemons: IPokemonProps[] = [
  {
    id: 392,
    no: '392',
    name: 'Infernape',
    image: internape,
    types: [fire, fighting],
    abilities: [blaze, ironFist],
    moves: [closeCombat, machPunch, flareBlitz, flameWheel],
  },
  {
    id: 494,
    no: '494',
    name: 'Victini',
    image: victini,
    types: [fire, psychic],
    abilities: [victoryStar],
    moves: [searingShot, vCreate, flareBlitz, overheat, inferno],
  },
  {
    id: 26,
    no: '026',
    name: 'Raichu',
    image: raichu,
    types: [electric],
    abilities: [staticc, lightningRod],
    moves: [thunderPunch, thunderBolt, electroBall, voltTackle],
    alola: {
      image: raichuAlola,
      types: [electric, psychic],
      abilities: [surgeSurfer],
    },
  },
  {
    id: 6,
    no: '006',
    name: 'Charizard',
    image: charizard,
    types: [fire, flying],
    abilities: [blaze, solarPower],
    moves: [flareBlitz, dragonClaw, thunderPunch, inferno],
    mega: {
      x: {
        image: charizardXMega,
        types: [fire, dragon],
        abilities: [toughClaws],
      },
      y: {
        image: charizardYMega,
        types: [fire, flying],
        abilities: [drought],
      },
    },
  },
  {
    id: 700,
    no: '700',
    name: 'Sylveon',
    image: sylveon,
    types: [fairy],
    abilities: [cuteCharm, pixilate],
    moves: [moonblast, drainingKiss, dazzlingGleam, psyshock],
  },
  {
    id: 150,
    no: '150',
    name: 'Mewtwo',
    image: mewtwo,
    types: [psychic],
    abilities: [pressure, unnerve],
    moves: [psystrike, psyshock, auraSphere, recover],
    mega: {
      x: {
        image: mewtwoXMega,
        types: [psychic, fighting],
        abilities: [steadfast],
      },
      y: {
        image: mewtwoYMega,
        types: [psychic],
        abilities: [insomnia],
      },
    },
  },
  {
    id: 130,
    no: '130',
    name: 'Gyarados',
    image: gyarados,
    types: [water, flying],
    abilities: [intimidate, moxie],
    moves: [dragonDance, hydroPump, thunderBolt, earthquake],
    mega: {
      image: gyaradosMega,
      types: [water, dark],
      abilities: [moldBreaker],
    },
  },
  {
    id: 103,
    no: '103',
    name: 'Exeggutor',
    image: exeggutor,
    types: [grass, psychic],
    abilities: [chlorophyll, harvest],
    moves: [psyshock, woodHammer, leafStorm, solarBeam],
    alola: {
      image: exeggutorAlola,
      types: [grass, dragon],
      abilities: [frisk, harvest],
    },
  },
];

export default pokemons;
