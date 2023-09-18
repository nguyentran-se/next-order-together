import { Box, Grid, List, ListItem, Typography, Stack } from '@mui/material';
import _ from 'lodash';
import { IMenu, RoomInfo } from '../../_interfaces';
import DishCard from './DishCard';
import Spacer from '@/app/_common/Spacer';
import { useSidebarStore } from '@/hooks/useSidebarStore';

function Menu({ menu, roomInfo }: { menu: IMenu; roomInfo: RoomInfo }) {
  const { isSidebarCollapsed } = useSidebarStore();
  const getGridSize = (isSidebarCollapsed: boolean) => {
    return {
      xs: 12,
      sm: isSidebarCollapsed ? 6 : 12,
      lg: isSidebarCollapsed ? 4 : 6,
      xl: isSidebarCollapsed ? 3 : 4,
    };
  };
  return (
    <List>
      {!_.isEmpty(menu) &&
        menu.categories?.map((category, index) => {
          return (
            <ListItem key={index} sx={{ mb: 2 }}>
              <Stack width="100%">
                <Box>
                  <Typography variant="h5" fontWeight={500}>
                    {category.name}
                  </Typography>
                </Box>
                <Spacer></Spacer>
                <Box>
                  <Grid
                    container
                    spacing={{
                      xs: 2,
                      sm: 2,
                      md: 4,
                    }}
                  >
                    {!_.isEmpty(category.items) &&
                      category.items.map((item, index) => {
                        return (
                          <Grid key={index} item {...getGridSize(isSidebarCollapsed)}>
                            <DishCard key={index} dishInfo={item} roomInfo={roomInfo} />
                          </Grid>
                        );
                      })}
                  </Grid>
                </Box>
              </Stack>
            </ListItem>
          );
        })}
    </List>
  );
}

export default Menu;
