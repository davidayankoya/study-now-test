import React from 'react'
import { Text as ChakraText } from '@chakra-ui/react'
import { TextColor } from 'constants/colors';


export function TextXs({
    children,
    clip,
    ...props
}) {
    return (
        <ChakraText
            fontSize='10px'
            color={props.color ?? TextColor.dark}
            fontWeight={props.fontWeight ?? 400}
            textOverflow={clip ? 'ellipsis' : 'initial'}
            overflow={clip ? 'hidden' : ''}
            lineHeight={props.lineHeight ?? 1.1}
            whiteSpace={clip ? 'nowrap' : 'normal'}
            {...props}
        >
            {children}
        </ChakraText>
    )
}

export function TextSm({
    children,
    clip,
    ...props
}) {
    return (
        <ChakraText
            fontSize='12px'
            color={props.color ?? TextColor.dark}
            fontWeight={props.fontWeight ?? 400}
            textOverflow={clip ? 'ellipsis' : 'initial'}
            overflow={clip ? 'hidden' : ''}
            lineHeight={props.lineHeight ?? 1.1}
            whiteSpace={clip ? 'nowrap' : 'normal'}
            {...props}
        >
            {children}
        </ChakraText>
    )
}

export function TextMd({
    children,
    clip,
    ...props
}) {
    return (
        <ChakraText
            fontSize='14px'
            color={props.color ?? TextColor.dark}
            fontWeight={props.fontWeight ?? 400}
            textOverflow={clip ? 'ellipsis' : 'initial'}
            overflow={clip ? 'hidden' : ''}
            lineHeight={props.lineHeight ?? 1.1}
            whiteSpace={clip ? 'nowrap' : 'normal'}
            {...props}
        >
            {children}
        </ChakraText>
    )
}

export function TextLg({
    children,
    clip,
    ...props
}) {
    return (
        <ChakraText
            fontSize='16px'
            color={props.color ?? TextColor.dark}
            fontWeight={props.fontWeight ?? 400}
            textOverflow={clip ? 'ellipsis' : 'initial'}
            overflow={clip ? 'hidden' : ''}
            lineHeight={props.lineHeight ?? 1.1}
            whiteSpace={clip ? 'nowrap' : 'normal'}
            {...props}
        >
            {children}
        </ChakraText>
    )
}

export function TextXL({
    children,
    clip,
    ...props
}) {
    return (
        <ChakraText
            fontSize='18px'
            color={props.color ?? TextColor.dark}
            fontWeight={props.fontWeight ?? 400}
            textOverflow={clip ? 'ellipsis' : 'initial'}
            overflow={clip ? 'hidden' : ''}
            lineHeight={props.lineHeight ?? 1.1}
            whiteSpace={clip ? 'nowrap' : 'normal'}
            {...props}
        >
            {children}
        </ChakraText>
    )
}

export function Text2XL({
    children,
    clip,
    ...props
}) {
    return (
        <ChakraText
            fontSize='20px'
            color={props.color ?? TextColor.dark}
            fontWeight={props.fontWeight ?? 400}
            textOverflow={clip ? 'ellipsis' : 'initial'}
            overflow={clip ? 'hidden' : ''}
            lineHeight={props.lineHeight ?? 1.1}
            whiteSpace={clip ? 'nowrap' : 'normal'}
            {...props}
        >
            {children}
        </ChakraText>
    )
}

export function Text3XL({
    children,
    clip,
    ...props
}) {
    return (
        <ChakraText
            fontSize='22px'
            color={props.color ?? TextColor.dark}
            fontWeight={props.fontWeight ?? 400}
            textOverflow={clip ? 'ellipsis' : 'initial'}
            overflow={clip ? 'hidden' : ''}
            lineHeight={props.lineHeight ?? 1.1}
            whiteSpace={clip ? 'nowrap' : 'normal'}
            {...props}
        >
            {children}
        </ChakraText>
    )
}