import { Box } from '@chakra-ui/react'
import { ElementColor, TextColor } from 'constants/colors'
import React from 'react'
import { Image, VStack, HStack, Center, UnorderedList, ListItem } from "@chakra-ui/react";
import { RiSearchLine } from 'react-icons/ri' 
import StarIcon from 'assets/icon/star.svg'
import TrophyIcon from 'assets/icon/trophy.svg'
import NotificationIcon from 'assets/icon/notification_bell.svg'
import { Input } from "common/Form";
import { Text2XL, TextLg, TextMd, TextSm, TextXL } from "common/Text/Text";
import { PiCaretRightBold } from 'react-icons/pi' 
import { DesktopOnly } from 'styling/breakpoints';


const completed = [
    { count: 100, title: 'Tutorials', starColor: ElementColor.blue },
    { count: 18, title: 'Topics', starColor: ElementColor.orange },
    { count: 120, title: 'Exercises', starColor: ElementColor.purple },
]

export function MileStones() {
    return (
        <VStack w='full' align='start'>
            <Text2XL fontWeight={700}>Milestones</Text2XL>

            <HStack w='full' p='20px' bgColor={ElementColor.white} borderRadius='10px'>
                <Image
                    src={TrophyIcon}
                    w='76px'
                    h='83px'
                    alt='trophy'
                />
                <VStack w='full' align='start'>
                    <TextLg fontWeight={700}>Goals</TextLg>
                    <TextLg fontWeight={700}>Progress Bar - 82%</TextLg>
                </VStack>
            </HStack>
        </VStack>
    )
}

function CompletedRow({ count, title, starColor, hasBorder }) {
    return (
        <HStack w='full' justify='space-between' py='21px' px='22' borderBottom={hasBorder ? `1px solid ${ElementColor.lightGray}` : ''} cursor='pointer'>
            <HStack spacing={3}>
                <Center p={1} borderRadius='full' bgColor={starColor}>
                    <Image
                        src={StarIcon}
                        w='25px'
                        h='25px'
                        alt='star'
                    />
                </Center>
                <VStack align='start'>
                    <TextXL fontWeight={700} color={TextColor.dark}>{count}</TextXL>
                    <TextSm fontWeight={700} color={TextColor.gray}>{title}</TextSm>
                </VStack>
            </HStack>

            <Center h='full'>
                <PiCaretRightBold size='10px' />
            </Center>
        </HStack>
    )
}

export function Completions() {
    return (
        <VStack w='full' align='start'>
            <TextLg fontWeight={700}>You have successfully completed</TextLg>
            <VStack w='full' spacing={0} bgColor={ElementColor.white} borderRadius='10px'>
                {completed.map((e, index, arr) =>
                    <CompletedRow
                        key={index}
                        hasBorder={index !== (arr.length - 1)}
                        {...e}
                    />
                )}
            </VStack>
        </VStack>
    )
}

function PerformanceRow({ title, content }) {
    return (
        <VStack w='full' align='start'>
            <UnorderedList>
                <ListItem fontSize={['16px', '16px', '18px']} fontWeight={700} color={TextColor.dark}>{title}</ListItem>
                <TextMd fontSize={['14px', '14px', '14px']}>{content}</TextMd>
            </UnorderedList>
        </VStack>
    )
}

export function Performance() {
    return (
        <VStack w='full' align='start' spacing={6}>
            <TextLg fontWeight={700}>Amazing Performance in</TextLg>
            <VStack spacing={4}>
                <PerformanceRow
                    title='Illustration Design'
                    content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
                />
                <PerformanceRow
                    title='User Experience Design'
                    content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
                />
            </VStack>
        </VStack>
    )
}

function RightSidebar () {
    return (
        <DesktopOnly style={{ width: '33%' }}>
            <Box bgColor={ElementColor.washedWhite} px='40px' w='full' h='100vh' overflowY='auto' className='scroll-custom'>
                <VStack minH='100vh' py={10} spacing={6} fontFamily='Space Grotesk'>
                    
                    <HStack w='full' justify='space-between'>
                        <Image
                            src={NotificationIcon}
                            w='24px'
                            h='24px'
                        />
                        <Input
                            leftElement={<RiSearchLine color={ElementColor.gray} />}
                            placeholder='Search for courses'
                            w='50%'
                        />
                    </HStack>

                    <MileStones />

                    <Completions />

                    <Performance />

                </VStack>
            </Box>
        </DesktopOnly>
    )
}

export default RightSidebar