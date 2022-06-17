import {
  map,
  join,
  over,
  pipe,
  split,
  toUpper,
  toLower,
  lensIndex,
} from 'ramda';

interface ICombineOptionsProps {
  joinWith: string;
}

interface IHumanizeOptionsProps {
  capitalize?: boolean;
}

function compact(source: (string | undefined)[]): string[] {
  return source.filter((s) => !!s) as string[];
}

export function combine(
  opts: ICombineOptionsProps | string | undefined = '',
  ...params: (string | undefined)[]
): string {
  let options: ICombineOptionsProps = { joinWith: ' ' };

  if (typeof opts === 'object') {
    options = opts;
  } else {
    params = [opts, ...params];
  }

  const { joinWith } = options;

  return compact(params).join(joinWith);
}

export const capitalize = pipe(
  split(''),
  over(lensIndex(0), toUpper),
  join(''),
);

export function humanize(
  source: string,
  opts: IHumanizeOptionsProps = {},
): string {
  const { capitalize: toCapitalize = false } = opts;
  const humanizedSource = (source || '')
    .replace(/_/g, ' ')
    .replace(/(?!^)[A-Z]/g, (replacement) => {
      return ` ${replacement}`;
    });

  if (toCapitalize) {
    return pipe(
      toLower,
      split(' '),
      map(capitalize),
      join(' '),
    )(humanizedSource);
  }

  return humanizedSource;
}
