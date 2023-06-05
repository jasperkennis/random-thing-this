import Image from 'next/image'
import { Box, Flex, Paragraph } from 'theme-ui'

const EpisodeThumbnail = () => (
  <Flex sx={{ flexDirection: 'column', flexShrink: 0, width: 201 }}>
    <Box
      sx={{
        height: 134,
        position: 'relative',
        width: 201,
      }}>
      <Image
        src={'/issa-rae.webp'}
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
        1
      </Box>
    </Box>

    <Paragraph sx={{ color: 'background' }}>
      In the wake of her 29th birthday, Issa reflects on her life and
      relationship choices.
    </Paragraph>
  </Flex>
)

export default EpisodeThumbnail
