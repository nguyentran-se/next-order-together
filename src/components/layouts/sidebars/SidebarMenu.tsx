import { sideBarTabs } from '@/constants';
import { useSidebarStore } from '@/hooks/useSidebarStore';
import { functionalColors } from '@/theme/colors/functional';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import HomeIcon from '@mui/icons-material/Home';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import DiningIcon from '@mui/icons-material/Dining';

function SidebarMenu({
  navbarMode,
  open = true,
  onTabClickCallback,
}: {
  open?: boolean;
  navbarMode?: boolean;
  onTabClickCallback?: Function;
}) {
  const { isSidebarCollapsed } = useSidebarStore();
  const router = useRouter();
  const pathName = usePathname();

  const handleTabClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, path: string) => {
    event.preventDefault();
    router.push(path);
    if (onTabClickCallback) onTabClickCallback();
  };

  const mainPath = '/' + pathName.split('/')[1] || '';
  return (
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
              {tab.displayText === 'My Rooms' && <DiningIcon />}
            </ListItemIcon>
            {
              <ListItemText
                primary={tab.displayText}
                sx={{
                  marginTop: 0,
                  marginBottom: 0,
                  opacity: navbarMode ? 1 : isSidebarCollapsed ? 0 : 1,
                  whiteSpace: 'nowrap',
                  transition: 'ease-in-out 0.15s',
                }}
              />
            }
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

export default SidebarMenu;
