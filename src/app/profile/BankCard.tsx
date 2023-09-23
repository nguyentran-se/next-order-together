import { BankCredentials } from '@/interfaces/host.interface';
import { Box, SxProps } from '@mui/material';
// import './styles.scss';

const cardStyles: SxProps = {
  width: 320,
  height: 200,
  borderRadius: '10px',
  perspective: 1000,
};

const cardInnerStyles: SxProps = {
  position: 'relavtive',
  width: '100%',
  height: '100%',
  borderRadius: 10,
  transition: 'transform 600ms ease',
  transformStyle: 'preserve-3d',
  boxShadow: '0 0 25px 2px rgba(black, 0.2)',
};

const cardFrontStyles: SxProps = {
  position: 'relative',
  top: 0,
  width: '100%',
  height: '100%',
  borderRadius: '10px',
  overflow: 'hidden',
  backfaceVisibility: 'hidden',
  background: 'linear-gradient(321.03deg, #01adef 0%, #0860bf 91.45%)',

  transition: 'transform 300ms ease-in-out',
};

const cardBgStyles: SxProps = {
  position: 'absolute',
  top: -20,
  right: -120,
  width: 380,
  height: 250,
  background: 'linear-gradient(321.03deg, #01adef 0%, #0860bf 91.45%)',
  borderTopLeftRadius: '100%',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: -20,
    right: -80,
    width: 380,
    height: 250,
    background: 'linear-gradient(321.03deg, #01adef 0%, #0860bf 91.45%)',
    borderTopLeftRadius: '100%',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: -20,
    right: -120,
    width: 380,
    height: 250,
    background: 'linear-gradient(321.03deg, #01adef 0%, #0860bf 91.45%)',
    borderTopLeftRadius: '100%',
  },
};

const cardGlowStyles: SxProps = {
  position: 'absolute',
  top: -140,
  left: -65,
  height: 200,
  width: 400,
  background: 'rgba(0, 183, 255, 0.4)',
  filter: 'blur(10px)',
  borderRadius: '100%',
  transform: 'skew(-15deg, -15deg)',
};

const cardContactlessStyles: SxProps = {
  position: 'absolute',
  right: 15,
  top: 55,
  transform: 'scale(0.5)',
};

const cardChipStyles: SxProps = {
  position: 'absolute',
  top: 65,
  left: 25,
  width: 45,
  height: 34,
  borderRadius: '5px',
  backgroundColor: '#ffda7b',
  overflow: 'hidden',

  '&::before': {
    content: '""',
    position: 'absolute',
    left: '49%',
    top: '-7%',
    transform: 'translateX(-50%)',
    background: '#ffda7b',
    border: '1px solid #a27c1f',
    width: '25%',
    height: '110%',
    borderRadius: '100%',
    zIndex: 2,
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    top: '30%',
    left: '-10%',
    background: 'transparent',
    border: '1px solid #a27c1f',
    width: '120%',
    height: '33%',
  },
};

const cardHolderStyles: SxProps = {
  position: 'absolute',
  left: 25,
  bottom: 30,
  color: 'white',
  fontSize: 14,
  letterSpacing: '0.2em',
  filter: 'drop-shadow(1px 1px 1px rgba(black, 0.3))',
};

const cardNumberStyles: SxProps = {
  position: 'absolute',
  left: 25,
  bottom: 65,
  color: 'white',
  fontSize: 16,
  fontWeight: 600,
  letterSpacing: '0.2em',
  filter: 'drop-shadow(1px 1px 1px rgba(black, 0.3))',
};

const cardValidStyles: SxProps = {
  position: 'absolute',
  right: 25,
  bottom: 30,
  color: 'white',
  fontSize: 14,
  letterSpacing: '0.2em',
  filter: 'drop-shadow(1px 1px 1px rgba(black, 0.3))',

  '&::before': {
    content: '""GOOD THRU"',
    position: 'absolute',
    top: 1,
    left: -35,
    width: 50,
    fontSize: 7,
  },
};

function BankCard({ bankCredentials }: { bankCredentials: BankCredentials }) {
  const { bankAccount, bankName, name } = bankCredentials;
  return (
    <>
      <Box sx={cardStyles}>
        <Box sx={cardInnerStyles}>
          <Box sx={cardFrontStyles}>
            <Box sx={cardBgStyles}></Box>
            <Box sx={cardGlowStyles}></Box>
            <Box sx={cardContactlessStyles}>
              <svg xmlns="http://www.w3.org/2000/svg" width="46" height="56">
                <path
                  fill="none"
                  stroke="#f9f9f9"
                  stroke-width="6"
                  stroke-linecap="round"
                  d="m35,3a50,50 0 0,1 0,50M24,8.5a39,39 0 0,1 0,39M13.5,13.55a28.2,28.5
  0 0,1 0,28.5M3,19a18,17 0 0,1 0,18"
                />
              </svg>
            </Box>
            <Box sx={cardChipStyles}></Box>
            <Box sx={cardHolderStyles}>{name}</Box>
            <Box sx={cardNumberStyles}>{bankAccount}</Box>
            <Box sx={cardValidStyles}>XX/XX</Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default BankCard;
