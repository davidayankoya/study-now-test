import { createStandaloneToast } from '@chakra-ui/react'
const { toast } = createStandaloneToast()
const position = 'bottom'


const Notify = {
    success(msg, title, options) {
        return toast({
            title: title,
            description: msg,
            status: 'success',
            duration: 8000,
            isClosable: true,
            position: position,
        })
    },

    error(msg, title, options) {
        return toast({
            title: title,
            description: msg,
            status: 'error',
            duration: 8000,
            isClosable: true,
            position: position,
        })
    },

    warning(msg, title, options) {
        return toast({
            title: title,
            description: msg,
            status: 'warning',
            duration: 8000,
            isClosable: true,
            position: position,
        })
    },

    simple(msg, title, options) {
        return toast({
            title: title,
            description: msg,
            status: 'info',
            duration: 8000,
            isClosable: true,
            position: position,
        })
    },
}

export default Notify