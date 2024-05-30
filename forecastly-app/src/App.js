import logo from './logo.svg';
// import './App.css';
import InputSection from './components/InputSection';
import ModelSection from './components/ModelSection';
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <InputSection/>
      <ModelSection/>
    </ChakraProvider>
  );
}

export default App;
