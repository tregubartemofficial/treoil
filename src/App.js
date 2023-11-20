import { Route, Routes } from 'react-router';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import MainPage from './pages/MainPage';
import CatalogPage from './pages/CatalogPage';
import Header from './common/Header';
import Footer from './common/Footer';
import Product from './common/Product';
import ContactPage from './pages/ContactPage';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#F7C21E', // Yellow
//     },
//     secondary: {
//       main: '#AD9A61', // Brown
//     },
//     background: {
//       default: '#fff',
//       paper: '#F7C21E', // Black
//     },
//     text: {
//       primary: '#0D0B0B', // Black
//       secondary: '#9E9191', // Gray
//     },
//   },
// });

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/catalog' element={<CatalogPage />} />
        <Route path='/catalog/:id' element={<Product />} />
        <Route path='/сontacts' element={<ContactPage />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
