interface Drink {
    links: {
        text: string,
        to: string
    }[],
    drink: {
        idDrink: string,
        strDrink: string,
        strTags: string,
        strCategory: string,
        strIBA: string,
        strAlcoholic: string,
        strGlass: string,
        strInstructions: string,
        [key: string]: string
    },
    ingredients: {
        ingredients: String,
        measures: String
    },
    ingredientsAndMeasures: {
        ingredients: String,
        measures: String
    }[],
    categories: {
        strCategory: string
    }[],
    random: {
        idDrink: string,
        strDrink: string,
        strDrinkThumb: string,
    }[]
}