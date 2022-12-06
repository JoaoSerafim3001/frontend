import { Route, Routes } from "react-router-dom";
import { Box, Container } from "@mui/material";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Home from "./pages/Home";
import ItemDetails from "./pages/ItemDetails/ItemDetails";
import Store from "./pages/Store/Store";
import Dashboard from "./pages/Dashboard/Dashboard";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/products");
      const data = await result.data;
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      margin="0"
    >
      <Navbar />
      <Container>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/store" element={<Store products={products} setProducts={setProducts} />} />
          <Route path="/store/:slug" element={<ItemDetails />} />
          <Route path="/dashboard" element={<Dashboard products={products} setProducts={setProducts} />} />
        </Routes>
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
