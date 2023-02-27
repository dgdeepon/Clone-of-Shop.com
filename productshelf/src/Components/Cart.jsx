import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay,Text } from "@chakra-ui/react"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react";
import { useDisclosure } from "@chakra-ui/react";



export default function Cart() {
    const [size, setSize] = React.useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const handleClick = (newSize) => {
      setSize(newSize)
      onOpen()
    }
  
    return (
      <>
      <Text onClick={onOpen}>
      <FontAwesomeIcon icon={faCartShopping}/>
    Cart
      </Text>
        <Drawer onClose={onClose} isOpen={isOpen} size={'md'}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <Text textAlign={'center'} p='5'>Shopping Cart</Text>
            <DrawerBody>


            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }