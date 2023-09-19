import { Image, VStack, Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton, HStack } from "@chakra-ui/react";
import { ElementColor } from "constants/colors";
import { RiSearchLine } from 'react-icons/ri' 
import NotificationIcon from 'assets/icon/notification_bell.svg'
import { Input } from "common/Form";
import { Completions, MileStones, Performance } from "layouts/components/Sidebar/right";



function Content({ toggleSidebar }) {
    return (
        <VStack minH='full' pt={10} pb={14} justify='space-between' spacing={6} fontFamily='Space Grotesk'>
            
            <HStack w='full' justify='space-between'>
                <Image
                    src={NotificationIcon}
                    w='24px'
                    h='24px'
                />
                <Input
                    leftElement={<RiSearchLine color={ElementColor.gray} />}
                    placeholder='Search for courses'
                />
            </HStack>

            <MileStones />

            <Completions />

            <Performance />

        </VStack>
    )
}


function RightSidebar({ isOpen, toggleSidebar }) {
    return (
        <Drawer isOpen={isOpen} onClose={toggleSidebar} placement="right" size='sm'>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerBody bgColor={ElementColor.washedWhite} overflowY='auto' className='scroll-custom'>
                    <Content
                        toggleSidebar={toggleSidebar}
                    />
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}

export default RightSidebar;