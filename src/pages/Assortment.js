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
import SortIcon from "@mui/icons-material/Sort";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import Filter from "../components/Filter";
import LazyImage from "../components/LazyImage";
import { products } from "../products";

const Assortment = () => {
  const [openStates, setOpenStates] = useState(
    Array(products.length).fill(false)
  );
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleToggle = (index) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  };

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
          }}
          spacing={{ xs: 2, md: 3 }}
          columns={{ sm: 1, md: 2 }}
          component="ul"
        >
          {filteredProducts.map((product, index) => {
            const isOpen = openStates[index];
            return (
              <Grid
                item
                sm={1}
                md={1}
                component={ListItem}
                key={product.title}
                justifyContent="flex-start"
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
                  <ListItemButton onClick={() => handleToggle(index)}>
                    <ListItemIcon>
                      <SortIcon />
                    </ListItemIcon>
                    <ListItemText primary="Опис" />
                    {isOpen ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={isOpen} timeout="auto" unmountOnExit>
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
