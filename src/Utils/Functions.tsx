export const pushIngredients = (drink: Drink['drink'] | undefined) => {
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
    return arrayBoth;
}

export const debounce = (fnc: Function, delay: number) => {
    let timeout: any
    return () => {
        if (timeout) clearTimeout(timeout)
        timeout = setTimeout(() => {
            fnc()
        }, delay);
    }
}