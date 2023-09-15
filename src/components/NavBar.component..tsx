'use client';

import { sideBarTabs } from '@/constants';
import { useSidebarStore } from '@/hooks/useSidebarStore';
import { drawerWidth } from '@/theme/sizes/drawer';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppBar, Box, Container, Divider, Drawer, IconButton, Stack, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import NavBarProfile from './NavBarProfile';
import SideBarMenu from './SidebarMenu';
import Spacer from '@/app/_common/Spacer';

export default function NavBar() {
  const pathName = usePathname();
  const theme = useTheme();
  const mdBreakPointMatches = useMediaQuery(theme.breakpoints.up('md'));
  const isSidebarCollapsed = useSidebarStore((state) => state.isCollapsed);
  const [isOrderDrawerOpened, setOrderDrawerOpened] = useState(false);
  const [isNavBarMenuOpened, setNavBarMenuOpened] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setOrderDrawerOpened(open);
  };

  const onNavBarMenuBtnclick = () => {
    setNavBarMenuOpened(!isNavBarMenuOpened);
  };

  const page = sideBarTabs.find((tab) => tab.url === pathName)?.displayText;
  return (
    <>
      {/* Order Drawer */}
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

      {/* NavBar */}
      <AppBar
        variant="outlined"
        position="fixed"
        color="primary"
        enableColorOnDark
        elevation={0}
        sx={{
          width: {
            sx: '100%',
            md: `calc(100% - ${isSidebarCollapsed ? drawerWidth['collaped'] : drawerWidth['open']})`,
          },
        }}
      >
        <Container maxWidth={false}>
          <Toolbar
            disableGutters
            sx={{
              height: 56,
            }}
          >
            <Stack flexDirection="row" justifyContent="space-between" width="100%" alignItems="center">
              <Box>
                {/* Navbar Menu button (only in mobile view) */}
                <IconButton
                  size="large"
                  edge="start"
                  aria-label="menu"
                  sx={{
                    mr: 2,
                    display: {
                      sx: 'block',
                      md: 'none',
                    },
                  }}
                  onClick={onNavBarMenuBtnclick}
                >
                  <MenuIcon />
                </IconButton>

                {/* Page name */}
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

              <Stack flexDirection="row" gap={2}>
                {/* Order Drawer button */}
                <Box>
                  <IconButton onClick={toggleDrawer(true)}>
                    <ShoppingCartIcon />
                  </IconButton>
                </Box>

                {/* Avatar and profile button */}
                <Box sx={{ flexGrow: 0 }}>
                  <NavBarProfile />
                </Box>
              </Stack>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Navbar Menu (only in mobile view) */}
      {isNavBarMenuOpened && !mdBreakPointMatches && (
          <Box
            mt="56px"
            sx={{
              width: '100%',
              backgroundColor: 'background.paper',
              position: 'absolute',
              zIndex: 10,
            }}
          >
            <SideBarMenu navbarMode />
            <Divider />
          </Box>
      )}
      {!mdBreakPointMatches && <Spacer size="56px"></Spacer>}


      <Divider />
    </>
  );
}
