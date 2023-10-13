
import './App.css';
import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import Homepage from './Pages/Homepage';
import Footer from './Components/Footer';
import ProductPage from './Pages/ProductPage';


function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
    {/* <Homepage/> */}
    <ProductPage/>
    </ChakraProvider>
  );
}

export default App;
