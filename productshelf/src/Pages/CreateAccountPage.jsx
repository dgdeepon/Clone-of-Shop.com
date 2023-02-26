import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    useToast
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { useReducer } from 'react';
import axios from 'axios';

const initVal={
  firstName:'',
  lastName:'',
  email:'',
  password:'',
  status:false,
  token:'',
  items:[]
}

const reduce=(state,action)=>{
  switch(action.type){
    case 'firstName':
      return {
        ...state,
        firstName:action.payload
      }
    case 'lastName':
      return{
        ...state,
        lastName:action.payload
      }  
    case 'email':
      return {
        ...state,
        email:action.payload
      }  
    case 'password':
      return {
        ...state,
        password:action.payload,
      }
    case 'token':
      return {
        ...state,
        token:action.payload
      }
    case 'reset':
      return {
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        status:false,
        token:'',
        items:[]
      }
    default:
      return state;    
  }
}

  
  export default function CreateAccountPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [state,dispatch]=useReducer(reduce,initVal);
    const toast = useToast()


    // add user
    function addUser(){
      axios.post(`https://63fb0ed22027a45d8d5f615b.mockapi.io/userData`,state)
      .then((res)=>{
        console.log(res);
      }).catch((err)=>{
        console.log(err);
      }).finally(()=>{
        dispatch({type:'reset'});
        toast({
          title:'Account Created',
          status:'success',
          isClosable:true,
          duration:3000
        })
      })
    }


    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired={true}>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" value={state.firstName} onChange={(e)=>{
                      dispatch({type:'firstName',payload:e.target.value});
                    }}/>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" value={state.lastName} onChange={(e)=>{
                      dispatch({type:'lastName',payload:e.target.value});
                    }} />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email"  value={state.email} onChange={(e)=>{
                      dispatch({type:'email',payload:e.target.value});
                      dispatch({type:'token',payload:e.target.value});
                    }} required/>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'}  value={state.password} onChange={(e)=>{
                      dispatch({type:'password',payload:e.target.value});
                    }}/>
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }} onClick={addUser}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link to={'/signin'} style={{color:'#4299E1'}}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }