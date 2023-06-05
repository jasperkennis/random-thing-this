'use client'

import EpisodeDetails from '@/components/EpisodeDetails'
import EpisodeMainImage from '@/components/EpisodeMainImage'
import EpisodeNavigation from '@/components/EpisodeNavigation'
import LargeBackground from '@/components/LargeBackground'
import SeasonDescription from '@/components/SeasonDescription'
import { theme } from '@/config/theme'
import getSeasonInfo from '@/util/get-season-info'
import { useEffect, useState } from 'react'
import { Grid, Paragraph, ThemeProvider } from 'theme-ui'

const Home = () => {
  const [seasonInfo, setSeasonInfo] = useState<undefined | SeasonInfo>(
    undefined,
  )
  useEffect(() => {
    getSeasonInfo(process.env.NEXT_PUBLIC_OMDB_API_KEY as string).then(
      (receivedSeasonInfo) => setSeasonInfo(receivedSeasonInfo),
    )
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Grid
        as='main'
        sx={{
          gridTemplateColumns: ['1fr', '1fr 40%'],
          gridTemplateRows: '1fr 35.73%',
          gap: 0,
          minHeight: '100vh',
        }}>
        {/**
         * The large background spans both rows, and sits behind the season
         * description and the episode nav, which use the rows to align nicely
         * with the episode main image and details.
         */}
        {seasonInfo && (
          <>
            <LargeBackground seasonInfo={seasonInfo} />
            <SeasonDescription />
            <EpisodeNavigation seasonInfo={seasonInfo} />

            <EpisodeMainImage />
            <EpisodeDetails />
          </>
        )}

        {!seasonInfo && <Paragraph>Loading</Paragraph>}
      </Grid>
    </ThemeProvider>
  )
}

export default Home
