import { DraftOrdersItem, useDraftOrdersStore } from '@/hooks/useDraftOrdersStore';
import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Button,
  Card,
  CircularProgress,
  Container,
  Divider,
  IconButton,
  Link,
  Stack,
  SwipeableDrawer,
  Typography,
} from '@mui/material';

import Spacer from '@/app/_common/Spacer';
import DishCard from '@/app/rooms/[id]/DishCard';
import { useCreateOrder } from '@/mutations/useCreateOrder';
import React from 'react';

function NavBarOrderDrawer({ open, setOrderDrawerOpened }: { open: boolean; setOrderDrawerOpened: (state: boolean) => void }) {
  const { draftOrders, getDraftOrdersAmount, removeDraftOrders } = useDraftOrdersStore();
  const { createOrder, isCreatingOrder } = useCreateOrder();
  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setOrderDrawerOpened(open);
  };

  const getMappedRoom = () => {
    const draftOrdersItems = Object.values(draftOrders);
    return draftOrdersItems.reduce(
      (acc, curr) => {
        // TODO: replace hostName with hostId later
        const mappedRoomKey = `${curr.roomInfo.roomId}_${curr.roomInfo.hostId}`;
        return {
          ...acc,
          [mappedRoomKey]: acc[mappedRoomKey] ? [...acc[mappedRoomKey], curr] : [curr],
        };
      },
      {} as Record<string, Array<DraftOrdersItem>>,
    );
  };

  const calculateRoomTotalCost = (orders: DraftOrdersItem[]) => {
    return (
      orders
        .reduce((acc, curr) => {
          return acc + curr.dishInfo.priceInMinorUnit * curr.amount;
        }, 0)
        .toLocaleString() + 'đ'
    );
  };

  const onCreateOrder = async (roomId: string, draftOrdersItems: DraftOrdersItem[]) => {
    createOrder({
      roomId,
      dishes: draftOrdersItems.map((draftOrdersItem) => ({
        id: draftOrdersItem.dishId,
        quantity: draftOrdersItem.amount,
      })),
    });
  };

  const onRemoveOrdersInRoom = (draftOrdersItems: DraftOrdersItem[]) => {
    removeDraftOrders(draftOrdersItems.map((draftOrdersItem) => draftOrdersItem.dishId));
  };

  return (
    <React.Fragment key={'rightDrawer'}>
      <SwipeableDrawer
        anchor="right"
        PaperProps={{
          sx: {
            width: {
              sx: '100%',
              md: 400,
            },
            paddingTop: '10px',
            paddingBottom: '10px',
          },
        }}
        open={open}
        onOpen={() => setOrderDrawerOpened(true)}
        onClose={toggleDrawer(false)}
      >
        <Container
          sx={{
            mt: 1,
          }}
        >
          <Stack flexDirection="row" justifyContent="space-between">
            <Typography variant="h5" fontWeight="500">
              My order
            </Typography>
            <IconButton onClick={() => setOrderDrawerOpened(false)}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <Spacer size={2}></Spacer>
          <Box>
            {getDraftOrdersAmount() > 0 && (
              <>
                {getMappedRoom() &&
                  Object.entries(getMappedRoom()).map(([key, ordersInRoom], index) => {
                    const roomName = ordersInRoom[0].roomInfo.roomName;
                    const hostName = ordersInRoom[0].roomInfo.hostName;
                    const roomId = ordersInRoom[0].roomInfo.roomId;
                    return (
                      <Box key={`${key}_${index}`}>
                        {index !== 0 && <Divider />}
                        <Card  elevation={0}>
                          {roomName} - {hostName}
                          <Link
                            onClick={() => onRemoveOrdersInRoom(ordersInRoom)}
                            color="error"
                            component="button"
                            sx={{
                              ml: 2,
                            }}
                          >
                            Remove
                          </Link>
                          {Object.values(ordersInRoom).map((draftOrdersItem, index) => {
                            return (
                              <DishCard
                                key={index}
                                dishInfo={draftOrdersItem.dishInfo}
                                roomInfo={draftOrdersItem.roomInfo}
                                onOrdersDrawer
                              />
                            );
                          })}
                          <Stack flexDirection="row" justifyContent="space-between">
                            <Typography fontWeight="500">Total:</Typography>
                            <Typography fontWeight="500">{calculateRoomTotalCost(ordersInRoom)}</Typography>
                          </Stack>
                          <Spacer></Spacer>
                          {!isCreatingOrder && (
                            <Button variant="contained" fullWidth onClick={() => onCreateOrder(roomId, ordersInRoom)}>
                              Confirm order
                            </Button>
                          )}
                          {isCreatingOrder && (
                            <Button variant="contained" fullWidth disabled>
                              <CircularProgress size={25} />
                            </Button>
                          )}
                        </Card>
                      </Box>
                    );
                  })}
              </>
            )}
            {getDraftOrdersAmount() === 0 && <Typography textAlign="center">Nothing to show here.</Typography>}
          </Box>
        </Container>
      </SwipeableDrawer>
    </React.Fragment>
  );
}
export default NavBarOrderDrawer;
