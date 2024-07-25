import { Box, Collapse } from '@chakra-ui/react'
import styled from 'styled-components'

interface ErrorBoxProps {
  inCondition: boolean
  message?: string | boolean | undefined
}

export const ErrorBox = ({ inCondition, message }: ErrorBoxProps) => {
  return (
    <ErrorContaner>
      <Collapse in={inCondition} animateOpacity>
        {message}
      </Collapse>
    </ErrorContaner>
  )
}

const ErrorContaner = styled(Box)`
  color: #e53e3e;
  height: 1.7rem;

  font-size: 0.8rem;
  padding: 0px !important;
`
