import { Container, Box, Text, Button, ButtonGroup, HStack, Input  } from '@chakra-ui/react';


const InputSection = () => {

    

return (
    <Container maxW='xl'>
        <Box bg='grey' w='100%' p={4} color='white'>
            <strong>1. Input section </strong>
        </Box>
        <Box bg='lightgrey' Display='flex' alignItems='center' justifyContent='center' p={4}>
            <HStack spacing='12px'> 
            <Text> Select input file for forecast creation.  </Text>
            </HStack>
            <br/>
            <Input type="file" size="md"/>
        </Box>
    </Container>
)
};


export default InputSection; 