import { CloseIcon, HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import {
    Container,
    Input,
    InputGroup,
    InputLeftElement,
    Box,
    Grid,
    GridItem,
    Text,
    Image,
    Spinner,
    Button,
    useDisclosure,
    IconButton,
    VStack,
    HStack
} from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getDrinksBySelectedCategory, getSearchedDrinks } from 'src/Utils/Services';
import { debounce } from 'src/Utils/Functions';

const Drinks = () => {

    const [categories, setCategories] = useState<Drink['categories'] | undefined>(undefined);
    const [drinksByCategory, setDrinksByCategory] = useState<Drink['random'] | undefined>(undefined);

    const searchInput = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        const handleCategoriesData = async () => {
            const data = await getCategories();
            setCategories(data);
        }
        handleCategoriesData();
    }, []);

    const handleSearchDrink = async () => {
        const key = searchInput?.current?.value;
        const data = await getSearchedDrinks(key);
        setDrinksByCategory(data);
    }

    const handleSelectedCategory = async (category: string | undefined) => {
        const data = await getDrinksBySelectedCategory(category);
        setDrinksByCategory(data);
    }

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Container
            maxW='6xl'
            pt='70px'
            pb='70px'>
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    children={<SearchIcon color='gray.300' />}
                />
                <Input
                    type='text'
                    ref={searchInput}
                    placeholder='Search for a Cocktail...'
                    onChange={debounce(handleSearchDrink, 1000)}
                />
            </InputGroup>
            <Grid
                templateColumns='repeat(4, 1fr)'
                mt='50px'
                h='auto'>
                <GridItem
                    colSpan={{ base: 4, md: 1 }}
                    borderRight={{ base: '0', md: '1px' }}
                    borderColor='gray'>
                    <Box
                        w='100%'
                        h='100%'>
                        <HStack>
                            <IconButton
                                size={'md'}
                                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                                aria-label={'Open Menu'}
                                display={{ md: 'none' }}
                                onClick={isOpen ? onClose : onOpen} />
                            <Text
                                fontSize='2xl'
                                h='14'
                                fontWeight='bold'
                                alignItems='center'
                                display='flex'>
                                Categories
                            </Text>
                        </HStack>
                        <VStack
                            alignItems='baseline'
                            mt='3'
                            display={{ base: isOpen ? 'flex' : 'none', md: "flex" }}>
                            {categories ?
                                categories.map((item, index) =>
                                    <Button
                                        colorScheme='gray'
                                        justifyContent='left'
                                        w='90%'
                                        variant='ghost'
                                        key={index}
                                        onClick={debounce(() =>
                                            handleSelectedCategory(item?.strCategory), 500)}>
                                        {item?.strCategory}
                                    </Button>
                                ) : <Spinner />}
                        </VStack>
                    </Box>
                </GridItem>
                <GridItem colSpan={{ base: 4, md: 3 }}>
                    <Box w='100%' h='100%'>
                        <Grid
                            templateColumns={{
                                base: 'repeat(1, 1fr)',
                                sm: drinksByCategory ? 'repeat(2, 1fr)' : 'repeat(1, 1fr)',
                                md: drinksByCategory ? 'repeat(3, 1fr)' : 'repeat(1, 1fr)'
                            }}
                            h='auto'
                            p='5'
                            gap='5'>
                            {drinksByCategory ?
                                drinksByCategory.map((item, index) =>
                                    <Link
                                        to={item.idDrink}
                                        key={index}>
                                        <Box>
                                            <Image
                                                src={`${item.strDrinkThumb}/preview`}
                                                rounded='md'
                                                m='auto' />
                                        </Box>
                                        <Text
                                            textAlign='center'
                                            fontSize='xl' mt='2'>
                                            {item.strDrink}
                                        </Text>
                                    </Link>
                                ) :
                                <VStack>
                                    <Text fontSize='2xl'
                                        fontWeight='bold'
                                        alignItems='center'
                                        display='flex'>
                                        No drinks yet!
                                    </Text>
                                    <Text>
                                        Select a category or search for a coctail.
                                    </Text>
                                </VStack>}
                        </Grid>
                    </Box>
                </GridItem>
            </Grid>
        </Container>
    );
};

export default Drinks;