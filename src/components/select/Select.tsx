import { Select as ChakraSelect } from '@chakra-ui/react'

export const Select = () => {
  return (
    <ChakraSelect placeholder="Select option">
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </ChakraSelect>
  )
}
