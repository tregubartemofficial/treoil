import React, { useCallback, useEffect, useState } from 'react';
import {
  Card,
  CardActions,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormLabel,
  Collapse,
  Stack,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const filterOptions = {
  brand: ['Prista', 'Unil', 'Orlen'],
  types: ['motor', 'gear', 'antifreeze', 'production'],
  viscosity: [
    '0W-30',
    '5W-30',
    '5W-40',
    '5W-50',
    '10W-40',
    '15W-40',
    '75W-80',
    '75W-90',
    '80W-90',
    '85W-90',
    '85W-140',
  ],
  motor: 'Моторна',
  gear: 'Трансмісійна',
  antifreeze: 'Антифриз',
  production: 'Промислова',
};

const Filter = React.memo(({ products, setFilteredProducts }) => {
  const [open, setOpen] = useState({
    type: true,
    brand: true,
    viscosity: true,
  });
  const [openFilter, setOpenFilter] = useState(false);
  const [filters, setFilters] = useState({
    brand: [],
    type: [],
    viscosity: [],
  });
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleOpen = useCallback((id) => {
    setOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  }, []);

  const handleFilterChange = useCallback((category, value) => {
    setFilters((prevFilters) => {
      const isValueSelected = prevFilters[category].includes(value);

      if (isValueSelected) {
        return {
          ...prevFilters,
          [category]: prevFilters[category].filter((val) => val !== value),
        };
      } else {
        return {
          ...prevFilters,
          [category]: [...prevFilters[category], value],
        };
      }
    });
  }, []);

  useEffect(() => {
    const filteredProducts = products.filter((product) => {
      const brandFilter =
        filters.brand.length === 0 ||
        filters.brand.every((value) => product.brand.includes(value));
      const typeFilter =
        filters.type.length === 0 || filters.type.includes(product.type);

      const viscosities = product.viscosity.split(' ');
      const viscosityFilter =
        filters.viscosity.length === 0 ||
        viscosities.some((value) => filters.viscosity.includes(value));

      return brandFilter && typeFilter && viscosityFilter;
    });
    setFilteredProducts(filteredProducts);
  }, [products, filters, setFilteredProducts]);

  const layout = (
    <Card sx={{ minWidth: 150, marginTop: 3 }}>
      <CardActions sx={{ width: '100%' }}>
        <FormControl>
          <Stack direction='row' onClick={() => handleOpen('brand')}>
            <FormLabel id='brand'>Бренд</FormLabel>
            {open.brand ? <ExpandLess /> : <ExpandMore />}
          </Stack>
          <Collapse in={open.brand} timeout='auto'>
            <FormGroup aria-labelledby='brand'>
              {filterOptions.brand.map((brand) => (
                <FormControlLabel
                  key={brand}
                  control={
                    <Checkbox
                      checked={filters.brand.includes(brand)}
                      onChange={() => handleFilterChange('brand', brand)}
                    />
                  }
                  label={brand}
                />
              ))}
            </FormGroup>
          </Collapse>
        </FormControl>
      </CardActions>
      <CardActions>
        <FormControl>
          <Stack direction='row' onClick={() => handleOpen('type')}>
            <FormLabel id='type'>Тип оливи</FormLabel>
            {open.type ? <ExpandLess /> : <ExpandMore />}
          </Stack>
          <Collapse in={open.type} timeout='auto'>
            <FormGroup aria-labelledby='type'>
              {filterOptions.types.map((type) => (
                <FormControlLabel
                  key={type}
                  control={
                    <Checkbox
                      checked={filters.type.includes(type)}
                      onChange={() => handleFilterChange('type', type)}
                    />
                  }
                  label={filterOptions[type]}
                />
              ))}
            </FormGroup>
          </Collapse>
        </FormControl>
      </CardActions>
      <CardActions>
        <FormControl>
          <Stack direction='row' onClick={() => handleOpen('viscosity')}>
            <FormLabel id='viscosity'>В'язкість</FormLabel>
            {open.viscosity ? <ExpandLess /> : <ExpandMore />}
          </Stack>

          <Collapse in={open.viscosity} timeout='auto'>
            <FormGroup aria-labelledby='viscosity'>
              {filterOptions.viscosity.map((viscosity) => (
                <FormControlLabel
                  key={viscosity}
                  control={
                    <Checkbox
                      checked={filters.viscosity.includes(viscosity)}
                      onChange={() =>
                        handleFilterChange('viscosity', viscosity)
                      }
                    />
                  }
                  label={viscosity}
                />
              ))}
            </FormGroup>
          </Collapse>
        </FormControl>
      </CardActions>
    </Card>
  );

  return (
    <>
      {isMobile ? (
        <List
          sx={{
            marginBottom: 2,
            width: '100%',
            display: { xs: 'flex', sm: 'none' },
          }}
        >
          <ListItemButton onClick={() => setOpenFilter(!openFilter)}>
            <ListItemIcon>
              <FilterAltIcon />
            </ListItemIcon>
            <ListItemText primary='Фільтр' />
            {openFilter ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse
            in={openFilter}
            timeout='auto'
            sx={{
              position: 'absolute',
              zIndex: 20,
              marginTop: 4,
              width: '90vw',
            }}
          >
            {layout}
          </Collapse>
        </List>
      ) : (
        layout
      )}
    </>
  );
});

export default Filter;
