import { HStack, Image, VStack, Box } from '@chakra-ui/react'
import { TextLg, TextSm } from 'common/Text/Text'
import { ElementColor } from 'constants/colors'
import React from 'react'
import CapIcon from 'assets/icon/cap.svg'
import ClockIcon from 'assets/icon/clock.svg'

function InfoItem({ icon, text, color }) {
    return (
        <HStack spacing={2}>
            <Image
                src={icon}
                w='24px'
                h='24px'
                alt={`${text} icon`}
            />
            <TextLg color={color} fontSize={['12px', '12px', '14px']}>{text}</TextLg>
        </HStack>
    )
}

function CourseCard({ w, bgColor, textColor, img, title, shortTitle, school, timeLeft }) {
    return (
        <HStack w={w ?? 'full'} spacing={4} borderRadius='10px' bgColor={bgColor} p='18px'>
            <Box w={['35%', '35%', '30%']} borderRadius='10px' bgColor={ElementColor.white}>
                <Image
                    src={img}
                    w='full'
                    minH={['120px', '120px', '150px']}
                    alt={`${title} icon`}
                />
            </Box>

            <VStack w={['65%', '65%', '60%']} minH={['120px', '120px', '150px']} align='start' justify='space-between' spacing={[6, 6, 0]}>
                <Box py={2} px={4} bgColor={ElementColor.white} borderRadius='10px'>
                    <TextSm color={ElementColor.orange} fontSize={['13px', '13px', '14px']}>{shortTitle}</TextSm>
                </Box>

                <TextLg color={textColor} fontSize={['16px', '16px', '18px']} fontWeight={700}>{title}</TextLg>

                <HStack w='full' justify='space-between'>
                    <InfoItem icon={CapIcon} text={school} color={textColor} />
                    <InfoItem icon={ClockIcon} text={timeLeft} color={textColor} />
                </HStack>
            </VStack>
        </HStack>
    )
}

export default CourseCard