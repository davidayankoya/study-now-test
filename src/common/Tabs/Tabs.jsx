import React from 'react'
import { Tabs as ChakraTabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { ElementColor, TextColor } from 'constants/colors'


function Tabs({ 
    tabHeads = [],
    tabPanels = [],
    defaultIndex,
 }) {
    return (
        <ChakraTabs isLazy variant='unstyled' defaultIndex={0} isFitted w='full'>
            <TabList overflowX='scroll' className='scroll-custom' px={0} pb={[2, 2, 0]} w='full'>
                {tabHeads?.map((head, index) => (
                    <Tab
                        key={index}
                        fontSize={['14px', '14px', '14px']}
                        fontWeight={600}
                        color={TextColor.lightGray}
                        _selected={{ fontWeight: 700, borderBottom: `2px solid ${ElementColor.orange}`, color: TextColor.dark }}
                        border='none'
                        // minW={['50%', '120px', '120px']}
                    >
                        {head}
                    </Tab>
                ))}
            </TabList>

            <TabPanels>
                {tabPanels?.map((panel, index) => (
                    <TabPanel key={index} px={0} pt={[0, 0, 0]}>
                        {panel}
                    </TabPanel>
                ))}
            </TabPanels>
        </ChakraTabs>
    )
}

export default Tabs