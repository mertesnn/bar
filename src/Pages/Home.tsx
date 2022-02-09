import BarHome from '../Images/bar-home.jpg';
import { Link } from 'react-router-dom';
import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image
} from '@chakra-ui/react';

export default function Home() {
    return (
        <Container maxW={'7xl'}>
            <Stack
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 28 }}
                direction={{ base: 'column', md: 'row' }}>
                <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                    <Heading
                        lineHeight={1.1}
                        fontWeight={600}
                        fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
                        <Text
                            as={'span'}
                            position={'relative'}
                            _after={{
                                content: "''",
                                width: 'full',
                                height: '30%',
                                position: 'absolute',
                                bottom: 1,
                                left: 0,
                                bg: 'red.400',
                                zIndex: -1,
                            }}>
                            Welcome to,
                        </Text>
                        <br />
                        <Text as={'span'} color={'red.400'}>
                            Tilky bar!
                        </Text>
                    </Heading>
                    <Text color={'gray.500'}>
                        Tilky Bar is a whimsical cocktail and full-service restaurant. Its
                        “You pick ‘em, we pour ‘em” motto drives a non-judgmental drinks menu
                        in a breezy space, adorned with cartoon palm trees, that evokes bygone
                        California and Florida resorts.
                    </Text>
                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={{ base: 'column', sm: 'row' }}>
                        <Link to='drinks'>
                            <Button
                                rounded={'full'}
                                size={'lg'}
                                fontWeight={'normal'}
                                px={6}
                                colorScheme={'red'}
                                bg={'red.400'}
                                _hover={{ bg: 'red.500' }}>
                                Our Drinks
                            </Button>
                        </Link>
                        <Link to='about'>
                            <Button
                                rounded={'full'}
                                size={'lg'}
                                fontWeight={'normal'}
                                px={6}
                            >
                                About Us
                            </Button>
                        </Link>
                    </Stack>
                </Stack>
                <Flex
                    flex={1}
                    justify={'center'}
                    align={'center'}
                    position={'relative'}
                    w={'full'}>

                    <Box
                        position={'relative'}
                        rounded={'2xl'}
                        boxShadow={'2xl'}
                        width={'full'}
                        overflow={'hidden'}>

                        <Image
                            alt={'Hero Image'}
                            fit={'cover'}
                            align={'center'}
                            w={'100%'}
                            h={'100%'}
                            src={BarHome}
                        />
                    </Box>
                </Flex>
            </Stack>
        </Container>
    );
}