import { Box, Button, Flex, Heading, Spacer, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Logo } from '../../assets/Logo'

function Navbar() {
  return (
    <NavBlock bg="green.600">
      <Flex justifyContent="space-between" alignItems="center">
        <Link to="/">
          <Box display="flex" alignItems="end">
            <Logo color="#ffffff" width="40px" height="40px" />
            <Heading color="white" as="h1">
              CSVFlow
            </Heading>
          </Box>
        </Link>

        <Box display="flex" alignItems="center">
          <NavBlock>
            <Text>something good</Text>
          </NavBlock>

          <NavBlock>
            <Button>Logout</Button>
          </NavBlock>
        </Box>
      </Flex>
    </NavBlock>
  )
}
export default Navbar

const NavBlock = styled(Box)`
  padding: 0.5rem;
  color: #ffffff;
`
