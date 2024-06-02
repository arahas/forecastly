import { Container, Box, Text, Heading, 
        Button, ButtonGroup, HStack, Input, 
        FormControl, FormLabel, Select, Table} from '@chakra-ui/react';
import FileUpload from "./FileUpload";

const ModelSection = ({csvData, updateCsvData}) => {
    return (
        <Container>
            <Box bg='grey' w='100%' p={4} color='white'>
                <Heading>2. Model Section </Heading>
            </Box>
            <Box bg='lightgrey' Display='flex' alignItems='center' justifyContent='center' p={4}>
                <Text> Select Forecasting Model.  </Text>
                <br/>
                <FormControl>
                    <FormLabel>Forecasting Model</FormLabel>
                    <Select placeholder='select model'>
                        <option>Moving Average</option>
                        <option>Naive</option>
                    </Select>
                </FormControl>
            </Box>
        </Container>
    )
    }; 

export default ModelSection; 