import { Box, Card, Heading } from '@chakra-ui/react'
import { LayoutProps } from '../types/types'
import styled from 'styled-components'
import { Logo } from '../assets/Logo'

export const AuthLayout = ({ children }: LayoutProps) => {
  return (
    <AuthContainer>
      <CardContainer>
        <AuthCard>
          <Box display="flex" alignItems="end" mb="3rem" color="green.600">
            <Logo width="48px" height="48px" />
            <Heading as="h1" fontSize="3rem">
              CSVFlow
            </Heading>
          </Box>
          {children}
        </AuthCard>
      </CardContainer>
    </AuthContainer>
  )
}

const AuthContainer = styled(Box)`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`

const AuthCard = styled(Card)`
  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
`

const CardContainer = styled(Box)`
  box-shadow: 0px 10px 113px -29px rgba(0, 0, 0, 0.15) !important;
  width: 30%;
`
