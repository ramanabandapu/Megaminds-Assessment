import "./App.css";
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import Homepage from "./Pages/Homepage";

import ProductPage from "./Pages/ProductPage";
import CaptionCarousel from "./Components/Carousel";

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/products" element={<ProductPage />} />
          <Route exact path="/carousel" element={<CaptionCarousel />} />

        </Routes>
       
      </BrowserRouter>
      {/* <ProductPage/> */}
    </ChakraProvider>
  );
}

export default App;
