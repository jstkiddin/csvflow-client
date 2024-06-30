import { Box } from '@chakra-ui/react'

export const ListBlock = () => {
  return (
    <Box width="100%">
      <Box bg="green.600" color="white" p="0.5rem">
        Transactions
      </Box>
      <Box>
        <Box>one</Box>
        <Box>two</Box>
        <Box>three</Box>
      </Box>
    </Box>
  )
}
