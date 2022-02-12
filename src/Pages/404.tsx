import {
    Container,
    Text
} from '@chakra-ui/react';

const ErrorPage = () => {
    return (
        <Container maxW='container.xl' centerContent>
            <Text fontSize='5xl'>
                404
            </Text>
            <Text fontSize='2xl'>
                Page not found.
            </Text>
        </Container>
    );
};

export default ErrorPage;