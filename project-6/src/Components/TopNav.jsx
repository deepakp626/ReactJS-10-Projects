import { AspectRatio, Avatar, Box, Heading, Button, IconButton, useDisclosure, Input, Icon, Flex, HStack } from '@chakra-ui/react'
import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react'
import { FaBars, FaUserTie } from "react-icons/fa";
import SideDrawer from './SideDrawer';

const TopNav = ({ title ,onOpen}) => {
    return (
        <>
            <Box bg={"white"}>
                <HStack maxW="70rem" h="4rem" justifyContent="space-between" mx="auto" px="2rem" alignItems="center">
                    
                       <Icon as={FaBars} onClick={onOpen}
                       display={{
                        base:"block",
                        lg:"none"
                       }} /> 

                    <Heading display={{ base: "none", lg: "block" }} fontSize="1.75rem">
                        {title} </Heading>
                    <Menu>
                        <MenuButton bg={"white"} >
                            <Icon as={FaUserTie} fontSize="3xl" />
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Logout</MenuItem>
                            <MenuItem>Support</MenuItem>
                        </MenuList>
                    </Menu>
                </HStack>
            </Box>
        </>
    )
}

export default TopNav;