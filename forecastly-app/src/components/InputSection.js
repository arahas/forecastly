import { Container, Box, Text, Heading, Button, ButtonGroup, HStack, Input  } from '@chakra-ui/react';
import FileUpload from "./FileUpload";

const InputSection = () => {
    return (
        <Container>
            <Box bg='grey' w='100%' p={4} color='white'>
                <Heading>1. Input Section </Heading>
            </Box>
            <Box bg='lightgrey' Display='flex' alignItems='center' justifyContent='center' p={4}>
                <Text> Select input file for forecast creation.  </Text>
                <br/>
                <FileUpload/>
            </Box>
        </Container>
    )
    };


export default InputSection; 