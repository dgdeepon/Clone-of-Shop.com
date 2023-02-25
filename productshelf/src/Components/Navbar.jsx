import { Flex, Spacer,Image,HStack,Select, Input,Box,Text,Center, Grid } from '@chakra-ui/react';
import Options from './Options';
import {Search2Icon} from '@chakra-ui/icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowRotateLeft,faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import CategoryBtn from './CategoryBtn';
import PShelf from '../Images/PShelf.png';
import { Link, Navigate } from 'react-router-dom';


export default function Navbar(){
    const searchData=[
        'All Deparments','Auto','Baby','Beauty',
        'Books','Business','Cameras','Clothes',
        'Collectibles','Computers','Crafts','Electronics',
        'Food and Drink','Garden','Gifts','Home Store','Shoes',
    ]



    return <Box zIndex={5} bg={'#ECEFF1'} pos='fixed' w={'full'}> 
    <Box boxShadow={'rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;'}>
    <Center>
     <Grid templateColumns='repeat(4,1fr)' w='100%'>
     <Link to={'/'}>
     <Image w={'300px'} gridColumnStart={1} alignItems='start' src={PShelf} alt='siteLogo' />
     </Link>
     {/* <Text fontSize={'4xl'}>PSHELF.COM</Text> */}
    <HStack gridColumnStart={2} gridColumnEnd={4} w={'90%'} border='1px' p={2} borderRadius='25px' bg={'white'} m={2}>
    <Select border='none' borderRight='1px' borderRightRadius='0'>
    {searchData.map((item,i)=>{
       return <Options key={i} name={item}/>
    })}
    </Select>
    <Input border={'1px'} borderColor={'gray.300'} placeholder='Search ProductShelf...' type='search' />
    <Link to={'/products'}>

    <Search2Icon cursor={'pointer'}/>
    </Link>
    </HStack>
    </Grid>
    </Center>
    <Flex p={5}>
    <CategoryBtn/>
    <Spacer/>
    <HStack display={{base:'none',sm:'none',md:'none',lg:'flex'}} >
        <Text fontSize='l'>Exclusive Brands</Text>
        <Text fontSize='l'>Stores</Text>
        <Text fontSize='l'>Deals</Text>
        <Text fontSize='l'>SHOP Travel</Text>
        <Text fontSize='l'>Departments</Text>
        <Text fontSize='l'>ShopBuddy</Text>
        <Text fontSize='l'>SHOP Local</Text>
    </HStack>
    <Spacer/>
    <HStack>
    <div>
    <FontAwesomeIcon icon={faUser}/>
    Sign in
    </div>
    <div>
    <FontAwesomeIcon icon={faArrowRotateLeft}/>
    Orders
    </div>
    <div>
    <FontAwesomeIcon icon={faCartShopping}/>
    Cart
    </div>
    </HStack>
    </Flex>
    </Box>
    <HStack p={1}>
    <Text fontSize={'xs'}>
        Your Shop Consultant is <Text as={'b'} fontSize='xs'>PSHELF.COM</Text>
    </Text>
    <Spacer/>
    <Text fontSize={'xs'}>
    Earn up to 50% <Text fontSize={'xs'} as='b'>Cashback</Text> on eliglible purchases.<Text fontSize={'xs'} as='u'>
        Learn More
    </Text>
    </Text>
    </HStack>
    </Box>
}