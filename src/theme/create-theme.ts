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
    lightGrey: {
      main: secondary[100],
    }
  },
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '& .MuiTypography-root': {
            fontWeight: '500',
          },
          '&.Mui-selected': {
            backgroundColor: functionalColors['hoverBg'],
            color: primary[500],
            '& svg': {
              fill: primary[500],
            },
            '&::before': {
              position: 'absolute',
              content: '""',
              height: '10px',
              left: 0,
              borderLeft: '4px solid',
              borderRadius: '20px',
            },
          },
          '&:hover': {
            backgroundColor: functionalColors['hoverBg'],
            color: primary[500],
            '& svg': {
              fill: primary[500],
            },
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: '40px',
        },
      
      },
    },
      },
});

export default theme;
