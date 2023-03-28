export const responsive = (pc: string, mobile: string) => `
  @media screen and (min-width: 1081px) {
    ${pc}
  }

  @media screen and (max-width: 1080px) {
    ${mobile}
  }
`;

export type responsiveSize = string | [string, string];

export const propResponsive = (prop: string, value: responsiveSize) => {
  if (typeof value === 'string') {
    return `${prop}: ${value};`;
  }

  return responsive(`${prop}: ${value[0]};`, `${prop}: ${value[1]};`);
};

export const responsiveMap = (size: responsiveSize, f: (_: string) => string): responsiveSize => {
  if (typeof size === 'string') {
    return f(size);
  }

  return [f(size[0]), f(size[1])];
};

export const pcOnly = (style: string) => responsive(style, 'display: none;');
export const mobileOnly = (style: string) => responsive('display: none;', style);
export const colors = {
  white: '#FFFFFF',
  black: '#000000',
  dimmedwhite: '#939393',
  dimmedblack: '#939393',
  darkgray: '#555555',
  gray: '#686868',
  lightgray: '#F6F6F6',
  navy: '#0D3A4F',
  orange: '#FF7A00',
};
