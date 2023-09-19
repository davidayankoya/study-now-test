import Button from 'common/Button/Button'
import React from 'react'
import { Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Container } from 'styling/layout'
import PageMainContainer from 'common/PageMain/PageMain'


function ErrorPageMain({ message }) {    
    return (
        <Container>
            <VStack minH='75vh' alignItems='center' justifyContent='center' spacing={4}>
                <Text as='h1' fontWeight={800} fontSize={['40px', '80px']}>404: Oops</Text>
                <Text fontSize={['16px', '25px']} m='0px'>{message ?? 'Page does not exist'}</Text>
                <Link to='/'>
                    <Button text='Go Home'/>
                </Link>
            </VStack>
        </Container>
    )
}

export default function ErrorPage({ message }) {
    return (
        <PageMainContainer title='Page Not Found' description='Error 400: Page Not Found'>
            <ErrorPageMain message={message} />
        </PageMainContainer>
    )
}