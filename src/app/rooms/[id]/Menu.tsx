import { Box, Grid, List, ListItem, Typography, Stack } from '@mui/material';
import _ from 'lodash';
import { IMenu } from '../../_interfaces';
import DishCard from './DishCard';
import Spacer from '@/app/_common/Spacer';

function Menu({ menu }: { menu: IMenu }) {
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
                  <Grid container spacing={6}>
                    {!_.isEmpty(category.items) &&
                      category.items.map((item, index) => {
                        return (
                          <Grid key={index} item xs={6} md={4}>
                            <DishCard key={index} dishInfo={item} />
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
