import { Box } from 'theme-ui'

const LargeBackground = () => (
  <Box
    as='section'
    sx={{
      background: 'red',
      gridColumnStart: 1,
      gridColumnEnd: 2,
      gridRowStart: 1,
      gridRowEnd: 3,
    }}></Box>
)

export default LargeBackground
