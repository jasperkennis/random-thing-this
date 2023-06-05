import { Box, Flex } from 'theme-ui'
import EpisodeThumbnail from './EpisodeThumbnail'

const EpisodeNavigation = () => (
  <Box
    as='section'
    sx={{
      gridColumnStart: 1,
      gridColumnEnd: 2,
      gridRowStart: 2,
      gridRowEnd: 3,
      position: 'relative',
    }}>
    <Flex
      sx={{
        flexDirection: 'row',
        gap: 20,
        overflowX: 'scroll',
      }}>
      <EpisodeThumbnail />
      <EpisodeThumbnail />
      <EpisodeThumbnail />
      <EpisodeThumbnail />
      <EpisodeThumbnail />
    </Flex>
  </Box>
)

export default EpisodeNavigation
