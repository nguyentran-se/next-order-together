import { IDish } from '@/app/_interfaces';
import { Button, ButtonGroup, Card, CardMedia, Stack, Typography, useTheme } from '@mui/material';

function DishCard({ dishInfo }: { dishInfo: IDish }) {
  const theme = useTheme();
  return (
    <Card
      elevation={0}
      sx={{
        height: 128,
        border: '1px solid rgba(0, 0, 0, 0.12)',
        borderRadius: '10px',
        width: 390,
        position: 'relative',
        display: 'flex',
        padding: '16px 24px',
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
      <Stack pl={2} direction="column" justifyContent="space-between" flexGrow={1}>
        <Stack direction="row" justifyContent="space-between">
          <Typography fontWeight="500" paddingRight={1}>
            {dishInfo.name}
          </Typography>
          <Typography fontWeight="500" color="primary.main">
            {dishInfo.priceV2.amountDisplay}
          </Typography>
        </Stack>
        <Stack direction="row-reverse">
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
    </Card>
  );
}

export default DishCard;
