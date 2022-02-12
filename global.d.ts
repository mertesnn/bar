interface Drink {
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
    }[]

}