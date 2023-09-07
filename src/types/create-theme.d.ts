import { PaletteColorOptions, PaletteColor } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    lightGrey: PaletteColor;
  }
  interface PaletteOptions {
    infoBg?: PaletteColorOptions;
    successBg?: PaletteColorOptions;
    errorBg?: PaletteColorOptions;
    warningBg?: PaletteColorOptions;
    lightGrey?: PaletteColorOptions;
  }
}

declare module '@mui/material/ButtonGroup' {
  interface ButtonGroupPropsColorOverrides {
    lightGrey: true;
  }
}
