import { useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Links as LinksAll } from "../Utils/Constants";

const Links = () => {
    const { colorMode } = useColorMode();
    return (
        <>
            {LinksAll.map((link, index) => (
                <Link
                    to={link.to}
                    key={index}
                    className={colorMode === 'light' ? 'navLinkLight' : 'navLinkDark'}>
                    {link.text}
                </Link>
            ))}
        </>
    );
}

export default Links;