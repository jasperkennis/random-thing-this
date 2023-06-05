import Image from 'next/image'
import { Box } from 'theme-ui'

const LargeBackground = () => (
  <Box
    as='section'
    sx={{
      gridColumnStart: 1,
      gridColumnEnd: 2,
      gridRowStart: 1,
      gridRowEnd: 3,
      position: 'relative',
    }}>
    <Image
      src={'/6knKgEZVPoDTOMDuqPIA5qsAGz4.jpg'}
      alt={'Actress looking into camera with neutral expression.'}
      fill={true}
      style={{ objectFit: 'cover' }}
    />
    <Box
      sx={{
        backgroundImage:
          'linear-gradient(to bottom, rgba(0,0,0,.3), rgba(0,0,0,1))',
        height: '100%',
        width: '100%',
        position: 'relative',
      }}
    />
  </Box>
)

export default LargeBackground
