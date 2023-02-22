import React from 'react'
import {Drawer,DrawerBody,DrawerFooter,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,useDisclosure} from '@chakra-ui/react';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function CategoryBtn() {

    const {isOpen,onOpen,onClose}=useDisclosure();

  return (
    <>
    <div onClick={onOpen} style={{cursor:'pointer'}}>
    <FontAwesomeIcon icon={faBars} style={{marginRight:'0.5rem'}}/>
    Categories
    </div>
    <Drawer
    isOpen={isOpen}
    placement='left'
    onClose={onClose}
  >
    <DrawerOverlay />
    <DrawerContent>
      <DrawerCloseButton />
      <DrawerHeader>Categories</DrawerHeader>

      <DrawerBody>

      </DrawerBody>

      <DrawerFooter>

      </DrawerFooter>
    </DrawerContent>
  </Drawer>
  </>
  )
}
