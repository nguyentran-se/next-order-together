import { IDish } from '@/app/_interfaces';
import { Card, CardMedia, Box, Stack, Typography, ListButton } from '@mui/material';

function DishCard({ dishInfo }: { dishInfo: IDish }) {
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
      <Stack pl={2} direction="column" justifyContent="space-between">
        <Stack direction="row" justifyContent="space-between">
          <Typography fontWeight="500">{dishInfo.name}</Typography>
          <Typography fontWeight="500" color="primary.main">
            {dishInfo.priceV2.amountDisplay}
          </Typography>
        </Stack>
        <Stack direction="row-reverse">
          <ListButton>
            
          </ListButton>
        </Stack>
      </Stack>
    </Card>
  );
}

export default DishCard;
