import { Flex, Paragraph, Text } from 'theme-ui'

const EpisodeMeta = () => (
  <Flex
    dir='row'
    sx={{
      borderBottom: 'solid #97979720 1px',
      padding: ' 42px 37px',
    }}>
    <Paragraph>Episode 1 - 2011-04-17</Paragraph>

    <Paragraph>
      ⭐️{' '}
      <Text sx={{ fontWeight: 'bold', justifyContent: 'space-between' }}>
        9
      </Text>
      /10
    </Paragraph>
  </Flex>
)

export default EpisodeMeta
