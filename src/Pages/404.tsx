import {
    Button,
    Container,
    Text
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <Container maxW='container.xl' centerContent>
            <Text fontSize='5xl'>
                404
            </Text>
            <Text fontSize='2xl'>
                Page not found.
            </Text>
            <Link to='/'>
                <Button
                    mt='6'
                    bg='red.400'
                    color='white'
                    _hover={{ bg: 'red.500' }}>
                    Back to Home
                </Button>
            </Link>
        </Container>
    );
};

export default ErrorPage;