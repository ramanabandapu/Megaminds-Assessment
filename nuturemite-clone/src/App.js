
import './App.css';
import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import Homepage from './Pages/Homepage';
import Navbar from './Components/Navbar';

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
    <Navbar/>
    </ChakraProvider>
  );
}

export default App;
