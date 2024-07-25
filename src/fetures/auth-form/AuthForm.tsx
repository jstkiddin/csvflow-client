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
import { memo, useState } from 'react'
import styled from 'styled-components'
import { AuthFields } from '../../types/types'
import { SubmitHandler, useForm } from 'react-hook-form'
import { CredProps } from '../../types/User'
import { KeyboardEvent } from 'react'
import { ErrorBox } from '../../components/error/ErrorBox'

interface AuthFormProps {
  signUp: boolean
  authSubmit: ({ email, password }: CredProps) => void
  isLoading: boolean
  isError: boolean
  serverError: Error | null
}

export const AuthForm = memo(
  ({ signUp, authSubmit, isLoading, isError, serverError }: AuthFormProps) => {
    const [isVisible, setIsVisible] = useBoolean(false)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirm, setConfirm] = useState<string>('')

    const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
      setValue,
    } = useForm<AuthFields>({
      mode: 'onChange',
      disabled: isLoading,
      reValidateMode: 'onBlur',
    })

    const onSubmit: SubmitHandler<AuthFields> = (data: CredProps) => {
      authSubmit(data)
    }

    const handleKeywordKeypress = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        setValue('email', email)
        setValue('password', password)
      }
    }

    return (
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
        <FormContainer onKeyDownCapture={handleKeywordKeypress}>
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
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setEmail(e.target.value)
                  }}
                  placeholder="Email adress"
                  id="email"
                />
              </InputGroup>
              <ErrorBox
                inCondition={Boolean(errors.email)}
                message={errors.email && errors.email.message}
              />

              <InputGroup>
                <StyledChakraInput
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 6,
                      message: signUp
                        ? 'Minimum length must be 6 characters'
                        : 'Password ia too short',
                    },
                  })}
                  isInvalid={Boolean(errors.password)}
                  type={isVisible ? 'text' : 'password'}
                  placeholder="Password"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setPassword(e.target.value)
                  }}
                  id="password"
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
              <ErrorBox
                inCondition={Boolean(errors.password)}
                message={errors.password && errors.password.message}
              />

              {signUp && (
                <>
                  <InputGroup>
                    <StyledChakraInput
                      type={isVisible ? 'text' : 'password'}
                      isInvalid={password !== confirm && confirm !== ''}
                      placeholder="Confirm password"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setConfirm(e.target.value)
                      }}
                      id="confirm"
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

                  <ErrorBox
                    inCondition={password !== confirm && confirm !== ''}
                    message={
                      password !== confirm &&
                      confirm !== '' &&
                      'Passwords do not match'
                    }
                  />
                </>
              )}
            </FormControl>
          </Box>

          <Collapse in={isError} animateOpacity>
            <Box width="100%" color="red.600">
              {
                //@ts-ignore
                serverError?.response?.data?.message ?? ''
              }
            </Box>
          </Collapse>

          <StyledChakraButton
            bg="green.600"
            type="submit"
            isLoading={isSubmitting || isLoading}
          >
            {signUp ? 'Sign Up' : 'Sign In'}
          </StyledChakraButton>
        </FormContainer>
      </form>
    )
  }
)

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

const FormContainer = styled(Box)`
  padding: 0px 3rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`
