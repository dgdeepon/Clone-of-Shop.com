import React from 'react'
import {Drawer,DrawerBody,DrawerFooter,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,useDisclosure,Text, Divider} from '@chakra-ui/react';
import {faArrowRotateLeft, faBagShopping, faBars,  faCircleQuestion, faDollar, faGift,  faLocationDot, faRecycle, faTag, faTruck} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {ChevronRightIcon} from '@chakra-ui/icons';
import BtnStyle from './Style/style.module.css';
import CategoryOptionDraw from './CategoryOptionDraw';

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
      <Text className={BtnStyle.cateButton}>Layered Jewelry Sale</Text>
      <Text className={BtnStyle.cateButton}>SHOP.COM Home Warranties</Text>
      <Text className={BtnStyle.cateButton}><CategoryOptionDraw id={'cl'}/></Text>
      <Text className={BtnStyle.cateButton}>Shoes<ChevronRightIcon/></Text>
      <Text className={BtnStyle.cateButton}><CategoryOptionDraw id={'bea'}/></Text>
      <Text className={BtnStyle.cateButton}>Home<ChevronRightIcon/></Text>
      <Text className={BtnStyle.cateButton}>Electronics<ChevronRightIcon/></Text>
      <Text className={BtnStyle.cateButton} id='hn'><CategoryOptionDraw id={'hn'}/></Text>
      <Text className={BtnStyle.cateButton} id='jewel'>Jewelry<ChevronRightIcon/></Text>
      <Text className={BtnStyle.cateButton}>Kids<ChevronRightIcon/></Text>
      <Text className={BtnStyle.cateButton}>Pet Supplies<ChevronRightIcon/></Text>
      <Text className={BtnStyle.cateButton}>Food & Drink<ChevronRightIcon/></Text>
      <Text className={BtnStyle.cateButton}>Sports<ChevronRightIcon/></Text>
      <Text className={BtnStyle.cateButton}>Travel<ChevronRightIcon/></Text>
      <Text className={BtnStyle.cateButton}>SHOP Travel</Text>
      <Text className={BtnStyle.cateButton}>All Stores</Text>
      <Text className={BtnStyle.cateButton}>Exclusive Brands<ChevronRightIcon/></Text>
      <Divider/>
      <Text as={'b'}>Account</Text>
      <Text className={BtnStyle.cateButton}><FontAwesomeIcon icon={faTruck}/> Track Orders</Text>
      <Text className={BtnStyle.cateButton}><FontAwesomeIcon icon={faArrowRotateLeft}/> Reorder Items - updated</Text>
      <Text className={BtnStyle.cateButton}><FontAwesomeIcon icon={faCircleQuestion}/> Help</Text>
      <Divider/>
      <Text as={'b'}>Features</Text>
      <Text className={BtnStyle.cateButton}><FontAwesomeIcon icon={faRecycle}/> AutoShip Manager</Text>
      <Text className={BtnStyle.cateButton}><FontAwesomeIcon icon={faGift}/> Gift Registry</Text>
      <Text className={BtnStyle.cateButton}><FontAwesomeIcon icon={faDollar}/> Price Alerts</Text>
      <Text className={BtnStyle.cateButton}><FontAwesomeIcon icon={faLocationDot}/> Shop Local</Text>
      <Text className={BtnStyle.cateButton}><FontAwesomeIcon icon={faBagShopping}/> Trends</Text>
      <Text className={BtnStyle.cateButton}><FontAwesomeIcon icon={faTag}/> Deals</Text>
      </DrawerBody>

      <DrawerFooter>

      </DrawerFooter>
    </DrawerContent>
  </Drawer>
  </>
  )
}
