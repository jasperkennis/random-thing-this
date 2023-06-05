import Image from 'next/image'
import { Box, Flex, Paragraph } from 'theme-ui'

interface EpisodeThumbnailProps {
  episode: MediaDetails
  i: number
}

const EpisodeThumbnail = ({ episode, i }: EpisodeThumbnailProps) => (
  <Flex sx={{ flexDirection: 'column', flexShrink: 0, width: 201 }}>
    <Box
      sx={{
        height: 134,
        position: 'relative',
        width: 201,
      }}>
      <Image
        src={episode.Poster}
        alt={'Actress looking away, slightly annoyed.'}
        fill={true}
        style={{ objectFit: 'cover' }}
      />
      <Box
        sx={{
          background: 'background',
          height: 30,
          position: 'absolute',
          width: 30,
        }}>
        {i}
      </Box>
    </Box>

    <Paragraph sx={{ color: 'background' }}>{episode.Plot}</Paragraph>
  </Flex>
)

export default EpisodeThumbnail
