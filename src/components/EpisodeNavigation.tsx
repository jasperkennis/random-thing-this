import { Box, Flex } from 'theme-ui'
import EpisodeThumbnail from './EpisodeThumbnail'

const EpisodeNavigation = ({ seasonInfo }: SeasonInfoProps) => (
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
      {seasonInfo.episodes.map((episode, i) => (
        <EpisodeThumbnail episode={episode} i={i + 1} key={i} />
      ))}
    </Flex>
  </Box>
)

export default EpisodeNavigation
