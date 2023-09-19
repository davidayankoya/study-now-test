import React from "react"
import { useDisclosure, IconButton, HStack, Image } from '@chakra-ui/react'
import { TiThMenu } from 'react-icons/ti';
import { ElementColor } from "constants/colors";
import Logo from 'assets/logo/logo.svg'
import { Link } from "react-router-dom";
import LeftSidebar from "./leftSide";


function HeaderLeft() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <React.Fragment>
            <HStack spacing={3}>
                <IconButton
                    variant="unstyled"
                    icon={<TiThMenu size='28px' color={ElementColor.darkGray} />}
                    aria-label="open left menu"
                    onClick={onOpen}
                />
                <Link to="/">
                    <Image
                        src={Logo}
                        width='100px'
                        alt='study now logo'
                    />
                </Link>
            </HStack>

            <LeftSidebar
                isOpen={isOpen}
                toggleSidebar={onClose}
            />
        </React.Fragment>
    )
}

export default HeaderLeft