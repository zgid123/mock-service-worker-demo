export interface IAbilityProps {
  id: number;
  name: string;
  description: string;
}

export const blaze: IAbilityProps = {
  id: 1,
  name: 'Blaze',
  description:
    'When HP is below 1/3rd its maximum, power of Fire-type moves is increased by 50%',
};

export const ironFist: IAbilityProps = {
  id: 2,
  name: 'Iron Fist',
  description: 'Powers up punching moves',
};

export const victoryStar: IAbilityProps = {
  id: 3,
  name: 'Victory Star',
  description: 'Accuracy for the Pokémon and Allys is raised by 10%',
};

// static is keyword
export const staticc: IAbilityProps = {
  id: 4,
  name: 'Static',
  description:
    'The opponent has a 30% chance of being induced with PARALYZE when using an attack, that requires physical contact, against this Pokémon',
};

export const lightningRod: IAbilityProps = {
  id: 5,
  name: 'Lightning Rod',
  description:
    "Electric-type moves are drawn to this Pokémon. Electric-type moves will do no damage and the Pokémon's SP ATK is raised one stage",
};

export const surgeSurfer: IAbilityProps = {
  id: 6,
  name: 'Surge Surfer',
  description: "Doubles the Pokémon's Speed stat on Electric Terrain",
};

export const solarPower: IAbilityProps = {
  id: 7,
  name: 'Solar Power',
  description:
    'During sunshine, the Pokémon’s Special Attack raises to 1.5 times but HP decreases by 1/8th the maximum HP every turn.',
};

export const toughClaws: IAbilityProps = {
  id: 8,
  name: 'Tough Claws',
  description: 'Increases the power of moves that make physical contact by 33%',
};

export const drought: IAbilityProps = {
  id: 9,
  name: 'Drought',
  description:
    'Weather changes to Intense Sunshine when the Pokémon enters the battle. As of X & Y, this lasts 5 turns',
};

export const cuteCharm: IAbilityProps = {
  id: 10,
  name: 'Cute Charm',
  description:
    'The opponent has a 30% chance of being induced with Attract when using an attack, that requires physical contact, against this Pokémon',
};

export const pixilate: IAbilityProps = {
  id: 11,
  name: 'Pixilate',
  description:
    'Increases the power of Normal-type moves by 30%. It then changes those moves to Fairy-type',
};

export const pressure: IAbilityProps = {
  id: 12,
  name: 'Pressure',
  description:
    'When this Pokémon is hit by a move, the opponent’s PP lowers by 2 rather than 1',
};

export const unnerve: IAbilityProps = {
  id: 13,
  name: 'Unnerve',
  description:
    'The opponent Pokémon will never use their held Berry while the Pokémon is in battle',
};

export const steadfast: IAbilityProps = {
  id: 14,
  name: 'Steadfast',
  description: 'Speed raises by one level every time the Pokémon flinches',
};

export const insomnia: IAbilityProps = {
  id: 15,
  name: 'Insomnia',
  description: 'The Pokémon cannot be put to Sleep while having this ability',
};

export const intimidate: IAbilityProps = {
  id: 16,
  name: 'Intimidate',
  description:
    'Upon entering battle, the opponent’s Attack lowers one stage. In a Double Battle, both opponents’ Attack are lowered. Pokémon with the Clear Body, Hyper Cutter, or White Smoke ability are unaffected. In a link battle, if both sides switch on the same turn, and first player sends out a Pokémon with Intimidate, the opponent’s Attack will be lowered before the opponent’s Pokémon switches',
};

export const moxie: IAbilityProps = {
  id: 17,
  name: 'Moxie',
  description:
    'Attack is raised by one stage when the Pokémon knocks out another Pokémon',
};

export const moldBreaker: IAbilityProps = {
  id: 18,
  name: 'Mold Breaker',
  description:
    "The Pokémon's moves are not affected by foe’s abilities during battle",
};

export const chlorophyll: IAbilityProps = {
  id: 19,
  name: 'Chlorophyll',
  description: 'When sunny, the Pokémon’s Speed doubles',
};

export const harvest: IAbilityProps = {
  id: 20,
  name: 'Harvest',
  description:
    'The Pokémon has a 50% chance of restoring a consumed berry. During sunshine, this chance increases to 100%',
};

export const frisk: IAbilityProps = {
  id: 21,
  name: 'Frisk',
  description: 'Reveals the foe’s held item',
};
