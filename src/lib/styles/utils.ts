export const responsive = (pc: string, mobile: string) => `
  @media screen and (min-width: 1081px) {
    ${pc}
  }

  @media screen and (max-width: 1080px) {
    ${mobile}
  }
`;

export type PropResponsive = string | [string, string];

export const propResponsive = (prop: string, value: PropResponsive) => {
  if (typeof value === 'string') {
    return `${prop}: ${value};`;
  }

  return responsive(`${prop}: ${value[0]};`, `${prop}: ${value[1]};`);
};

export const pcOnly = (style: string) => responsive(style, 'display: none;');
export const mobileOnly = (style: string) => responsive('display: none;', style);
