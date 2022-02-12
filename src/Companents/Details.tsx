import {
    List,
    ListItem,
    Text
} from "@chakra-ui/react"

type DetailsType = {
    drink: Drink['drink'] | undefined
}

type RowsType = {
    label: string,
    value: string
}

const Row: React.FC<RowsType> = ({
    label,
    value
}) => {
    return (
        <ListItem>
            <Text as={'span'} fontWeight={'bold'}>
                {label}{' '}
            </Text>
            {value}
        </ListItem>
    )
}

const Details: React.FC<DetailsType> = ({ drink }) => {
    return (
        <List spacing={2}>
            {drink?.strCategory ? (
                <Row label='Category:' value={drink?.strCategory} />
            ) : ''}
            {drink?.strIBA ? (
                <Row label='IBA' value={drink?.strIBA} />
            ) : ''}
            {drink?.strAlcoholic ? (
                <Row label='Alcoholic' value={drink?.strAlcoholic} />
            ) : ''}
            {drink?.strGlass ? (
                <Row label='Glass' value={drink?.strGlass} />
            ) : ''}
            {drink?.strTags ? (
                <Row label='Tags' value={drink?.strTags} />
            ) : ''}
        </List>

    )
}

export default Details