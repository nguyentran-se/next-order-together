'use client';

import { sideBarTabs } from '@/constants';
import { functionalColors } from '@/theme/colors/functional';
import { drawerWidth } from '@/theme/sizes/drawer';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { Stack, useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SideBar() {
  const [isDrawerCollapsed, setDrawerCollapsed] = useState(false);
  const theme = useTheme();
  const pathName = usePathname();
  const router = useRouter();
  const mainPath = '/' + pathName.split('/')[1] || '';

  const handleTabClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, path: string) => {
    event.preventDefault();
    router.push(path);
  };

  return (
    <Drawer
      style={{ zIndex: 1199 }}
      sx={{
        width: isDrawerCollapsed ? drawerWidth['collaped'] : drawerWidth['open'],
        position: 'relative',
        flexShrink: 0,
        transition: 'ease-in 0.15s',
        '& .MuiDrawer-paper': {
          padding: '0 1rem',
          boxSizing: 'border-box',
          transition: 'ease-in-out 0.15s',
          width: isDrawerCollapsed ? drawerWidth['collaped'] : drawerWidth['open'],
          overflow: 'visible',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Stack position={'absolute'} right={0} top="44px" zIndex={1200} sx={{ transform: 'translateX(50%)' }}>
        <IconButton
          color="primary"
          sx={{
            minWidth: 0,
            padding: 0,
            borderRadius: '50%',
            bgcolor: `${theme.palette.grey[100]}`,
          }}
          onClick={() => setDrawerCollapsed((prev) => !prev)}
        >
          {isDrawerCollapsed ? (
            <ChevronRightIcon color="secondary" fontSize="large" />
          ) : (
            <ChevronLeftIcon color="secondary" fontSize="large" />
          )}
        </IconButton>
      </Stack>
      <Toolbar />
      {/* <Divider /> */}
      <List>
        {sideBarTabs.map((tab, index) => (
          <ListItem key={tab.displayText} disablePadding>
            <ListItemButton
              sx={{
                borderRadius: '5px',
                ':hover': {
                  bgcolor: functionalColors.hoverBg,
                },
              }}
              selected={tab.url === mainPath}
              onClick={(e) => handleTabClick(e, tab.url)}
            >
              <ListItemIcon>
                {tab.displayText === 'Home' && <HomeIcon />}
                {tab.displayText === 'Food Lounge' && <RestaurantMenuIcon />}
                {tab.displayText === 'My Orders' && <AutoStoriesIcon />}
              </ListItemIcon>
              {
                <ListItemText
                  primary={tab.displayText}
                  sx={{
                    marginTop: 0,
                    marginBottom: 0,
                    opacity: isDrawerCollapsed ? 0 : 1,
                    whiteSpace: 'nowrap',
                    transition: 'ease-in-out 0.15s',
                  }}
                />
              }
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
    // </Stack>
  );
}
