'use client';

import { apiClient, slack } from '@/app/layout';
import { sideBarTabs } from '@/constants';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
  AppBar,
  Avatar,
  Box,
  Container,
  Divider,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useRef } from 'react';

export default function NavBar() {
  const pathName = usePathname();
  const theme = useTheme();
  const [isOrderDrawerOpened, setOrderDrawerOpened] = useState(false);
  const [isAvatarBtnClicked, setAvatarBtnClicked] = useState(false);
  const avatarBtnRef = useRef<HTMLButtonElement>(null);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setOrderDrawerOpened(open);
  };

  const clickAvatar = async () => {
    setAvatarBtnClicked(true);
    // const connect = slac
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
      <AppBar position="static" enableColorOnDark color={'transparent'} elevation={0}>
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
                  <Tooltip title="Open settings">
                    <IconButton ref={avatarBtnRef} sx={{ p: 0 }} onClick={() => setAvatarBtnClicked(true)}>
                      <Avatar alt="Remy Sharp" />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    style={{ padding: '0 10px' }}
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={avatarBtnRef.current}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={isAvatarBtnClicked}
                    onClose={() => setAvatarBtnClicked(false)}
                  >
                    <MenuItem>
                      <Link href={'https://slack.com/openid/connect/authorize?scope=openid%20email%20profile&amp;response_type=code&amp;redirect_uri=https%3A%2F%2Flocalhost%3A8081&amp;client_id=2697222791.5807891074339'}>
                        <Typography textAlign="center">Log in</Typography>
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Typography textAlign="center">Setting</Typography>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                      <Typography textAlign="center">Log out</Typography>
                    </MenuItem>
                  </Menu>
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
