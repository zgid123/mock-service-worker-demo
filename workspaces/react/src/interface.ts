export interface ITypeProps {
  id: number;
  name: string;
}

export interface IAbilityProps {
  id: number;
  name: string;
  description: string;
}

export interface IMoveProps {
  id: number;
  name: string;
  power?: number;
  accuracy?: number;
  type: ITypeProps;
  powerPoint: number;
  category: 'physical' | 'special' | 'other';
}

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
