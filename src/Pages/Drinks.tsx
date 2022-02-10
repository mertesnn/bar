import { SearchIcon } from '@chakra-ui/icons';
import {
    Container,
    Input,
    InputGroup,
    InputLeftElement,
    Box,
    Grid,
    GridItem,
    Text,
    UnorderedList,
    ListItem,
    Divider,
    Link
} from '@chakra-ui/react';

const Drinks = () => {
    return (
        <Container maxW='6xl' pt='70px' pb='20px'>
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    children={<SearchIcon color='gray.300' />}
                />
                <Input type='text' placeholder='Search for a Cocktail...' />
            </InputGroup>
            <Grid
                templateColumns='repeat(4, 1fr)'
                mt='50px'
                h='auto'>
                <GridItem h='350px' colSpan={1}>
                    <Box w='100%' h='100%' pl='8' pt='10px'>
                        <Text fontSize='2xl'>
                            Categories
                        </Text>
                        <Divider mt='2' mb='2' w='80%' />
                        <UnorderedList styleType='none'>
                            <ListItem mb='1'><Link>Category 1</Link></ListItem>
                            <ListItem mb='1'><Link>Category 2</Link></ListItem>
                            <ListItem mb='1'><Link>Category 3</Link></ListItem>
                            <ListItem mb='1'><Link>Category 4</Link></ListItem>
                            <ListItem mb='1'><Link>Category 5</Link></ListItem>
                            <ListItem mb='1'><Link>Category 6</Link></ListItem>
                        </UnorderedList>
                    </Box>
                </GridItem>
                <GridItem colSpan={3}>
                    <Box w='100%' h='100%'>
                        <Grid
                            templateColumns='repeat(3, 1fr)'
                            h='auto'
                            p='5'
                            gap='5'>
                            <GridItem>
                                <Box h='250px' w='250px' bg='tomato' />
                                <Text textAlign='center' fontSize='xl' mt='2'>Cocktail 1</Text>
                            </GridItem>
                            <GridItem>
                                <Box h='250px' w='250px' bg='tomato' />
                                <Text textAlign='center' fontSize='xl' mt='2'>Cocktail 1</Text>
                            </GridItem>
                            <GridItem>
                                <Box h='250px' w='250px' bg='tomato' />
                                <Text textAlign='center' fontSize='xl' mt='2'>Cocktail 1</Text>
                            </GridItem>
                            <GridItem>
                                <Box h='250px' w='250px' bg='tomato' />
                                <Text textAlign='center' fontSize='xl' mt='2'>Cocktail 1</Text>
                            </GridItem>
                            <GridItem>
                                <Box h='250px' w='250px' bg='tomato' />
                                <Text textAlign='center' fontSize='xl' mt='2'>Cocktail 1</Text>
                            </GridItem>
                            <GridItem>
                                <Box h='250px' w='250px' bg='tomato' />
                                <Text textAlign='center' fontSize='xl' mt='2'>Cocktail 1</Text>
                            </GridItem>
                        </Grid>
                    </Box>
                </GridItem>
            </Grid>
        </Container>
    );
};

export default Drinks;