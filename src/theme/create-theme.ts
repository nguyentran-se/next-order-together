import { createTheme } from '@mui/material/styles';
import { primary } from './colors/primary';
import { secondary } from './colors/secondary';
import { functionalColors } from './colors/functional';
import { common } from '@mui/material/colors';

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
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          background: common.white,
        },
        root: {
          transition: 'ease-in-out 0.15s',
          border: 0,
          borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        },
      },
    },
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
    MuiModal: {
      defaultProps: {
        slotProps: {
          backdrop: {
            style: {
              opacity: 0.3,
            },
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          '& .MuiFormLabel-asterisk': {
            color: functionalColors['error'],
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        }
      }
    }
  },
});

export default theme;
