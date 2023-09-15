import { IDish } from '@/app/_interfaces';
import { Box, Button, ButtonGroup, Card, CardMedia, Stack, Typography, useTheme } from '@mui/material';

function DishCard({ dishInfo }: { dishInfo: IDish }) {
  const theme = useTheme();
  return (
    <Card
      elevation={0}
      sx={{
        height: 128,
        border: '1px solid rgba(0, 0, 0, 0.12)',
        borderRadius: '10px',
        // backup width
        // width: { xs: '100%', md: 300, lg: 350, xl: 390 },
        width: '100%',
        position: 'relative',
        display: 'flex',
        padding: { xs: '8px 12px', md: '16px 24px' },
      }}
    >
      <CardMedia
        component="img"
        image={dishInfo.imgHref}
        alt={dishInfo.name}
        sx={{
          width: '96px',
          borderRadius: '10px',
        }}
      ></CardMedia>
      <Box position="relative" pl={2} width="100%">
        <Stack direction="column"  justifyContent="space-between" height='100%'>
          <Typography fontWeight="500" paddingRight={1}>
            {dishInfo.name}
          </Typography>
          <Stack direction="row" justifyContent="space-between" sx={{
            
          }}>
            <Typography fontWeight="500" color="primary.main">
              {dishInfo.priceV2.amountDisplay}
            </Typography>
            {/* <Box position="absolute" bottom={0} right={0}> */}
            <ButtonGroup
              color="lightGrey"
              disableElevation
              variant="contained"
              aria-label="Disabled elevation buttons"
              sx={{
                alignItems: 'center',
                '& .MuiButton-root': {
                  padding: 0,
                  minWidth: 30,
                },
              }}
            >
              <Button style={{ border: 0 }}>-</Button>
              <Typography
                bgcolor={theme.palette.lightGrey.main}
                sx={{ padding: '0 5px', height: '100%', minWidth: 30, textAlign: 'center' }}
                component="div"
              >
                0
              </Typography>
              <Button>+</Button>
            </ButtonGroup>
          </Stack>
        </Stack>
      </Box>
    </Card>
  );
}

export default DishCard;
