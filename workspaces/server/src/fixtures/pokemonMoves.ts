import {
  fire,
  fairy,
  dragon,
  normal,
  psychic,
  electric,
  fighting,
  ITypeProps,
  water,
  ground,
  grass,
} from './pokemonTypes';

export interface IMoveProps {
  id: number;
  name: string;
  power?: number;
  accuracy?: number;
  type: ITypeProps;
  powerPoint: number;
  category: 'physical' | 'special' | 'other';
}

export const closeCombat: IMoveProps = {
  id: 1,
  name: 'Close Combat',
  type: fighting,
  power: 120,
  accuracy: 100,
  powerPoint: 5,
  category: 'physical',
};

export const machPunch: IMoveProps = {
  id: 2,
  name: 'Mach Punch',
  type: fighting,
  power: 40,
  accuracy: 100,
  powerPoint: 30,
  category: 'physical',
};

export const flareBlitz: IMoveProps = {
  id: 3,
  name: 'Flaze Blitz',
  type: fire,
  power: 120,
  accuracy: 100,
  powerPoint: 15,
  category: 'physical',
};

export const flameWheel: IMoveProps = {
  id: 4,
  name: 'Flame Wheel',
  type: fire,
  power: 60,
  accuracy: 100,
  powerPoint: 25,
  category: 'physical',
};

export const searingShot: IMoveProps = {
  id: 5,
  name: 'Searing Shot',
  type: fire,
  power: 100,
  accuracy: 100,
  powerPoint: 5,
  category: 'special',
};

export const vCreate: IMoveProps = {
  id: 6,
  name: 'V-create',
  type: fire,
  power: 180,
  accuracy: 95,
  powerPoint: 5,
  category: 'physical',
};

export const overheat: IMoveProps = {
  id: 7,
  name: 'Overheat',
  type: fire,
  power: 130,
  accuracy: 90,
  powerPoint: 5,
  category: 'special',
};

export const thunderPunch: IMoveProps = {
  id: 8,
  name: 'Thunder Punch',
  type: electric,
  power: 75,
  accuracy: 100,
  powerPoint: 15,
  category: 'physical',
};

export const thunderBolt: IMoveProps = {
  id: 9,
  name: 'Thunder Bolt',
  type: electric,
  power: 90,
  accuracy: 100,
  powerPoint: 15,
  category: 'special',
};

export const electroBall: IMoveProps = {
  id: 10,
  name: 'Electro Ball',
  type: electric,
  power: -1,
  accuracy: 100,
  powerPoint: 10,
  category: 'special',
};

export const voltTackle: IMoveProps = {
  id: 11,
  name: 'Volt Tackle',
  type: electric,
  power: 120,
  accuracy: 100,
  powerPoint: 15,
  category: 'physical',
};

export const dragonClaw: IMoveProps = {
  id: 12,
  name: 'Dragon Claw',
  type: dragon,
  power: 80,
  accuracy: 100,
  powerPoint: 15,
  category: 'physical',
};

export const inferno: IMoveProps = {
  id: 13,
  name: 'Inferno',
  type: fire,
  power: 100,
  accuracy: 50,
  powerPoint: 5,
  category: 'special',
};

export const moonblast: IMoveProps = {
  id: 14,
  name: 'Moonblast',
  type: fairy,
  power: 95,
  accuracy: 100,
  powerPoint: 15,
  category: 'special',
};

export const drainingKiss: IMoveProps = {
  id: 15,
  name: 'Draining Kiss',
  type: fairy,
  power: 50,
  accuracy: 100,
  powerPoint: 10,
  category: 'special',
};

export const dazzlingGleam: IMoveProps = {
  id: 16,
  name: 'Dazzling Gleam',
  type: fairy,
  power: 80,
  accuracy: 100,
  powerPoint: 10,
  category: 'special',
};

export const psyshock: IMoveProps = {
  id: 17,
  name: 'Psyshock',
  type: psychic,
  power: 80,
  accuracy: 100,
  powerPoint: 10,
  category: 'special',
};

export const psystrike: IMoveProps = {
  id: 18,
  name: 'Psystrike',
  type: psychic,
  power: 100,
  accuracy: 100,
  powerPoint: 10,
  category: 'special',
};

export const auraSphere: IMoveProps = {
  id: 19,
  name: 'Aura Sphere',
  type: fighting,
  power: 80,
  powerPoint: 20,
  category: 'special',
};

export const recover: IMoveProps = {
  id: 20,
  name: 'Recover',
  type: normal,
  powerPoint: 10,
  category: 'other',
};

export const dragonDance: IMoveProps = {
  id: 21,
  name: 'Dragon Dance',
  type: dragon,
  powerPoint: 20,
  category: 'other',
};

export const hydroPump: IMoveProps = {
  id: 22,
  name: 'Hydro Pump',
  type: water,
  power: 110,
  accuracy: 80,
  powerPoint: 5,
  category: 'special',
};

export const earthquake: IMoveProps = {
  id: 23,
  name: 'Earthquake',
  type: ground,
  power: 100,
  accuracy: 100,
  powerPoint: 10,
  category: 'physical',
};

export const woodHammer: IMoveProps = {
  id: 24,
  name: 'Wood Hammer',
  type: grass,
  power: 90,
  accuracy: 100,
  powerPoint: 15,
  category: 'physical',
};

export const leafStorm: IMoveProps = {
  id: 25,
  name: 'Leaf Storm',
  type: grass,
  power: 130,
  accuracy: 90,
  powerPoint: 5,
  category: 'special',
};

export const solarBeam: IMoveProps = {
  id: 26,
  name: 'Solar Beam',
  type: grass,
  power: 120,
  accuracy: 100,
  powerPoint: 10,
  category: 'special',
};
