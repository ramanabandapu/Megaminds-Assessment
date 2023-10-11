
import './App.css';
import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import Homepage from './Pages/Homepage';
import Footer from './Components/Footer';


function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
    <Footer/>
    </ChakraProvider>
  );
}

export default App;
