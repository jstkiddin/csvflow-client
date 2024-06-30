import { Box, Text, Link as ChakraLink, styled } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { AuthForm } from '../../components/auth-form/AuthForm'

export const Login = () => {
  return (
    <>
      <Text fontSize="2xl">Welcome!</Text>
      <AuthForm signUp={false} />
      <Box
        my="1rem"
        width="100%"
        display="flex"
        justifyContent="center"
        gap="0.5rem"
      >
        <Text fontSize="xs">Don't have an account?</Text>
        <ChakraLink as={RouterLink} to="/signup">
          <Text color="green.600" fontSize="xs">
            Sign up
          </Text>
        </ChakraLink>
      </Box>
    </>
  )
}
