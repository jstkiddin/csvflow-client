import { background, extendTheme } from '@chakra-ui/react'
// import { mode } from '@chakra-ui/theme-tools'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const styles = {
  global: {
    body: {
      m: '0px',
    },
  },
}

const variantOutlined = () => ({
  field: {
    _focus: {
      borderColor: 'var(--chakra-colors-green-600)',
      boxShadow: '0 0 0 1px var(--chakra-colors-green-600)',
    },
  },
})

const variantFilled = () => ({
  field: {
    _focus: {
      borderColor: 'var(--chakra-colors-green-600)',
      boxShadow: '0 0 0 1px var(--chakra-colors-green-600)',
    },
  },
})

const variantFlushed = () => ({
  field: {
    _focus: {
      borderColor: 'var(--chakra-colors-green-600)',
      boxShadow: '0 1px 0 0 var(--chakra-colors-green-600)',
    },
  },
})

const theme = extendTheme({
  config,
  styles,
  shadows: {
    outline: '0 0 0 2px var(--chakra-colors-green-600)',
  },
  components: {
    Input: {
      variants: {
        outline: variantOutlined,
        filled: variantFilled,
        flushed: variantFlushed,
      },
    },
    Select: {
      variants: {
        outline: variantOutlined,
        filled: variantFilled,
        flushed: variantFlushed,
      },
    },
    Textarea: {
      variants: {
        outline: () => variantOutlined().field,
        filled: () => variantFilled().field,
        flushed: () => variantFlushed().field,
      },
    },
  },
})

export default theme
