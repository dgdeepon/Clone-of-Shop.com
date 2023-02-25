import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
  } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
  import { useParams } from 'react-router-dom';
  
  export default function Simple() {
    const params=useParams();
    const [pro,setPro]=useState({});

    // FetchNow
    function FetchNow(){
        axios.get(`https://63f1198c5b7cf4107e2d155f.mockapi.io/productsDetails`)
        .then((res)=>{
            res.data.map((item,i)=>{
                if(item.id==params.pId){
                    setPro(item);
                    return;
                }
            })
        }).catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        FetchNow();
        return ()=>{
            setPro({});
        }
    },[])

    return (
      <Container maxW={'7xl'}  pt='200px'>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={pro.img}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }} textAlign='left'>
            <Box as={'header'}>
                <Text>{pro.store}</Text>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                {pro.name}
              </Heading>
              <Text>{pro.sub_category}</Text>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
                ${pro.price}
              </Text>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text fontSize={'lg'} noOfLines='3'>
                  {pro.description}
                </Text>
              </VStack>
            </Stack>
  
            <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}>
              Add to cart
            </Button>
  
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
              
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    );
  }