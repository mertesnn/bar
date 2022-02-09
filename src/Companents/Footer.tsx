import Logo from '../Images/logo-placeholder.png';
import { Link } from 'react-router-dom';
import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
    Image,
    useColorMode
} from '@chakra-ui/react';
import { FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { ReactNode } from 'react';

const Links = [
    {
        text: 'Home',
        to: '/'
    },
    {
        text: 'Drinks',
        to: '/drinks'
    },
    {
        text: 'About',
        to: '/about'
    },
    {
        text: 'Contact',
        to: '/contact'
    }
];

const SocialButton = ({
    children,
    label,
    href,
}: {
    children: ReactNode;
    label: string;
    href: string;
}) => {
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
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

const Footer = () => {
    const { colorMode } = useColorMode();
    return (
        <Box
            mt={4}
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                spacing={4}
                justify={'center'}
                align={'center'}>
                <Image
                    w='100px'
                    src={Logo} />
                <Stack direction={'row'} spacing={6}>
                    {Links.map((link, index) => (
                        <Link
                            to={link.to}
                            key={index}
                            className={colorMode === 'light' ? 'navLinkLight' : 'navLinkDark'}>
                            {link.text}
                        </Link>
                    ))}
                </Stack>
            </Container>

            <Box
                borderTopWidth={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.700')}>
                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ base: 'center', md: 'space-between' }}
                    align={{ base: 'center', md: 'center' }}>
                    <Text>© 2020 Tilky Bar Templates. All rights reserved</Text>
                    <Stack direction={'row'} spacing={6}>
                        <SocialButton label={'Instagram'} href={'https://www.instagram.com/mertesen__/'}>
                            <FaInstagram />
                        </SocialButton>
                        <SocialButton label={'Github'} href={'https://github.com/mertesnn/'}>
                            <FaGithub />
                        </SocialButton>
                        <SocialButton label={'LinkedIn'} href={'https://www.linkedin.com/in/mert-esen/'}>
                            <FaLinkedinIn />
                        </SocialButton>
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
}

export default Footer;