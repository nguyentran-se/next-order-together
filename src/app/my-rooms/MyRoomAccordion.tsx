'use client';

import { Button, Chip, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { useEffect } from 'react';
import CommonAccordion from '../_common/Accordion';
import { MyRoom } from '../_interfaces';
import { lightGreyBorder } from '@/theme/styles/border';

function MyRoomAccordion({ room }: { room: MyRoom }) {
  const getChipProps = (status: string) => {
    const handler: { [status: string]: { label: string; color: 'error' | 'success' | 'warning' } } = {
      NOT_PAID: {
        label: 'Not paid yet',
        color: 'error',
      },
      PAID: {
        label: 'paid',
        color: 'success',
      },
    };
    return handler[status] || { label: status };
  };
  useEffect(() => {
    console.log('room :>> ', room);
  }, []);
  return (
    <CommonAccordion
      props={{
        expanded: true,
      }}
      sx={{
        border: lightGreyBorder,
        borderRadius: '5px',
        boxShadow: 0,
        '& .MuiAccordionSummary-root': {
          background: 'white',
        },
      }}
      enableExpandIcon={false}
      summary={
        <Stack width="100%" flexDirection="row" justifyContent="space-between" alignItems="center">
          {/* TODO: replace hostID with host.fullName later */}
          <Typography variant="h4">{room.alias || room.hostID}</Typography>
          <Stack
            flexDirection="row"
            sx={{
              '& .MuiButton-root': {
                ml: 1,
                borderRadius: '8px',
              },
            }}
          >
            <Button variant="contained" color="error">
              Cancel
            </Button>
            <Button variant="outlined" color="primary">
              Resolve room
            </Button>
            <Button variant="contained" color="primary">
              Confirm price
            </Button>
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
          {/* TODO: Decide how to make view responsive since there are a lot of cols */}
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell width="400px">Name</TableCell>
                <TableCell align="right">Order</TableCell>
                <TableCell align="right">Amount</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Final Price</TableCell>
                <TableCell align="right" sx={{ pr: 8 }}>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                key={'Total'}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  '& td, & th': {
                    fontWeight: 500,
                  },
                }}
              >
                <TableCell component="th" scope="row">
                  Yen Phan
                </TableCell>
                <TableCell align="right">Cơm gà xé</TableCell>
                <TableCell align="right">1</TableCell>
                <TableCell align="right">57.000</TableCell>
                <TableCell align="right">55.000</TableCell>
                <TableCell align="right" sx={{ pr: 8 }}>
                  <Chip {...getChipProps('PAID')} />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      }
    ></CommonAccordion>
  );
}

export default MyRoomAccordion;
