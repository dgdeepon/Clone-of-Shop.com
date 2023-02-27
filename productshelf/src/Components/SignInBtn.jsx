import { Button, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input,Text, useDisclosure } from "@chakra-ui/react"
import { faArrowCircleLeft, faArrowRotateLeft, faCircleArrowLeft, faCircleUser, faDollar, faGift, faList, faQuestionCircle, faSignOut, faTruck, faUser, faUserPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect } from "react"
import { Link } from "react-router-dom";
import BtnStyle from './Style/style.module.css';
import { Auth } from "./ContextApi";
import { useContext } from "react";

export default function SignInBtn() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const {loginStatus,condition,setLogin}=useContext(Auth);

    useEffect(()=>{

    },[condition]);
  
    return (
      <>
      <Text ref={btnRef} colorScheme='teal' onClick={onOpen} cursor='pointer'>
        <FontAwesomeIcon icon={faUser}/>
        {loginStatus? condition:  'Sign in'}
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
        <Link to={loginStatus?'':'/signin'} onClick={onClose}>
        <Text className={BtnStyle.cateButton}><FontAwesomeIcon icon={faUser}/>{loginStatus? condition:  'Sign in'}  </Text>
        </Link>
        <Text className={BtnStyle.cateButton}><FontAwesomeIcon icon={faTruck}/> Track Orders</Text>
        <Text className={BtnStyle.cateButton}><FontAwesomeIcon icon={faArrowRotateLeft}/> Reorder Items</Text>
        <Text className={BtnStyle.cateButton}><FontAwesomeIcon icon={faDollar}/> Cashback Program</Text>
        <Text className={BtnStyle.cateButton}><FontAwesomeIcon icon={faQuestionCircle}/> Help</Text>
        <Link to={'/createAccount'} onClick={onClose}>
        <Text display={loginStatus ? 'none':'flex'} alignItems='center' className={BtnStyle.cateButton}><FontAwesomeIcon icon={faUserPlus}/> Create Account</Text>
        </Link>
        <Text className={BtnStyle.cateButton} display={loginStatus ? 'flex':'none'} alignItems='center' onClick={()=>{
          setLogin(false);
          localStorage.setItem('token','');
        }}><FontAwesomeIcon icon={faSignOut}/> Sign Out</Text>
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