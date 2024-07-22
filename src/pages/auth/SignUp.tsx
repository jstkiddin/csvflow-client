import { Box, Text, Link as ChakraLink } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { AuthForm } from '../../components/auth-form/AuthForm'
import { Loader } from '../../components/loader/Loader'
import { useSignUp } from '../../app/services/auth/signup.service'
import { CredProps } from '../../types/User'

export const SignUp = () => {
  const { mutate, isPending, isError, error } = useSignUp()

  const onSubmit = ({ email, password }: CredProps) => {
    mutate({ email, password })
  }

  return (
    <>
      {isPending && <Loader />}
      <Text fontSize="2xl">New here? Fill the form to join!</Text>
      <AuthForm
        signUp
        authSubmit={onSubmit}
        isLoading={isPending}
        isError={isError}
        serverError={error}
      />
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
      {isPending && <Loader />}
    </>
  )
}
