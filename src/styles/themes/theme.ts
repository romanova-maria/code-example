/*
 * Theme is an important part of design system. It should be developed in close collaboration with UI/UX team.
 * Use the same names and structure as designers have, so you can speak the same language with them.
 * Bigger schema can be divided into several files, e.g. colors, components, etc
 * Theme should also contain spacing values, typography and a base section with
 * base font-size, font-color, background-color, etc
 * */

export const colors = {
  white: '#ffffff', // <- one day the UI/UX team will decide to change this color to "more milky" and you will thank me for that <3
  lightBlue: '#D7EEF1',
  blue: '#027da8',
  darkBlue: '#0296cb',
  theDarkestBlue: '#0277a1',
  red: '#d73434',
  darkRed: '#b72c2c',
  theDarkestRed: '#a22929',
  dirtyBlue: '#abccd7',
  green: '#258816',
  orange: '#f5b979'
};
type Colors = Record<keyof typeof colors, string>;
type ColorValue = Colors[keyof typeof colors];

export type Palette = {
  primary: ColorValue;
  danger: ColorValue;
  disabled: ColorValue;
  success: ColorValue;
  focus: ColorValue;
};
export const palette: Palette = {
  primary: colors.blue,
  danger: colors.red,
  disabled: colors.dirtyBlue,
  success: colors.green,
  focus: colors.orange
};

type Color = Colors[keyof typeof colors] | Palette;

type Components = {
  content: {
    width: string;
  };
  header: {
    height: string;
    bgColor: Color;
  };
  footer: {
    height: string;
    bgColor: Color;
  };
  button: {
    height: string;
    borderRadius: string;
    colors: {
      primary: Color;
      danger: Color;
      hover: Color;
      active: Color;
    };
  };
};

const components: Components = {
  content: {
    width: '80rem'
  },
  header: {
    height: '6rem',
    bgColor: colors.lightBlue
  },
  footer: {
    height: '10rem',
    bgColor: colors.lightBlue
  },
  button: {
    height: '3rem',
    borderRadius: '0.375rem',
    colors: {
      primary: palette.primary,
      danger: palette.danger,
      hover: colors.darkBlue,
      active: colors.theDarkestBlue
    }
  }
};

export interface Theme {
  colors: Record<keyof typeof colors, string>;
  palette: Palette;
  components: Components;
}

const theme: Theme = {
  colors,
  palette,
  components
};

export default theme;
