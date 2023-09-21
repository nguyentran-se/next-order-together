'use client';

import { useSidebarStore } from '@/hooks/useSidebarStore';
import { drawerWidth } from '@/theme/sizes/drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Stack, useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import SideBarMenu from './SidebarMenu';

export default function Sidebar() {
  const { isSidebarCollapsed, setSidebarCollapsed } = useSidebarStore();
  const theme = useTheme();

  return (
    <Drawer
      style={{ zIndex: 1199 }}
      sx={{
        display: {
          xs: 'none',
          md: 'block',
        },
        width: isSidebarCollapsed ? drawerWidth['collaped'] : drawerWidth['open'],
        position: 'relative',
        flexShrink: 0,
        transition: 'ease-in 0.15s',
        '& .MuiDrawer-paper': {
          padding: '0 1rem',
          boxSizing: 'border-box',
          transition: 'ease-in-out 0.15s',
          width: isSidebarCollapsed ? drawerWidth['collaped'] : drawerWidth['open'],
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
          onClick={() => setSidebarCollapsed(!isSidebarCollapsed)}
        >
          {isSidebarCollapsed ? (
            <ChevronRightIcon color="secondary" fontSize="large" />
          ) : (
            <ChevronLeftIcon color="secondary" fontSize="large" />
          )}
        </IconButton>
      </Stack>
      <Toolbar />
      {/* <Divider /> */}
      <SideBarMenu />
    </Drawer>
    // </Stack>
  );
}
