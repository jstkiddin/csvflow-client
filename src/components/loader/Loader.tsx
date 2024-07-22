import { Box, Spinner } from '@chakra-ui/react'
import styled from 'styled-components'

export const Loader = () => {
  return (
    <LoaderContainer>
      <Spinner color="green.600" />
    </LoaderContainer>
  )
}

const LoaderContainer = styled(Box)`
  background-color: rgba(255, 255, 255, 0.3);
  width: 100vw;
  height: 100vh;
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;
`
