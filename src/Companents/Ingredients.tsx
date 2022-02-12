import {
    Box,
    SimpleGrid,
    Image,
    Text
} from "@chakra-ui/react"

type IngredientsTypes = {
    ingredients: Drink['ingredientsAndMeasures'] | undefined
}

const Ingredients: React.FC<IngredientsTypes> = ({ ingredients }) => {
    return (
        <SimpleGrid minChildWidth='120px' spacing='10px'>
            {ingredients ? ingredients.map((item, index) => (
                <Box key={index}>
                    <Image
                        src={
                            `https://www.thecocktaildb.com/images/ingredients/${item.ingredients}-Small.png`
                        } m='auto' />
                    <Text textAlign='center' mt='2'>
                        {item.ingredients}
                    </Text>
                    <Text textAlign='center'>
                        {item.measures ? `( ${item.measures} )` : ``}
                    </Text>
                </Box>
            )) : 'No Ingredients.'}
        </SimpleGrid>
    )
}

export default Ingredients