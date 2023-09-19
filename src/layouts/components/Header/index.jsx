import React from 'react'
import MobileHeader from './mobile'
import { Box } from '@chakra-ui/react'


function HeaderWrapper({ children }) {
    return (
        <Box as='header' pos='relative'>
            {children}
        </Box>
    )
}

function Header () {
    return (
        <HeaderWrapper>
            <MobileHeader/>
        </HeaderWrapper>
    )
}

export default Header