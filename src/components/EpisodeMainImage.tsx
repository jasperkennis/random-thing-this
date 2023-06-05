import Image from 'next/image'
import { Box } from 'theme-ui'

const EpisodeMainImage = () => (
  <Box
    sx={{
      display: ['none', 'unset'],
      gridColumnStart: 2,
      gridColumnEnd: 3,
      gridRowStart: 1,
      gridRowEnd: 2,
      position: 'relative',
    }}>
    <Image
      src={'/issa-rae.webp'}
      alt={'Actress looking away, slightly annoyed.'}
      fill={true}
      style={{ objectFit: 'cover' }}
    />
  </Box>
)

export default EpisodeMainImage
