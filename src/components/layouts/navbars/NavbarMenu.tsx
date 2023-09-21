import { sideBarTabs } from '@/constants';
import { IconButton, ListItemIcon, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import HomeIcon from '@mui/icons-material/Home';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import MenuIcon from '@mui/icons-material/Menu';
import { useRef, useState } from 'react';

function NavbarMenu() {
  const navBarMenuBtnRef = useRef<HTMLButtonElement>(null);
  const [isNavBarMenuOpened, setNavBarMenuOpened] = useState(false);

  const onNavBarMenuBtnClicked = () => {
    setNavBarMenuOpened(!isNavBarMenuOpened);
  };

  return (
    <>
      <Tooltip title="Profile">
        <IconButton ref={navBarMenuBtnRef} size="large" edge="start" aria-label="menu" sx={{ mr: 2 }} onClick={onNavBarMenuBtnClicked}>
          <MenuIcon />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{
          mt: '45px',
          '& .MuiPaper-root': {
            padding: '0 15px',
          },
        }}
        id="menu-appbar"
        anchorEl={navBarMenuBtnRef.current}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={isNavBarMenuOpened}
        disableScrollLock={true}
        // onClose={() => setAvatarBtnClicked(false)}
      >
        {sideBarTabs.map(({ displayText }, index) => (
          <MenuItem key={index}>
            {displayText === 'Home' && <HomeIcon />}
            {displayText === 'Food Lounge' && <RestaurantMenuIcon />}
            {displayText === 'My Orders' && <AutoStoriesIcon />}
            <Typography
              sx={{
                marginTop: 0,
                marginBottom: 0,
                whiteSpace: 'nowrap',
                transition: 'ease-in-out 0.15s',
              }}
            >
              {displayText}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default NavbarMenu;
