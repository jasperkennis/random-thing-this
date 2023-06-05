import { Box, Heading, Paragraph } from 'theme-ui'
import EpisodeMeta from './EpisodeMeta'
import EpisodeDescription from './EpisodeDescription'

const EpisodeDetails = () => (
  <Box
    sx={{
      background: 'white',
      display: ['none', 'unset'],
      gridColumnStart: 2,
      gridColumnEnd: 3,
      gridRowStart: 2,
      gridRowEnd: 3,
      overflowY: 'scroll',
    }}>
    <EpisodeMeta />
    <EpisodeDescription />
  </Box>
)

export default EpisodeDetails
