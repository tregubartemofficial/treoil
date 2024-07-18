import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Divider,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router';
import { products } from '../products';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ChevronLeft } from '@mui/icons-material';

const Product = () => {
  const { pathname } = useLocation();
  const productPathname = pathname.split('/')[2].split('_').join(' ');
  const navigate = useNavigate();

  const {
    title,
    description,
    type,
    brand,
    specifications,
    viscosity,
    photoURL,
  } = products.find((product) => product.title === productPathname) || {};

  return (
    <Container>
      <ChevronLeft onClick={() => navigate(-1)} />
      <Stack spacing={3}>
        <img src={photoURL} alt={title} style={{ width: '250px' }} />
        <Typography variant='h5' fontWeight='bold'>
          {title}
        </Typography>
        <Typography variant='h6'>{description}</Typography>
        <Stack divider={<Divider />}>
          <Typography variant='h5'>Характеристики</Typography>
          <List dense={true}>
            <ListItem>
              <ListItemText
                primary={<Typography variant='h6'>Бренд</Typography>}
                secondary={brand}
              />
            </ListItem>
            {viscosity && (
              <ListItem>
                <ListItemText
                  primary={<Typography variant='h6'>В'язкість</Typography>}
                  secondary={viscosity}
                />
              </ListItem>
            )}
            <ListItem>
              <ListItemText
                primary={<Typography variant='h6'>Тип</Typography>}
                secondary={type}
              />
            </ListItem>
            <ListItem>
              <Accordion
                disableGutters
                defaultExpanded
                sx={{ boxShadow: 'none' }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ p: 0 }}>
                  <Typography variant='h6'>Специфікації</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {specifications.split('\n').map((paragraph, i) => (
                    <ListItemText key={i} secondary={paragraph} />
                  ))}
                </AccordionDetails>
              </Accordion>
            </ListItem>
          </List>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Product;
