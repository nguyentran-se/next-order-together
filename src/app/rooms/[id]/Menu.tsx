import { Box, Grid, List, ListItem, Typography, Stack } from '@mui/material';
import _ from 'lodash';
import { IMenu } from '../../_interfaces';
import DishCard from './DishCard';

function Menu({ menu }: { menu: IMenu }) {
  return (
    <List>
      {!_.isEmpty(menu) &&
        menu.categories?.map((category, index) => {
          return (
            <ListItem key={index}>
              <Stack>
                <Box>
                  <Typography>{category.name}</Typography>
                </Box>
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
