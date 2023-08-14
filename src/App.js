import Main from './pages/Main'
import Assortment from "./pages/Assortment";
import Header from './common/Header'
import Footer from "./common/Footer";
import { Route, Routes } from "react-router";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

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
        </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
