import { Box } from 'theme-ui'

const EpisodeMainImage = () => (
  <Box
    sx={{
      background: 'blue',
      display: ['none', 'unset'],
      gridColumnStart: 2,
      gridColumnEnd: 3,
      gridRowStart: 1,
      gridRowEnd: 2,
    }}></Box>
)

export default EpisodeMainImage
