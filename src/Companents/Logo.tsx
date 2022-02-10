import BarLogo from '../Images/logo-placeholder.png';
import { Image } from '@chakra-ui/react';

const Logo = () => {
    return (
        <Image
            w='140px'
            src={BarLogo}
            alt="Bar Logo" />
    );
}

export default Logo;