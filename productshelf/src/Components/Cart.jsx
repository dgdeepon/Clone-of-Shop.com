import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay,Text,Flex,Image, VStack, HStack } from "@chakra-ui/react"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect } from "react";
import { useDisclosure } from "@chakra-ui/react";
let data=JSON.parse(localStorage.getItem('cartData'));



export default function Cart() {
    const [size, setSize] = React.useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const handleClick = (newSize) => {
      setSize(newSize)
      onOpen()
    }

    useEffect(()=>{

    },[data]);
  
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
            <DrawerBody>
              <Text textAlign={'center'} p='5'>Shopping Cart</Text>
          {data?.map((item,i)=>{
            return <div style={{display:'flex',flexDirection:"column"}}>
              <HStack boxSize={'36'}>
                <Image src={item.img} w='min-content' alt='items'/>
                <Text>{item.name}</Text>
              </HStack>
            </div>
          })}

            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }