import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = { 
  // PUT YOUR FONTS HERE
  body: 'Sora, -apple-system, system-ui, sans-serif',
  heading: 'Sora'
}

export const colors = {
  // PUT YOUR COLORS HERE
  black: {
    100: '#202020'
  }
}

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

const theme = extendTheme({
  colors,
  fonts,
  breakpoints,
})

export default theme
