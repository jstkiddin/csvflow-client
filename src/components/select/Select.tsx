import { Select as ChakraSelect } from '@chakra-ui/react'
type SelectProps = {
  optionsList: string[]
  placeholder?: string
  disabled?: boolean
}

export const Select = (props: SelectProps) => {
  return (
    <ChakraSelect
      placeholder={props.placeholder ? props.placeholder : 'Select option'}
      disabled={props?.disabled}
    >
      {props.optionsList?.map((opt: string) => (
        <option value={opt}>{opt}</option>
      ))}
    </ChakraSelect>
  )
}
