import React from 'react'
import { Button as ChakraButton } from '@chakra-ui/react'
import { ElementColor, TextColor } from 'constants/colors'


function Button({
    children,
    type,
    text,
    loading,
    disabled,
    fontSize,
    color,
    radius,
    margin,
    bgColor,
    fontWeight,
    colorScheme,
    variant,
    ...props
}) {
    return (
        <ChakraButton
            size={props.size ?? 'sm'}
            type={type}
            isLoading={loading}
            isDisabled={disabled}
            bgColor={colorScheme ? undefined : variant === 'outline' ? 'white' : bgColor || ElementColor.orange}
            color={colorScheme ? undefined : color || TextColor.white}
            variant={variant === 'outline' ? 'solid' : undefined}
            colorScheme={colorScheme}
            borderRadius={radius || "10px"}
            margin={margin || '0px'}
            fontWeight={fontWeight || 500}
            fontSize={fontSize || 'md'}
            _hover={{ filter: disabled ? "" : "grayscale(10%)" }}
            transition='.3s ease-in-out'
            lineHeight={1}
            border={variant === 'outline' ? `1px solid ${color}` : props.border}
            {...props}
        >
            {text ?? children}
        </ChakraButton>
    )
}

export default Button