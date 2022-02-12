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
    useColorModeValue
} from '@chakra-ui/react';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Details from '../Companents/Details';
import Ingredients from '../Companents/Ingredients';

const SingleDrink = () => {
    const { drinkId } = useParams();

    const [drink, setDrink] = useState<Drink['drink'] | undefined>(undefined);
    const [ingredientsAndMeasures, setIngredientsAndMeasures] = useState<Drink['ingredientsAndMeasures'] | undefined>(undefined);

    const getDrink = useCallback(
        async () => {
            const { data } = await axios.get(
                `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
            );
            setDrink(data?.drinks[0]);
        },
        [drinkId],
    )

    const pushIngredients = useCallback(
        () => {
            const arrayIngredient: String[] = [];
            const arrayMeasures: String[] = [];
            const arrayBoth = [];
            drink && Object?.entries(drink)?.forEach((item) => {
                if (item[0].startsWith('strIngredient') && item[1])
                    arrayIngredient.push(item[1]);
                else if (item[0].startsWith('strMeasure') && item[1])
                    arrayMeasures.push(item[1]);
            });

            for (let i = 0; i < arrayIngredient.length; i++) {
                const obj: Drink['ingredients'] = {
                    ingredients: arrayIngredient[i],
                    measures: arrayMeasures[i]
                }
                arrayBoth.push(obj);
            }
            setIngredientsAndMeasures(arrayBoth);
        },
        [drink],
    )


    useEffect(() => {
        getDrink();
    }, [getDrink]);

    useEffect(() => {
        pushIngredients();
    }, [drink, pushIngredients]);

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
                            <Details drink={drink} />
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
                            <Ingredients ingredients={ingredientsAndMeasures} />
                        </Box>
                    </Stack>
                </Stack>
            </SimpleGrid>
        </Container>
    )
}

export default SingleDrink