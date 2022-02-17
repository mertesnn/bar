import BarLogo from '../Images/logo-placeholder.png';
import { Link } from 'react-router-dom';
import { Image } from '@chakra-ui/react';

const Logo = () => {
    return (
        <Link to='/'>
            <Image
                w='140px'
                src={BarLogo}
                alt="Bar Logo" />
        </Link>
    );
}

export default Logo;