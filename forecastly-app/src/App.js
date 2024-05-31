import logo from './logo.svg';
import React, { useState } from 'react';
import Papa from 'papaparse';
// import './App.css';
import InputSection from './components/InputSection';
import ModelSection from './components/ModelSection';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  const [csvData, setCsvData] = useState(null);

  const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const text = e.target.result;
                parseCSV(text);
            };
            reader.readAsText(file);
        }
    };

    const parseCSV = (text) => {
        Papa.parse(text, {
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                setCsvData(results.data);
            },
        });
    };

  return (
    <ChakraProvider>
      <InputSection csvData={csvData} updateCsvData={handleFileChange}/>
      <ModelSection csvData={csvData} updateCsvData={handleFileChange}/>
    </ChakraProvider>
  );
}

export default App;
