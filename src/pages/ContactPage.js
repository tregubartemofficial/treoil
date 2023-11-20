import { Box, Container, List, ListItem, ListItemText, Stack, Typography } from '@mui/material';

const ContactPage = () => {
  return (
    <Stack spacing={2} my={5} component={Container}>
      <Stack>
        <Typography variant='h5'>Офіс у м.Вінниця</Typography>
        <Typography variant='h6'>Графік роботи:</Typography>
        <List disablePadding={true}>
          <ListItem disablePadding={true}>
            <ListItemText primary='ПН-ПТ' secondary='9:00 - 17:00' />
          </ListItem>
          <ListItem disablePadding={true}>
            <ListItemText primary='CБ-ПТ' secondary='9:00 - 13:00' />
          </ListItem>
          <ListItem disablePadding={true}>
            <ListItemText primary='НД' secondary='Вихідний' />
          </ListItem>
        </List>
      </Stack>

      <Box sx={{ width: '100%', height: 300 }}>
        <iframe
          title='TREOIL Location Map'
          src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6101.428664284915!2d28.42624796042512!3d49.23700397727064!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472d5da73e9773dd%3A0xa89b208970bd654a!2z0KLRgNC10L7QudC7!5e0!3m2!1suk!2sua!4v1690721689427!5m2!1suk!2sua'
          style={{ border: '0', width: '100%', height: '100%' }}
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        />
      </Box>
    </Stack>
  );
};

export default ContactPage;
