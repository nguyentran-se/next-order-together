import { createTheme } from '@mui/material/styles';
import { primary } from './colors/primary';
import { secondary } from './colors/secondary';
import { functionalColors } from './colors/functional';

const theme = createTheme({
  palette: {
    primary: {
      main: primary[500],
    },
    secondary: {
      main: secondary[400],
    },
    info: {
      main: functionalColors['info'],
    },
    infoBg: {
      main: functionalColors['infoBg'],
    },
    success: {
      main: functionalColors['success'],
    },
    successBg: {
      main: functionalColors['successBg'],
    },
    error: {
      main: functionalColors['error'],
    },
    errorBg: {
      main: functionalColors['errorBg'],
    },
    warning: {
      main: functionalColors['warning'],
    },
    warningBg: {
      main: functionalColors['warningBg'],
    },
  },
});

export default theme;