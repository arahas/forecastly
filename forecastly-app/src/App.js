import logo from './logo.svg';
// import './App.css';
import InputSection from './components/InputSection';
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <InputSection/>
    </ChakraProvider>
  );
}

export default App;
