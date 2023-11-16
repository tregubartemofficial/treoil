import React, { useState } from "react";
import {
  Collapse,
  Container,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import Filter from "../components/Filter";
import LazyImage from "../components/LazyImage";
import { products } from "../products";
import { Link } from "react-router-dom";

const Assortment = () => {

  const [filteredProducts, setFilteredProducts] = useState(products);



  return (
    <Container component="article">
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems="flex-start"
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
          component="ul"
        >
          {filteredProducts.map((product, index) => {
            return (
              <Grid
                item
                sm={1}
                sx={{ml: '-40px'}}
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
                  <ListItemText primary={product.title} />
                  <ListItemButton component={Link} to={`/assortment/${product.title}`}>
                    <ListItemIcon>
                      <InfoIcon />
                    </ListItemIcon>
                    <ListItemText primary="Дізнатись більше" />
                  </ListItemButton>
                  <Collapse timeout="auto" unmountOnExit>
                    {product.description.split("\n").map((paragraph, i) => (
                      <ListItemText key={i} primary={paragraph} />
                    ))}
                    <ListItemText
                      disableTypography
                      primary={
                        <Typography variant="h6">Специфікації</Typography>
                      }
                    />
                    {product.specifications?.split("\n").map((paragraph, i) => (
                      <ListItemText key={i} secondary={paragraph} />
                    ))}
                  </Collapse>
                </Stack>
              </Grid>
            );
          })}
        </Grid>
      </Stack>
    </Container>
  );
};

export default Assortment;
