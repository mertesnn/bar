import Light from '../Images/logoLight.svg';
import Dark from '../Images/logoDark.svg';
import { Link } from 'react-router-dom';
import { Image, useColorMode } from '@chakra-ui/react';

const Logo = () => {
    const { colorMode } = useColorMode();
    return (
        <Link to='/'>
            <Image
                h='80px'
                src={colorMode === 'light' ? Light : Dark}
                alt="Bar Logo" />
        </Link>
    );
}

export default Logo;