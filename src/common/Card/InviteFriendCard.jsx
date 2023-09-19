import { Image, VStack } from '@chakra-ui/react'
import React from 'react'
import InviteImg from 'assets/img/invite_friends.svg'
import { TextLg, TextSm } from 'common/Text/Text'
import Button from 'common/Button/Button'


function InviteFriendCard({ w }) {
    return (
        <VStack w={w ?? 'full'} spacing={3}>
            <Image
                src={InviteImg}
                alt='invite friends'
                display={['none', 'none', 'initial']}
                w={['80%']}
                h='auto'
            />
            <VStack spacing={3}>
                <TextLg fontWeight={700}>Invite Friends</TextLg>
                <TextSm>Get free month of premium content</TextSm>
            </VStack>

            <Button
                text='Get the Link'
                py='22px'
                px='44px'
            />
        </VStack>
    )
}

export default InviteFriendCard