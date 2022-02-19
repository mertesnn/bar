import Axios from "axios"

export const getDrink = async (drinkId: string | undefined) => {
    const res = await Axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
    );
    return res?.data?.drinks[0];
}
export const getRandomDrink = async () => {
    const res = await Axios.get(
        'https://www.thecocktaildb.com/api/json/v1/1/random.php'
    );
    return res?.data?.drinks[0];
}

export const getCategories = async () => {
    const res = await Axios.get(
        'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
    );
    return res?.data?.drinks;
}

export const getDrinksBySelectedCategory = async (category: string | undefined) => {
    const res = await Axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`
    );
    return res?.data?.drinks;
}

export const getSearchedDrinks = async (key: string | undefined) => {
    const res = await Axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${key}`
    );
    return res?.data?.drinks;
}