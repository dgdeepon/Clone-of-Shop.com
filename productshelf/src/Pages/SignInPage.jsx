import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    useToast,
    Wrap,
    WrapItem,
  } from '@chakra-ui/react';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useReducer } from 'react';
import axios from 'axios';

const initVal={
  email:'',
  password:''
}

const reduce=(state,action)=>{
  switch(action.type){
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
    case 'reset':
      return {
        firstName:'',
        lastName:'',
      }
    default:
      return state;    
  }
}
  
  export default function SignInPage() {

    const [state,dispatch]=useReducer(reduce,initVal);
    const toast = useToast();

    // login
    function login(){
      axios.get(`https://63fb0ed22027a45d8d5f615b.mockapi.io/userData?email=${state.email}`)
      .then((res)=>{
        toast({
          title: res.data[0].password===state.password ? 'Login Successful':'Wrong Credentials',
          status:res.data[0].password===state.password ? 'success':'error',
          duration:3000,
          isClosable:true
        })
        if(res.data[0].password===state.password){
          axios.patch(`https://63fb0ed22027a45d8d5f615b.mockapi.io/userData?email=${state.email}`,{
            status:true
          }).then((res)=>{
            console.log(res);
          }).catch((err)=>{
            console.log(err);
          })
        } 
      }).catch((err)=>{
        console.log(err);
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
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our <Link color={'blue.400'}>Offers</Link> <FontAwesomeIcon icon={faTag}/>
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={state.email} onChange={(e)=>{
                  dispatch({type:'email',payload:e.target.value});
                }}/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" value={state.password} onChange={(e)=>{
                  dispatch({type:'password',payload:e.target.value});
                }} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }} onClick={login}>
                  Sign in
                </Button>
                <Link href='/createAccount' color={'blue.400'}>
                <Text>Create Account</Text>
                </Link>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }