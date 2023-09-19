import { MobileAndTablet } from "styling/breakpoints";
import { ElementColor } from "constants/colors";
import { Flex } from "@chakra-ui/react";
import HeaderLeft from "./left";
import HeaderRight from "./right";


function HeaderWrapper({ children }) {
    return (
        <Flex
            w='full'
            h='85px'
            justify='space-between'
            position='fixed'
            top='0px'
            p='16px 10px 16px'
            align='center'
            bgColor={ElementColor.white}
            borderBottom={`1px solid ${ElementColor.lightGray}`}
            zIndex={2}
            // boxShadow={`0px 1px 25px ${ElementColor.lightGray }`}
        >
            {children}
        </Flex>
    )
}

function MobileHeader() {
    return (
        <MobileAndTablet>
            <HeaderWrapper>
                <HeaderLeft />
                <HeaderRight />
            </HeaderWrapper>
        </MobileAndTablet>
    )
}

export default MobileHeader
  