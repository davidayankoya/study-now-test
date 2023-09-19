import React from 'react'
import { createStandaloneToast } from '@chakra-ui/react'
const { ToastContainer } = createStandaloneToast()


function LayoutUtilities() {
    return (
        <React.Fragment>
            <ToastContainer />
        </React.Fragment>
    )
}

export default LayoutUtilities