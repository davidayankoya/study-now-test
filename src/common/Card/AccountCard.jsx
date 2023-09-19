import { Avatar, HStack, VStack } from '@chakra-ui/react'
import { TextLg, TextSm } from 'common/Text/Text'
import { ElementColor, TextColor } from 'constants/colors'
import React from 'react'

const mockUser = {
    name: 'Uniqueideas',
    position: 'Creative Designer'
}

function AccountCard({ w, center }) {
    return (
        <HStack w={w ?? 'full'} justify={center ? 'center' : 'start'}>
            <Avatar
                name={mockUser.name}
                size={['md', 'md', 'sm']}
                bgColor={ElementColor.blue}
            />

            <VStack align='start' spacing={1}>
                <TextLg color={TextColor.black} fontWeight={700}>{mockUser.name}</TextLg>
                <TextSm color={TextColor.gray}>{mockUser.position}</TextSm>
            </VStack>
        </HStack>
    )
}

export default AccountCard