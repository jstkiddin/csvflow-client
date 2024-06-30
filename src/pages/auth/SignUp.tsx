import { Box, Text, Link as ChakraLink } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { AuthForm } from '../../components/auth-form/AuthForm'

export const SignUp = () => {
  return (
    <>
      <Text fontSize="2xl">New here? Fill the form to join!</Text>
      <AuthForm signUp />
      <Box
        my="1rem"
        width="100%"
        display="flex"
        justifyContent="center"
        gap="0.5rem"
      >
        <Text fontSize="xs">Already have an account?</Text>
        <ChakraLink as={RouterLink} to="/signin">
          <Text color="green.600" fontSize="xs">
            Sign in
          </Text>
        </ChakraLink>
      </Box>
    </>
  )
}
