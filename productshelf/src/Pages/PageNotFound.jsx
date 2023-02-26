import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link, Navigate } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <Box textAlign="center" py={10} px={6} pt='200px'>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, purple.400, purple.600)"
        backgroundClip="text">
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={'gray.500'} mb={6}>
        The page you're looking for does not seem to exist
      </Text>

    <Link to={'/'}>

      <Button
        colorScheme="purple"
        bgGradient="linear(to-r, purple.400, purple.500, purple.600)"
        color="white"
        variant="solid">
        Go to Home
      </Button>
            </Link>
    </Box>
  );
}