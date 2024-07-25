import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useAppSelector } from '../../app'
import { Logo } from '../../assets/Logo'
import { useAuth } from '../../contexts/AuthContext'
import { User } from '../../types/User'

function Navbar() {
  const auth = useAuth()
  const { email } = useSelector((state: User) => state)
  const selector = useAppSelector(state => state.user)
  // conso
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
            <Text>{selector.email ?? ''}</Text>
          </NavBlock>

          <NavBlock>
            <Button bg="green.300" onClick={auth.logout}>
              Logout
            </Button>
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
