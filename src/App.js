import Footer from "./Footer";
import Header from "./components/Header";
import Main from './components/pages/Main'
import Assortment from "./components/pages/Assortment";
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
