import { VStack, Center } from '@chakra-ui/react'
import CourseCard from 'common/Card/CourseCard'
import { TextMd } from 'common/Text/Text'
import React from 'react'


function CategoryList({ name, items = [] }) {
    return (
        <VStack w='full' align='start' spacing={5} py={4}>
            {items.length === 0 ? (
                <Center w='full' h={['200px', '300px', '400px']}>
                    <TextMd>No {name} courses found</TextMd>
                </Center>
            ) : items.map((e, index) => 
                    <CourseCard
                        key={index}
                        {...e}
                    />
                )
            }
        </VStack>
    )
}

export default CategoryList