import {
    chakra,
    useColorModeValue,
    VisuallyHidden
} from "@chakra-ui/react"
import { ReactNode } from "react"

type SocialButtonTypes = {
    children: ReactNode,
    label: string,
    href: string
}

const SocialButton = ({
    children,
    label,
    href,
}: SocialButtonTypes) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            target={'_blank'}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: 'red.400',
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    )
}

export default SocialButton