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
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Details from '../Companents/Details';
import Ingredients from '../Companents/Ingredients';
import { getDrink } from 'src/Utils/Services';
import { pushIngredients } from 'src/Utils/Functions';
import ErrorPage from './404';

const SingleDrink = () => {
    const { drinkId } = useParams();
    const [drink, setDrink] = useState<Drink['drink'] | undefined>(undefined);
    const [ingredientsAndMeasures, setIngredientsAndMeasures] = useState<Drink['ingredientsAndMeasures'] | undefined>(undefined);

    useEffect(() => {
        const handleDrinksData = async () => {
            const data: Drink['drink'] | undefined = await getDrink(drinkId);
            setDrink(data);
        }
        handleDrinksData();
    }, [drinkId]);

    useEffect(() => {
        setIngredientsAndMeasures(
            pushIngredients(drink)
        );
    }, [drink]);

    const DefaultContent = () => {
        return (
            <Container maxW={'7xl'} py='70px'>
                <SimpleGrid
                    columns={{ base: 1, lg: 2 }}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 18, md: 0 }}>
                    <Flex>
                        <Image
                            rounded={'2xl'}
                            alt={'product image'}
                            src={drink?.strDrinkThumb}
                            align={'center'}
                            fit='cover'
                            w={'100%'}
                            h={{ lg: '500px' }}
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
                                    borderColor='red.300'
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
                                    color={useColorModeValue('red.300', 'red.400')}
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
                                    color={useColorModeValue('red.300', 'red.400')}
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

    return (
        drink ? <DefaultContent /> : <ErrorPage />
    )
}

export default SingleDrink