import {
    Button,
    Container,
    FormControl,
    FormLabel,
    Grid,
    GridItem,
    HStack,
    Input,
    InputGroup,
    InputLeftElement,
    Stack,
    Text,
    Textarea,
    VStack
} from '@chakra-ui/react';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaUserAlt } from 'react-icons/fa';
import SocialButton from 'src/Companents/SocialButton';

const Contact = () => {
    return (
        <Container maxW='container.xl' py='70px' centerContent>
            <Text
                fontSize='5xl'>
                Get in touch
            </Text>
            <Text
                fontSize='lg'>
                Any question or remarks? Just write us a message!
            </Text>

            <Grid
                mt={{ base: 0, md: 10 }}
                w='100%'
                templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}>
                <GridItem
                    pt='20'
                    display='flex'
                    justifyContent='space-between'
                    flexDirection='column'>
                    <VStack alignItems='center' gap={{ base: 0, md: 5 }} mb={{ base: 10, md: 0 }}>
                        <HStack>
                            <FaMapMarkerAlt fontSize='2rem' color='#F56565' />
                            <Text fontSize='lg'>Izmir / Turkey</Text>
                        </HStack>
                        <HStack>
                            <FaPhoneAlt fontSize='2rem' color='#F56565' />
                            <Text fontSize='lg'>+90 (0543) 873 1332</Text>
                        </HStack>
                        <HStack>
                            <FaEnvelope fontSize='2rem' color='#F56565' />
                            <Text fontSize='lg'>mert_esen_@hotmail.com</Text>
                        </HStack>
                    </VStack>
                    <Stack direction={'row'} justifyContent='center' spacing={6}>
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
                </GridItem>
                <GridItem p='3rem 4rem' bg={'#F56565'} rounded='3xl'>
                    <FormControl>
                        <FormLabel htmlFor='first-name' color='#fff' fontSize='xl' fontWeight='400'>First name</FormLabel>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                                children={<FaUserAlt color='#fff' />}
                            />
                            <Input
                                id='first-name'
                                type='text'
                                color='#fff'
                                _active={{ borderColor: '#fff' }}
                                _focus={{ borderColor: '#fff' }}
                            />
                        </InputGroup>
                    </FormControl>
                    <FormControl mt='8'>
                        <FormLabel htmlFor='mail' color='#fff' fontSize='xl' fontWeight='400'>E-mail</FormLabel>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                                children={<FaEnvelope color='#fff' />}
                            />
                            <Input
                                id='mail'
                                type='text'
                                color='#fff'
                                _active={{ borderColor: '#fff' }}
                                _focus={{ borderColor: '#fff' }}
                            />
                        </InputGroup>
                    </FormControl>
                    <FormControl mt='8'>
                        <FormLabel htmlFor='message' color='#fff' fontSize='xl' fontWeight='400'>E-mail</FormLabel>
                        <Textarea
                            id='message'
                            color='#fff'
                            _active={{ borderColor: '#fff' }}
                            _focus={{ borderColor: '#fff' }} />
                    </FormControl>
                    <FormControl id="name" mt='8' display='flex'
                        alignItems='center'
                        justifyContent='center'>
                        <Button
                            bg='red.500'
                            color="white"
                            p='7'
                            _hover={{ bg: 'red.300' }}>
                            Send Message
                        </Button>
                    </FormControl>
                </GridItem>
            </Grid>
        </Container>
    );
};

export default Contact;
