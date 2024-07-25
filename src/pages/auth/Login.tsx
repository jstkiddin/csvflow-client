import { Box, Text, Link as ChakraLink } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { AuthForm } from '../../fetures/auth-form/AuthForm'
import { Loader } from '../../components/loader/Loader'
import { useSignIn } from '../../app/services/auth/auth.services'
import { CredProps } from '../../types/User'

export const Login = () => {
  const { mutate, isPending, isError, error } = useSignIn()

  const onSubmit = ({ email, password }: CredProps) => {
    mutate({ email, password })
  }

  return (
    <>
      <Text fontSize="2xl">Welcome!</Text>
      <AuthForm
        signUp={false}
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
        <Text fontSize="xs">Don't have an account?</Text>
        <ChakraLink as={RouterLink} to="/signup">
          <Text color="green.600" fontSize="xs">
            Sign up
          </Text>
        </ChakraLink>
      </Box>
      {isPending && <Loader />}
    </>
  )
}
