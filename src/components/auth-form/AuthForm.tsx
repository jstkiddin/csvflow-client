import {
  Box,
  FormControl,
  useBoolean,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Icon,
  Collapse,
} from '@chakra-ui/react'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useState } from 'react'
import styled from 'styled-components'
import { AuthFields } from '../../types/types'
import { SubmitHandler, useForm } from 'react-hook-form'

interface AuthFormProps {
  signUp: boolean
  authSubmit?: () => {}
}

export const AuthForm = ({ signUp, authSubmit }: AuthFormProps) => {
  const [isVisible, setIsVisible] = useBoolean(false)

  // const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AuthFields>()

  const onSubmit: SubmitHandler<AuthFields> = data => {
    // authSubmit()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
      <FormContainer>
        <Box gap="1rem" width="100%">
          <FormControl mt="1rem">
            <InputGroup>
              <StyledChakraInput
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
                type="email"
                isInvalid={Boolean(errors.email)}
                placeholder="Email adress"
              />
            </InputGroup>

            <ErrorBox>
              <Collapse in={Boolean(errors.email)} animateOpacity>
                {errors.email && errors.email.message}
              </Collapse>
            </ErrorBox>

            <InputGroup>
              <StyledChakraInput
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Minimum length must be 6 characters',
                  },
                })}
                isInvalid={Boolean(errors.password)}
                type={isVisible ? 'text' : 'password'}
                placeholder="Password"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setPassword(e.target.value)
                }}
              />
              <InputRightElement>
                <ShowPassButton
                  size="sm"
                  bg="transparent"
                  height="100%"
                  onClick={setIsVisible.toggle}
                >
                  {isVisible ? (
                    <Icon as={VisibilityOff} color="gray.300" />
                  ) : (
                    <Icon as={Visibility} color="gray.300" />
                  )}
                </ShowPassButton>
              </InputRightElement>
            </InputGroup>
            <ErrorBox>
              <Collapse in={Boolean(errors.password)} animateOpacity>
                {errors.password && errors.password.message}
              </Collapse>
            </ErrorBox>

            {signUp && (
              <>
                <InputGroup>
                  <StyledChakraInput
                    {...register('confirm')}
                    type={isVisible ? 'text' : 'password'}
                    isInvalid={
                      password !== confirm &&
                      password !== confirm &&
                      confirm !== ''
                    }
                    placeholder="Confirm password"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setConfirm(e.target.value)
                    }}
                  />
                  <InputRightElement>
                    <ShowPassButton
                      size="sm"
                      bg="transparent"
                      height="100%"
                      onClick={setIsVisible.toggle}
                    >
                      {isVisible ? (
                        <Icon as={VisibilityOff} color="gray.300" />
                      ) : (
                        <Icon as={Visibility} color="gray.300" />
                      )}
                    </ShowPassButton>
                  </InputRightElement>
                </InputGroup>

                <ErrorBox>
                  <Collapse
                    in={password !== confirm && confirm !== ''}
                    animateOpacity
                  >
                    {password !== confirm &&
                      confirm !== '' &&
                      'Passwords do not match'}
                  </Collapse>
                </ErrorBox>
              </>
            )}
          </FormControl>
        </Box>

        <StyledChakraButton
          bg="green.600"
          type="submit"
          isLoading={isSubmitting}
        >
          {signUp ? 'Sign Up' : 'Sign In'}
        </StyledChakraButton>
      </FormContainer>
    </form>
  )
}

const ShowPassButton = styled(Button)`
  &:hover {
    background: rgba(240, 255, 244, 0.5) !important;
  }
`

const StyledChakraInput = styled(Input)`
  &:focuse-visible {
    border-color: #2f855a !import;
  }
`
const StyledChakraButton = styled(Button)`
  margin-top: 1rem;
  color: #ffffff !important;
  width: 70%;
  &:hover {
    background-color: #2f855a !import;
  }
`
const ErrorBox = styled(Box)`
  color: #e53e3e;
  height: 1.7rem;

  font-size: 0.8rem;
  padding: 0px !important;
`

const FormContainer = styled(Box)`
  padding: 0px 3rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`
