import { Button, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input,Text, useDisclosure } from "@chakra-ui/react"
import { faArrowCircleLeft, faArrowRotateLeft, faCircleArrowLeft, faCircleUser, faDollar, faGift, faList, faQuestionCircle, faTruck, faUser, faUserPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { Link } from "react-router-dom";
import BtnStyle from './Style/style.module.css';

export default function SignInBtn() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
      <Text ref={btnRef} colorScheme='teal' onClick={onOpen} cursor='pointer'>
        <FontAwesomeIcon icon={faUser}/>
        Sign in
        </Text>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader><FontAwesomeIcon icon={faCircleUser}/> Account</DrawerHeader>
  
            <DrawerBody>
        <Text>Your Shop Consultant is <Text as={'b'}>PSHELF.COM</Text></Text>
        <Link to={'/signin'} onClick={onClose}>
        <Text className={BtnStyle.cateButton}><FontAwesomeIcon icon={faUser}/> Sign In</Text>
        </Link>
        <Text className={BtnStyle.cateButton}><FontAwesomeIcon icon={faTruck}/> Track Orders</Text>
        <Text className={BtnStyle.cateButton}><FontAwesomeIcon icon={faArrowRotateLeft}/> Reorder Items</Text>
        <Text className={BtnStyle.cateButton}><FontAwesomeIcon icon={faDollar}/> Cashback Program</Text>
        <Text className={BtnStyle.cateButton}><FontAwesomeIcon icon={faQuestionCircle}/> Help</Text>
        <Link to={'/createAccount'} onClick={onClose}>
        <Text className={BtnStyle.cateButton}><FontAwesomeIcon icon={faUserPlus}/> Create Account</Text>
        </Link>
        <Text className={BtnStyle.cateButton}><FontAwesomeIcon icon={faUser}/> My Account</Text>
        <Divider/>
        <Text className={BtnStyle.cateButton}><FontAwesomeIcon icon={faList}/> List Manager</Text>
        <Text className={BtnStyle.cateButton}><FontAwesomeIcon icon={faGift}/> Gift Registry</Text>
            </DrawerBody>
  
            <DrawerFooter>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }