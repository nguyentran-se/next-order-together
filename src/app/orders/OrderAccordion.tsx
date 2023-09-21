import { formatPrice } from '@/utils/format-price';
import { Box, Chip, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { useEffect } from 'react';
import { Order, OrderDish } from '../../interfaces/order.interface';
import CommonAccordion from '@/components/common/CommonAccordion';
import Avatar from '@/components/common/Avatar.component';

function OrderAccordion({ order }: { order: Order }) {
  const dishes = order.detail?.dishes;

  const getTotalQuantity = (dishes: OrderDish[]) => dishes.reduce((acc, cur) => acc + cur.quantity, 0);
  const getTotalPrice = (dishes: OrderDish[]) => dishes.reduce((acc, cur) => acc + cur.priceV2.amountInMinor, 0);
  const getTotalDiscountPrice = (dishes: OrderDish[]) => dishes.reduce((acc, cur) => acc + cur.discountedPriceV2.amountInMinor, 0);
  const getChipProps = (status: string) => {
    const handler: { [status: string]: { label: string; color: 'error' } } = {
      NOT_PAID: {
        label: 'Not paid',
        color: 'error',
      },
    };
    return handler[status] || { label: status };
  };
  return (
    <CommonAccordion
      summary={
        <Stack width="100%" flexDirection="row" justifyContent="space-between" alignItems="center">
          {/* Get room name instead */}
          <Typography fontWeight="500">{order.room.id}</Typography>
          <Stack flexDirection="row">
            <Typography component="div" textAlign="right">
              <Typography>{order.room.alias || order.room.host.fullName}</Typography>
              <Typography fontWeight="500">Techcomebank xxx-xxxx-xxxx</Typography>
            </Typography>
            <Box ml={1}>
              <Avatar name={order.room.host.fullName} src={order.room.host.profile.avatarUrl}></Avatar>
            </Box>
          </Stack>
        </Stack>
      }
      details={
        <TableContainer
          component={Paper}
          sx={{
            boxShadow: 0,
          }}
        >
          <Table sx={{ minWidth: 650, '& td, & th': { border: 0 } }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell width="400px">Order</TableCell>
                <TableCell align="right">Amount</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Final Price</TableCell>
                <TableCell align="right" sx={{ pr: 8 }}>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!!dishes &&
                dishes.map((dish, index) => (
                  <TableRow key={dish.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row" width="400px">
                      {dish.name}
                    </TableCell>
                    <TableCell align="right">{dish.quantity}</TableCell>
                    <TableCell align="right">{dish.priceV2.amountDisplay}</TableCell>
                    <TableCell align="right">{dish.discountedPriceV2.amountDisplay}</TableCell>
                    <TableCell align="right" sx={{ pr: 10 }}>
                      _
                    </TableCell>
                  </TableRow>
                ))}
              <TableRow
                key={'Total'}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  '& td, & th': {
                    fontWeight: 500,
                  },
                }}
              >
                <TableCell component="th" scope="row" width="400px">
                  Total
                </TableCell>
                <TableCell align="right">{formatPrice(getTotalQuantity(dishes))}</TableCell>
                <TableCell align="right">{formatPrice(getTotalPrice(dishes))}</TableCell>
                <TableCell align="right">{formatPrice(getTotalDiscountPrice(dishes))}</TableCell>
                <TableCell align="right" sx={{ pr: 8 }}>
                  <Chip {...getChipProps(order.detail.status)} />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      }
    ></CommonAccordion>
  );
}

export default OrderAccordion;
