import React from 'react';
import Helmet from 'react-helmet';
import { Box } from '@chakra-ui/react';


function Main({ children, fullPage, className }) {
    return (
        <Box
            as='main'
            maxH={['', '', '100vh']}
            w={['full', 'full', 'full']}
            px={[4, 4, 6]}
            pt={[3, 3, 8]}
            pb={[6, 6, 8]}
            fontFamily='Space Grotesk'
            overflowY={['hidden', 'hidden', 'auto']}
            className={`${className} scroll-custom`}
        >
            {children}
        </Box>
    )
}

const PageMainContainer = React.memo(
    ({
        title,
        description,
        pageClassName,
        children,
        fullPage,
    }) => {
        return (
            <React.Fragment>
                <Helmet>
                    {title && <title> {`${title} ${title ? '| Study Now' : 'Study Now'}`} </title>}
                    {description && <meta name="description" content={description} />}
                </Helmet>
                <Main className={`page ${pageClassName}`} fullPage={fullPage}>
                    {children}
                </Main>
            </React.Fragment>
        )
    }
)

export default PageMainContainer;