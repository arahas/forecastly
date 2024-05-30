import React, { useState } from 'react';
import { Input, Table } from '@chakra-ui/react';
import Papa from 'papaparse';

const FileUpload = () => {
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
        <div>
            <Input type="file" accept=".csv" onChange={handleFileChange} />
            <br/>
            {csvData && (
                <div>
                    <h2>CSV Data</h2>
                    {csvData.length > 10 && 
                    <p>Displaying the last 10 rows</p>}
                    <Table variant='striped'>
                        <thead>
                            <tr>
                                {Object.keys(csvData[0]).map((key) => (
                                    <th key={key}>{key}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {csvData.slice(-10).map((row, index) => (
                                <tr key={index}>
                                    {Object.values(row).map((value, index) => (
                                        <td key={index}>{value}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            )}
        </div>
    );
};

export default FileUpload;