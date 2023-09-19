import { Image, VStack, Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton, Link } from "@chakra-ui/react";
import { ElementColor } from "constants/colors";
import LogoImg from 'assets/logo/logo.svg'
import { headerLinks } from "layouts/components/Sidebar/left";
import AccountCard from "common/Card/AccountCard";
import InviteFriendCard from "common/Card/InviteFriendCard";
import { PageLink } from "layouts/components/Sidebar/left";



function Content({ toggleSidebar }) {
    return (
        <VStack h='full' pt={10} pb='120px' justify='space-between' fontFamily='Space Grotesk'>
            <Link to='/' onClick={toggleSidebar}>
                <Image
                    src={LogoImg}
                    alt='study now logo'
                    w='200px'
                    h='26px'
                />
            </Link>

            <AccountCard w='full' center/>
            
            <VStack w='full' align='center' spacing={6} fontWeight={600}>
                {headerLinks.map((e, index) =>
                    <PageLink
                        onClick={toggleSidebar}
                        key={index}
                        center
                        {...e}
                    />
                )}
            </VStack>

            <InviteFriendCard/>
        </VStack>
    )
}


function LeftSidebar({ isOpen, toggleSidebar }) {
    return (
        <Drawer isOpen={isOpen} onClose={toggleSidebar} placement="left" size='full'>
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

export default LeftSidebar;