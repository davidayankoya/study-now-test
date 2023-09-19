import { Center, Image } from '@chakra-ui/react'
import { ElementColor } from 'constants/colors'
import React from 'react'
import Logo from 'assets/logo/logo.svg'


function LogoLoader() {
    return (
        <Center 
            width='100%'
            height='100%'
            position='fixed'
            backgroundColor={ElementColor.overlayDark}
            backdropFilter='blur(8px)'
            top={0}
            left={0}
            zIndex='3000'
        >
            <Image
                src={Logo}
                width={[250, 300]}
                height='auto'
                animation='vertical-bounce .7s linear infinite alternate'
            />
        </Center>
    )
}

export default LogoLoader