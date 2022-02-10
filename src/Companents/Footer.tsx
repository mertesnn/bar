import Links from './Links';
import Logo from './Logo';
import SocialButton from './SocialButton';
import {
    Box,
    Container,
    Stack,
    Text,
    useColorModeValue
} from '@chakra-ui/react';
import { FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <Box
            mt={100}
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                spacing={4}
                justify={'center'}
                align={'center'}>
                <Logo />
                <Stack direction={'row'} spacing={6}>
                    <Links />
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
                    <Text>© 2020 Tilky Bar. All rights reserved</Text>
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