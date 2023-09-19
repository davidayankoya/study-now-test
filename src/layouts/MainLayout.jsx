import React from "react"
import Header from "./components/Header"
import { Box } from "@chakra-ui/react"
import LeftSidebar from "./components/Sidebar/left"
import RightSidebar from "./components/Sidebar/right"
import { Flex } from "@chakra-ui/react"
import { Container } from "styling/layout"


function ChildrenWrapper({ children }) {
    return (
        <Box
            w={['full', 'full', '43%']}
            mt={['85px', '85px', '0px']}
            maxH={['100vh', '100vh', '100vh']}
        >
            {children}
        </Box>
    )
}

function MainLayout({ children }) {
    return(
        <Container>
            <Header />
            <Flex w='full' justify='center'>
                <LeftSidebar />
                <ChildrenWrapper>{children}</ChildrenWrapper>
                <RightSidebar />
            </Flex>
        </Container>
    )
}

export default MainLayout