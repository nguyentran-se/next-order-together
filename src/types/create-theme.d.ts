import { PaletteColorOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    infoBg?: PaletteColorOptions;
    successBg?: PaletteColorOptions;
    errorBg?: PaletteColorOptions;
    warningBg?: PaletteColorOptions;
  }
}
