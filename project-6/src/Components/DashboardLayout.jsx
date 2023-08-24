import { Box, Container, Flex, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import SideNav from './SideNav'
import TopNav from './TopNav'
import SideDrawer from './SideDrawer'


const DashboardLayout = ({ title, children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <SideDrawer isOpen={isOpen} onClose={onClose} />
            <Flex>
                <Box display={{ base: "none", lg: "flex" }}>
                    <SideNav />
                </Box>
                <Box flexGrow={1}>
                    <TopNav title={title} onOpen={onOpen} />
                    <Container overflowX="hidden" overflowY="auto" h="calc(100vh - 4rem)" mt="6" maxW="960px" bg="#F3F3F7"  >
                        {children}
                    </Container>
                </Box>
            </Flex>

        </>
    )
}

export default DashboardLayout