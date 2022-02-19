import LeftImage from '../Images/aboutLeft.jpg';
import RightImage from '../Images/aboutRight.jpg';
import {
    Container,
    Grid,
    GridItem,
    Image,
    Text,
    useColorModeValue
} from '@chakra-ui/react';
import Logo from 'src/Companents/Logo';

const About = () => {
    return (
        <Container maxW='container.xl' py='70px' centerContent>
            <Logo />
            <Text
                fontSize='5xl'>
                About Us
            </Text>
            <Text
                fontSize='lg'
                as='i'
                color={useColorModeValue('#1A202C', '#E2E8F0')}
                _before={{ content: '"“"', color: '#F56565' }}
                _after={{ content: '"”"', color: '#F56565' }}>
                Drinks that you have never had before!
            </Text>
            <Text
                my='10'
                color={useColorModeValue('#1A202C', '#CBD5E0')}
                textAlign='center'>
                Tilky Bar is a whimsical cocktail and full-service restaurant. Its “You pick ‘em, we pour ‘em” motto drives a non-judgmental drinks menu in a breezy space, adorned with cartoon palm trees, that evokes bygone California and Florida resorts.
            </Text>
            <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={{ base: '20px 0px', md: 3, lg: 6 }} w='100%'>
                <GridItem>
                    <Image src={LeftImage} w='100%' h='600px' fit='cover' rounded='2xl' />
                </GridItem>
                <GridItem colSpan={2}>
                    <Image src={RightImage} w='100%' h='600px' fit='cover' rounded='2xl' />
                </GridItem>
            </Grid>
        </Container >
    );
};

export default About;