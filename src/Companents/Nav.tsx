import Logo from './Logo';
import Links from './Links';
import {
    Box,
    Flex,
    Button,
    useColorModeValue,
    Stack,
    useColorMode,
    IconButton,
    useDisclosure,
    HStack,
    Center,
    Grid,
    GridItem
} from '@chakra-ui/react';
import {
    MoonIcon,
    SunIcon,
    CloseIcon,
    HamburgerIcon
} from '@chakra-ui/icons';

const Nav = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Box
                bg={useColorModeValue('red.100', 'gray.900')}
                px={4}
                paddingY='5px'>
                <Flex h={16} alignItems={'center'} justifyContent='space-between'>
                    <IconButton
                        bg='red.400'
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <Center>
                        <Box >
                            <Logo />
                        </Box>
                        <HStack
                            as={'nav'}
                            ml='10'
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            <Links />
                        </HStack>
                    </Center>

                    <Flex>
                        <Stack direction={'row'} spacing={7}>
                            <Button onClick={toggleColorMode} bg='red.400'>
                                {colorMode === 'light' ? <MoonIcon color='white' /> : <SunIcon />}
                            </Button>
                        </Stack>
                    </Flex>
                </Flex>
                {isOpen ? (
                    <Box pb={4} display={{ base: 'flex', md: 'none' }} justifyContent='center'>
                        <Stack as={'nav'} spacing={4} alignItems='center'>
                            <Links />
                        </Stack>
                    </Box>
                ) : null}
            </Box>
            <Center height='50px'></Center>
        </>
    );
}

export default Nav;