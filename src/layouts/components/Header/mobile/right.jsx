import { HStack, Image, useDisclosure, Center } from '@chakra-ui/react'
import { ElementColor } from 'constants/colors'
import React from 'react'
import { AiOutlineCaretLeft } from 'react-icons/ai'
import RightSidebar from './rightSide'
import NotificationIcon from 'assets/icon/notification_bell.svg'


function HeaderRight() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <React.Fragment>
            <HStack w='max-content' justify='space-between'>
                <Image
                    src={NotificationIcon}
                    w='24px'
                    h='44px'
                />
                <Center py={2} pl={2} pr={1} onClick={onOpen}>
                    <AiOutlineCaretLeft size='22px' color={ElementColor.darkGray} />
                </Center>
            </HStack>
            
            <RightSidebar
                isOpen={isOpen}
                toggleSidebar={onClose}
            />
        </React.Fragment>
    )
}

export default HeaderRight