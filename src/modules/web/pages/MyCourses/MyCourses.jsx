import { VStack } from '@chakra-ui/react'
import { PageHeading } from 'common/PageHeading/PageHeading'
import PageMainContainer from 'common/PageMain/PageMain'
import Tabs from 'common/Tabs/Tabs'
import { TextMd } from 'common/Text/Text'
import React from 'react'
import CategoryList from './sections/CategoryList'
import Hero1 from 'assets/img/hero_1.svg'
import Hero2 from 'assets/img/hero_2.svg'
import Hero3 from 'assets/img/hero_3.svg'
import { ElementColor } from 'constants/colors'


const designItems = [
    {
        img: Hero1,
        title: 'Introduction to User Interface Design',
        shortTitle: 'User Interface',
        school: 'University of Minnesota',
        timeLeft: '5h 40m left',
        bgColor: ElementColor.fadedBlue,
        textColor: ElementColor.blue,
    },
    {
        img: Hero2,
        title: 'Introduction to User Interface Design',
        shortTitle: 'User Interface',
        school: 'University of Minnesota',
        timeLeft: '5h 40m left',
        bgColor: ElementColor.fadedPurple,
        textColor: ElementColor.purple,
    },
    {
        img: Hero3,
        title: 'Introduction to User Interface Design',
        shortTitle: 'User Interface',
        school: 'University of Minnesota',
        timeLeft: '5h 40m left',
        bgColor: ElementColor.fadedBlue,
        textColor: ElementColor.blue,
    },
]

function MyCoursesMain() {
    return (
        <React.Fragment>
            <VStack w='full' align='start' spacing={6} pt={[2, 2, 4]} px={[2, 2, 6]}>
                <PageHeading title='My Courses' />
                <TextMd>Welcome back Unique, take your next class</TextMd>

                <Tabs
                    tabHeads={['Design', 'HTML', 'CSS', 'Javascript']}
                    tabPanels={[
                        <CategoryList items={designItems} name='Design' />,
                        <CategoryList items={[]} name='HTML' />,
                        <CategoryList items={[]} name='CSS' />,
                        <CategoryList items={[]} name='Javascript' />,
                    ]}
                />

            </VStack>
        </React.Fragment>
    )
}

export default function MyCourses() {
    return (
        <PageMainContainer title='My Courses' description='My Courses'>
            <MyCoursesMain />
        </PageMainContainer>
    )
}