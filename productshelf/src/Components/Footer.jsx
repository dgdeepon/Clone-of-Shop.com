import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Image
} from '@chakra-ui/react';
import Pshelf from '../Images/PShelf.png';



export default function LargeWithLogoLeft() {
  return (
    <Box
      bg={'#ECEFF1'}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              {/* <Logo color={useColorModeValue('gray.700', 'white')} /> */}
              <Image src={Pshelf} alt='logo'/>
            </Box>
            <Text fontSize={'sm'}>
              © 2023 ProductShelf.com All rights reserved
            </Text>
          </Stack>
          <Stack align={'flex-start'}>
            {/* <ListHeader>Product</ListHeader> */}
            <Text as={'b'}>Product</Text>
            <Link href={'#'}>Overview</Link>
            <Link href={'#'}>Features</Link>
            <Link href={'#'}>Country/Region</Link>
            <Link href={'#'}>Own Your SHOP Site</Link>
          </Stack>
          <Stack align={'flex-start'}>
            {/* <ListHeader>Company</ListHeader> */}
            <Text as={'b'}>Company</Text>
            <Link href={'#'}>About Us</Link>
            <Link href={'#'}>Services</Link>
            <Link href={'#'}>Accessibility Statement</Link>
            <Link href={'#'}>Contact Us</Link>
            <Link href={'#'}>Partner With Us</Link>
          </Stack>
          <Stack align={'flex-start'}>
            {/* <ListHeader>Support</ListHeader> */}
            <Text as={'b'}>Support</Text>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Privacy Policy</Link>
          </Stack>
          <Stack align={'flex-start'}>
            {/* <ListHeader>Follow Us</ListHeader> */}
            <Text as={'b'}>Follow Us</Text>
            <Link href={'#'}>Facebook</Link>
            <Link href={'#'}>Twitter</Link>
            <Link href={'#'}>Instagram</Link>
            <Link href={'#'}>LinkedIn</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}