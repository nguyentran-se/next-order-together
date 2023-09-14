'use client';

import { sideBarTabs } from '@/constants';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
  AppBar,
  Box,
  Container,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useTheme
} from '@mui/material';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import AvatarButton from './AvatarButton';

export default function NavBar() {
  const pathName = usePathname();
  const theme = useTheme();
  const [isOrderDrawerOpened, setOrderDrawerOpened] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setOrderDrawerOpened(open);
  };

  const page = sideBarTabs.find((tab) => tab.url === pathName)?.displayText;
  return (
    <>
      <React.Fragment key={'rightDrawer'}>
        <Drawer
          anchor="right"
          PaperProps={{
            sx: {
              width: 300,
              paddingTop: '10px',
              paddingBottom: '10px',
            },
          }}
          open={isOrderDrawerOpened}
          onClose={toggleDrawer(false)}
        >
          <Container>
            <Typography textAlign="center">Nothing to show here.</Typography>
          </Container>
        </Drawer>
      </React.Fragment>
      <AppBar variant="outlined" position="fixed" color="primary" enableColorOnDark elevation={0}>
        <Container maxWidth={false}>
          <Toolbar disableGutters>
            <Stack flexDirection="row" justifyContent="space-between" width="100%" alignItems="center">
              <Box>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  color={theme.palette.primary.main}
                  href="#"
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    textDecoration: 'none',
                  }}
                >
                  {page}
                </Typography>
              </Box>

              {/* TODO: on implementing */}
              <Stack flexDirection="row" gap={2}>
                <Box>
                  <IconButton onClick={toggleDrawer(true)}>
                    <ShoppingCartIcon />
                  </IconButton>
                </Box>

                <Box sx={{ flexGrow: 0 }}>
                  <AvatarButton />
                </Box>
              </Stack>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      <Divider />
    </>
  );
}
