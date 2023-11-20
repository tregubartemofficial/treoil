import React, { useState } from 'react';
import {
  Container,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import Filter from '../components/Filter';
import LazyImage from '../components/LazyImage';
import { products } from '../products';
import { Link } from 'react-router-dom';

const Catalog = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      justifyContent='space-between'
      alignItems='flex-start'
      component={Container}
    >
      <Filter products={products} setFilteredProducts={setFilteredProducts} />
      <Grid
        container
        sx={{
          marginTop: { xs: 0, md: 0 },
          justifyContent: 'center',
        }}
        spacing={{ xs: 2, md: 3 }}
        columns={{ sm: 1, md: 2 }}
        component='ul'
      >
        {filteredProducts.map((product, index) => {
          return (
            <Grid
              item
              sm={1}
              sx={{ ml: '-40px' }}
              component={ListItem}
              key={product.title}
            >
              <ListItemAvatar>
                <LazyImage
                  src={product?.photoURL}
                  alt={product.title}
                  width={110}
                  height={140}
                />
              </ListItemAvatar>
              <Stack>
                <ListItemText
                  primary={product.title}
                  secondary={product.type}
                />
                <ListItemButton
                  component={Link}
                  to={`/catalog/${product.title.replace(/\s/g, '_')}`}
                >
                  <ListItemIcon>
                    <InfoIcon />
                  </ListItemIcon>
                  <ListItemText primary='Дізнатись більше' />
                </ListItemButton>
              </Stack>
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
};

export default Catalog;
