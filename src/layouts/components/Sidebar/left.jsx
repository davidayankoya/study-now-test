import { Box, HStack } from '@chakra-ui/react'
import { ElementColor, TextColor } from 'constants/colors'
import React from 'react'
import { Image, VStack, Link } from "@chakra-ui/react";
import LogoImg from 'assets/logo/logo.svg'
import AccountCard from "common/Card/AccountCard";
import InviteFriendCard from "common/Card/InviteFriendCard";
import { Link as RouterLink } from "react-router-dom";
import DashboardIcon from 'assets/icon/dashboard.svg'
import CoursesIcon from 'assets/icon/courses.svg'
import DownloadsIcon from 'assets/icon/downloads.svg'
import RecommendedIcon from 'assets/icon/recommended.svg'
import AccountIcon from 'assets/icon/my_account.svg'
import { DesktopOnly } from 'styling/breakpoints';


export const headerLinks = [
    {
        title: "Dashboard",
        url: "#",
        icon: DashboardIcon,
    },
    {
        title: "My Courses",
        url: "/",
        icon: CoursesIcon,
    },
    {
        title: "Downloads",
        url: "#",
        icon: DownloadsIcon,
    },
    {
        title: "Recommended",
        url: "#",
        icon: RecommendedIcon,
    },
    {
        title: "My Account",
        url: "#",
        icon: AccountIcon,
    },
]

export function PageLink({ url, icon, title, color, center, onClick }) {
    return (
        <HStack w='full' justify='start' spacing={2} pl={center ? '29%' : ''} onClick={onClick}>
            <Image
                src={icon}
                alt={`${url} icon`}
            />
            <Link as={RouterLink} to={url} color={color} fontSize={['16px', '16x', '16px']}>
                {title}
            </Link>
        </HStack>
    )
}

function LeftSidebar () {
    return (
        <DesktopOnly style={{ width: '24%' }}>
            <Box bgColor={ElementColor.washedWhite} px='70px' w='full' h='100vh' overflowY='auto' className='scroll-custom'>
                <VStack minH='100vh' align='start' pt={10} pb={8} spacing={10} fontFamily='Space Grotesk'>
                    <Link to='/'>
                        <Image
                            src={LogoImg}
                            alt='study now logo'
                            w='200px'
                            h='26px'
                        />
                    </Link>

                    <AccountCard/>

                    <VStack spacing='20px' fontWeight={600}>
                        {headerLinks.map((e, index) =>
                            <PageLink
                                key={index}
                                color={index === 1 ? TextColor.dark : TextColor.lightGray}
                                {...e}
                            />
                        )}
                    </VStack>

                    <InviteFriendCard/>
                </VStack>
            </Box>
        </DesktopOnly>
    )
}

export default LeftSidebar