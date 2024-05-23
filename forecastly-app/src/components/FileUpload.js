import React, { useState } from 'react';
import { Input } from '@chakra-ui/react';
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
                    CSV Data
                    <pre>{JSON.stringify(csvData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default FileUpload;