import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    VStack,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    Button
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Details from '../Companents/Details';
import Ingredients from '../Companents/Ingredients';
import { getRandomDrink } from 'src/Utils/Services';
import { pushIngredients } from 'src/Utils/Functions';
import ErrorPage from './404';

const Random = () => {
    const [drink, setDrink] = useState<Drink['drink'] | undefined>(undefined);
    const [ingredientsAndMeasures, setIngredientsAndMeasures] = useState<Drink['ingredientsAndMeasures'] | undefined>(undefined);

    const handleDrinksData = async () => {
        const data: Drink['drink'] | undefined = await getRandomDrink();
        setDrink(data);
    }

    useEffect(() => {
        handleDrinksData();
    }, []);

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
                    <VStack>
                        <Image
                            mb='10'
                            rounded={'2xl'}
                            alt={'product image'}
                            src={drink?.strDrinkThumb}
                            align={'center'}
                            fit='cover'
                            w={'100%'}
                            h={{ lg: '500px' }}
                        />
                        <Button
                            bg='red.400'
                            _hover={{ bg: 'red.500' }}
                            onClick={handleDrinksData}>
                            Roll Again
                        </Button>
                    </VStack>
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

export default Random