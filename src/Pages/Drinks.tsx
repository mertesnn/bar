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
    Image
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Categories {
    categories: {
        strCategory: string
    }[],
    random: {
        idDrink: string,
        strDrink: string,
        strDrinkThumb: string,
    }[]
}

const Drinks = () => {

    const [categories, setCategories] = useState<Categories['categories']>([]);
    const [randomCocktail, setRandomCockTail] = useState<Categories['random']>([]);

    const getCategories = async () => {
        const { data } = await axios.get(
            'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
        );
        setCategories(data?.drinks);
    }

    const getRandomCoctail = async () => {
        const { data } = await axios.get(
            'https://www.thecocktaildb.com/api/json/v1/1/random.php'
        );
        setRandomCockTail(data?.drinks);
    }

    useEffect(() => {
        getCategories();
        getRandomCoctail();
    }, []);

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
                        <Divider mt='3' mb='3' w='80%' />
                        <UnorderedList styleType='none'>
                            {categories ? categories.map((item, index) => (
                                <ListItem mb='2' key={index}>
                                    {item?.strCategory}
                                </ListItem>

                            )) : 'No data.'}
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
                            {randomCocktail ? randomCocktail.map((item, index) => (
                                <Link to={item.idDrink} key={index}>
                                    <Box>
                                        <Image
                                            src={`${item.strDrinkThumb}/preview`}
                                            rounded='md'
                                            m='auto' />
                                    </Box>
                                    <Text textAlign='center' fontSize='xl' mt='2'>{item.strDrink}</Text>
                                </Link>
                            )) : 'No data.'}
                        </Grid>
                    </Box>
                </GridItem>
            </Grid>
        </Container>
    );
};

export default Drinks;