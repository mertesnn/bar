import logo from '../Images/logo-placeholder.png';
import { Link as Route } from 'react-router-dom';
import {
    Box,
    Flex,
    Button,
    useColorModeValue,
    Stack,
    useColorMode,
    Image,
    IconButton,
    useDisclosure,
    HStack,
    Center
} from '@chakra-ui/react';
import {
    MoonIcon,
    SunIcon,
    CloseIcon,
    HamburgerIcon
} from '@chakra-ui/icons';

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

const Nav = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Box>
                            <Image
                                boxSize='140px'
                                objectFit='contain'
                                src={logo}
                                alt="Bar Logo"
                            />
                        </Box>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link, index) => (
                                <Route
                                    to={link.to}
                                    key={index}
                                    className={colorMode === 'light' ? 'navLinkLight' : 'navLinkDark'}>
                                    {link.text}
                                </Route>
                            ))}
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
            <Center height='50px'></Center>
        </>
    );
}

export default Nav;