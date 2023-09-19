import { InputGroup, InputLeftElement, Input as ChakraInput, FormControl, FormLabel } from '@chakra-ui/react'
import React from 'react'
import { ElementColor, TextColor } from 'constants/colors'
import { TextSm } from 'common/Text/Text'


export function Input ({
    label,
    name,
    value,
    onChange,
    min,
    max,
    placeholder,
    placeholderStyle,
    className,
    type,
    leftElement,
    rightElement,
    onRightElementClick,
    rightElementColor,
    required,
    disabled,
    readOnly,
    border,
    focusBorder,
    radius,
    style,
    errors,
    labelStyle,
    labelColor,
    bgColor,
    color,
    custom,
    decimal,
    ...props
}) {

    return (
        <FormControl w={props.w}>
            {label &&
                <FormLabel
                    htmlFor={`${name} ${label}`}
                    color={custom ? ElementColor.red : labelColor || TextColor.black}
                    fontSize='13px'
                    mb='6px'
                    sx={labelStyle}
                >
                    {label}
                </FormLabel>
            }
            <InputGroup>
                {leftElement &&
                    <InputLeftElement
                        left={2}
                        top={0}
                        cursor='pointer'
                    >
                        {leftElement}
                    </InputLeftElement>
                }
                <ChakraInput
                    id={`${name} ${label}`}
                    name={name}
                    onChange={onChange}
                    value={value}
                    isDisabled={disabled}
                    isRequired={required}
                    isReadOnly={readOnly}
                    type={type}
                    size='md'
                    fontSize='14px'
                    color={custom ? ElementColor.red : color || TextColor.gray}
                    pl={leftElement ? '50px' : '12px'}
                    pr={rightElement ? '50px' : '12px'}
                    h={props.h || '40px'}
                    borderStyle='inset'
                    _focus={{ borderBottom: custom ? `2px solid ${ElementColor.red}` : focusBorder || `1px solid ${ElementColor.fadedBlue}` }}
                    placeholder={type === 'password' ? '.........' : placeholder}
                    _placeholder={props._placeholder || { color: TextColor.grey, fontSize: "14px" }}
                    border={(errors && errors[name]) ? "2px solid crimson" : custom ? `2px solid ${ElementColor.red}` : border || `0px solid ${ElementColor.gray}`}
                    borderRadius={custom ? '100px' : radius || '4px'}
                    sx={style}
                    {...props}
                    w='full'
                />
            </InputGroup>

            {errors && (errors[name] &&
                <TextSm mt='6px' mb={0} color='crimson'>
                    {errors[name]}
                </TextSm>
            )}
        </FormControl>
    )
}