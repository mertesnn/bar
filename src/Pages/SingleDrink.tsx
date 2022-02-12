import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    List,
    ListItem,
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleDrink = () => {
    const { drinkId } = useParams();

    const [drink, setDrink] = useState<Drink['drink']>();
    const [ingredients, setIngredients] = useState<{ ingredients: string; measures: string; }[] | undefined>([]);

    const getDrink = async () => {
        const { data } = await axios.get(
            `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
        );
        setDrink(data?.drinks[0]);
    }

    const objectToArray = () => {
        const newIngredients = [];
        const newArray = drink ? Object.values(drink) : [];

        for (let i = 17, k = 32; (i < 32) && (k < 47); i++, k++) {
            let x: Drink['ingredients'] = {
                ingredients: newArray[i],
                measures: newArray[k]
            };
            newIngredients.push(x);
        }
        setIngredients(newIngredients);
    }

    useEffect(() => {
        getDrink();
    }, []);

    useEffect(() => {
        objectToArray();
    }, [drink]);

    return (
        <Container maxW={'7xl'}>
            <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 18, md: 0 }}>
                <Flex>
                    <Image
                        rounded={'md'}
                        alt={'product image'}
                        src={drink?.strDrinkThumb}
                        fit={'cover'}
                        align={'center'}
                        w={'100%'}
                        h={{ base: '100%', sm: '400px', lg: '500px' }}
                    />
                </Flex>
                <Stack spacing={{ base: 6, md: 10 }}>
                    <Box as={'header'}>
                        <Heading
                            lineHeight={1.1}
                            fontWeight={600}
                            fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                            {drink?.strDrink}
                        </Heading>
                    </Box>

                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={'column'}
                        divider={
                            <StackDivider
                                borderColor={useColorModeValue('gray.200', 'gray.600')}
                            />
                        }>
                        <VStack spacing={{ base: 4, sm: 6 }}>
                            <Text fontSize={'lg'}>
                                {drink?.strInstructions}
                            </Text>
                        </VStack>

                        <Box>
                            <Text
                                fontSize={{ base: '16px', lg: '18px' }}
                                color={useColorModeValue('yellow.500', 'yellow.300')}
                                fontWeight={'500'}
                                textTransform={'uppercase'}
                                mb={'4'}>
                                Details
                            </Text>

                            <List spacing={2}>
                                {drink?.strCategory ? (
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            Category:
                                        </Text>
                                        {` ${drink?.strCategory}`}
                                    </ListItem>
                                ) : ''}
                                {drink?.strIBA ? (
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            IBA:
                                        </Text>
                                        {` ${drink?.strIBA}`}
                                    </ListItem>
                                ) : ''}
                                {drink?.strAlcoholic ? (
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            Alcoholic:
                                        </Text>
                                        {` ${drink?.strAlcoholic}`}
                                    </ListItem>
                                ) : ''}
                                {drink?.strGlass ? (
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            Glass:
                                        </Text>
                                        {` ${drink?.strGlass}`}
                                    </ListItem>
                                ) : ''}
                                {drink?.strTags ? (
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            Category:
                                        </Text>
                                        {` ${drink?.strTags}`}
                                    </ListItem>
                                ) : ''}
                            </List>
                        </Box>
                        <Box>
                            <Text
                                fontSize={{ base: '16px', lg: '18px' }}
                                color={useColorModeValue('yellow.500', 'yellow.300')}
                                fontWeight={'500'}
                                textTransform={'uppercase'}
                                mb={'4'}>
                                Ingredients
                            </Text>

                            <SimpleGrid minChildWidth='120px' spacing='10px'>
                                {ingredients ? ingredients.map((item, index) => (item.ingredients !== null ?
                                    <Box key={index}>
                                        <Image src={`https://www.thecocktaildb.com/images/ingredients/${item.ingredients}-Small.png`} m='auto' />
                                        <Text textAlign='center' mt='2'>{item.ingredients}</Text>
                                        <Text textAlign='center'>( {item.measures} )</Text>
                                    </Box>
                                    : '')) : 'no'}
                            </SimpleGrid>
                        </Box>
                    </Stack>
                </Stack>
            </SimpleGrid>
        </Container>
    )
}

export default SingleDrink