import { Box, Button, Heading, Text } from '@chakra-ui/react'
import { NotFoundSVG } from '../assets/NotFound'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <CenteredContainer>
      <Heading as="h1" color="green.600">
        OOPS..!
      </Heading>
      <Text color="green.600">
        We were looking everywhere, but couldn't find your page.
      </Text>

      <NotFoundSVG width="400px" height="350px" />
      <CenteredLink to="/" style={{ width: '20%' }}>
        <StyledChakraButton bg="green.600">Go to homepage</StyledChakraButton>
      </CenteredLink>
    </CenteredContainer>
  )
}

export default NotFound

const CenteredContainer = styled(Box)`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledChakraButton = styled(Button)`
  margin-top: 1rem;
  color: #ffffff !important;
`

const CenteredLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20%;
  margin-left: 0.25rem;
`
