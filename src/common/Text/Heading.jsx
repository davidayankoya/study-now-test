import { TextColor } from "constants/colors"
import { TextLg } from './Text'
import { HStack } from "@chakra-ui/react"


export function Heading({
    text,
    children,
    ...props
}) {
    return (
        <HStack justify='space-between' w='full'>
            <TextLg as='h4' fontWeight={props.fontWeight ?? 500} color={props.color ?? TextColor.dark} {...props}>
                {text}
            </TextLg>
            <HStack>{children}</HStack>
        </HStack>
    )
}