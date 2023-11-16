import Main from './pages/Main'
import Assortment from "./pages/Assortment";
import Header from './common/Header'
import Footer from "./common/Footer";
import { Route, Routes } from "react-router";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Product from './common/Product';

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/assortment" element={<Assortment />} />
        <Route path="/assortment/:id" element={<Product />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
