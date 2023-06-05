'use client'

import EpisodeDetails from '@/components/EpisodeDetails'
import EpisodeMainImage from '@/components/EpisodeMainImage'
import EpisodeNavigation from '@/components/EpisodeNavigation'
import LargeBackground from '@/components/LargeBackground'
import SeasonDescription from '@/components/SeasonDescription'
import { theme } from '@/config/theme'
import { useEffect } from 'react'
import { Grid, ThemeProvider } from 'theme-ui'

const Home = () => {
  useEffect(() => {
    /**
     * Fetching the details and the episodes at the same time. This is a bit of
     * a cheat because usually we would have to fetch the series details first,
     * which contains the id used in the episodes request.
     */
    Promise.all([
      fetch(
        `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&plot=short&i=$tt5038246`,
      ),
      fetch(
        `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&type=series&plot=short&i=tt5024912&Season=1`,
      ),
    ])
      .then(([seriesDetailsResponse, episodesResponse]) =>
        Promise.all([seriesDetailsResponse.json(), episodesResponse.json()]),
      )
      .then(([seriesDetails, episodes]: [object, object]) =>
        console.log(seriesDetails, episodes),
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
        <LargeBackground />
        <SeasonDescription />
        <EpisodeNavigation />

        <EpisodeMainImage />
        <EpisodeDetails />
      </Grid>
    </ThemeProvider>
  )
}

export default Home
