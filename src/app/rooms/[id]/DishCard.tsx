import { IDish, RoomInfo } from '../../../interfaces';
import { useDraftOrdersStore } from '@/hooks/useDraftOrdersStore';
import { Box, Button, ButtonGroup, Card, CardMedia, Stack, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import { FALLBACK_IMAGE_URL } from '@/constants/asset';

function DishCard({ dishInfo, roomInfo, onOrdersDrawer }: { dishInfo: IDish; roomInfo: RoomInfo; onOrdersDrawer?: boolean }) {
  const [quantity, setQuantity] = useState(0);
  const { addDraftOrder, removeDraftOrder, getDraftDishesAmount } = useDraftOrdersStore();
  const theme = useTheme();

  const onAdd = () => {
    addDraftOrder({
      dishId: dishInfo.ID,
      roomInfo,
      dishInfo,
    });
    setQuantity(() => quantity + 1);
  };

  const onRemove = () => {
    removeDraftOrder(dishInfo.ID);
    setQuantity(() => quantity - 1);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.onerror = null; // prevents looping
    e.currentTarget.src = FALLBACK_IMAGE_URL;
  };

  return (
    <Card
      elevation={0}
      sx={{ 
        height: 128,
        border: onOrdersDrawer ? 0 : '1px solid rgba(0, 0, 0, 0.12)',
        borderRadius: '10px',
        // backup width
        // width: { xs: '100%', md: 300, lg: 350, xl: 390 },
        width: '100%',
        position: 'relative',
        display: 'flex',
        padding: onOrdersDrawer ? { xs: '8px 0', md: '16px 0' } : { xs: '8px 12px', md: '16px 24px' },
      }}
    >
      <CardMedia
        component="img"
        src={dishInfo.imgHref}
        alt={dishInfo.name}
        sx={{
          width: '96px',
          borderRadius: '10px',
        }}
        onError={handleImageError}
      ></CardMedia>
      <Box position="relative" pl={{ xs: 1, md: 2 }} width="100%">
        <Stack direction="column" justifyContent="space-between" height="100%">
          <Typography fontWeight="500" paddingRight={1} flexGrow={1} sx={{ overflow: 'hidden' }}>
            {dishInfo.name}
          </Typography>
          <Stack direction="row" justifyContent="space-between">
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
              <Button style={{ border: 0 }} onClick={() => onRemove()}>
                -
              </Button>
              <Typography
                bgcolor={theme.palette.lightGrey.main}
                sx={{ padding: '0 5px', height: '100%', minWidth: 30, textAlign: 'center' }}
                component="div"
              >
                {getDraftDishesAmount(dishInfo.ID)}
              </Typography>
              <Button onClick={() => onAdd()}>+</Button>
            </ButtonGroup>
          </Stack>
        </Stack>
      </Box>
    </Card>
  );
}

export default DishCard;
