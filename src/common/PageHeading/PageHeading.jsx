import { Box, HStack, Text } from "@chakra-ui/react"
import { TextColor } from "constants/colors"
import React from "react"


export function PageHeading({ title, children, ...props }) {
    return (
        <Box w='full' mb={0} mt={[1, 4]} px={[0, 0]} {...props}>
            <Text
                as='h3'
                fontSize={['22px', '22px', '28px']}
                fontWeight={700}
                color={props.color ?? TextColor.dark}
                textOverflow='ellipsis'
                overflow='hidden'
                whiteSpace='nowrap'
            >
                {title}
            </Text>
            <HStack w='full' justify={['end', 'end', 'end']}>
                {children}
            </HStack>
        </Box>
    )
}

export function SubHeading({ text }) {
    return (
        <Box w='full' mb={5} mt={[3, 3]} px={[0, 0]}>
            <Text fontSize={['13px', '14px']} fontWeight={400} opacity={0.7} color={TextColor.grey}>
                {text}
            </Text>
        </Box>
    )
}