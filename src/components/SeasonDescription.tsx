import { Box, Heading, Paragraph } from 'theme-ui'

const SeasonDescription = () => (
  <Box
    as='section'
    sx={{
      gridColumnStart: 1,
      gridColumnEnd: 2,
      gridRowStart: 1,
      gridRowEnd: 2,
      position: 'relative',
    }}>
    <Paragraph>Season 1</Paragraph>
    <Heading>Insecure</Heading>
    <Paragraph>
      Follows the awkward experiences and racy tribulations of a modern-day
      African-American woman.
    </Paragraph>
  </Box>
)

export default SeasonDescription
