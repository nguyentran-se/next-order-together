'use client';

import { useGetOrders } from '@/queries/order/useGetOrders';
import { Box, CircularProgress, LinearProgress, Typography } from '@mui/material';
import _ from 'lodash';
import OrderAccordion from './OrderAccordion';

export default function MyOrders() {
  const { orders, isLoading, isFetching, isError } = useGetOrders();
  return (
    <>
      {!isError && (
        <>
          {isLoading && (
            <Box textAlign="center">
              <CircularProgress />
            </Box>
          )}
          {!isLoading && isFetching && <LinearProgress />}
          {!isLoading && (
            <>
              {!_.isEmpty(orders) && orders?.map((order) => <OrderAccordion key={`order_accordion_${order.id}`} order={order} />)}
              {_.isEmpty(orders) && <>No orders</>}
            </>
          )}
        </>
      )}
      {isError && <Typography>Failed to get rooms</Typography>}
    </>
  );
}
