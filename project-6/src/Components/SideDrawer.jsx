import { Button, Input, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import TopNav from './TopNav'
import SideNav from './SideNav'

const SideDrawer = ({isOpen, onClose,children}) => {

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
         

          <DrawerBody> 
          <DrawerCloseButton />
                   <SideNav />
          </DrawerBody>

        
        </DrawerContent>
      </Drawer> 
    </>
  )
}

export default SideDrawer;