/**
 * Fetching the details and the episodes at the same time. This is a bit of
 * a cheat because usually we would have to fetch the series details first,
 * which contains the id used in the episodes request.
 */
const getSeasonInfo = async (apiKey: string): Promise<SeasonInfo> => {
  const [seriesDetailsResponse, episodesResponse] = await Promise.all([
    fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&plot=short&i=tt5038246`,
    ),
    fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&type=series&plot=short&i=tt5024912&Season=1`,
    ),
  ])

  const [seriesDetails, episodeList]: [MediaDetails, EpisodeList] = await Promise.all([
    seriesDetailsResponse.json(),
    episodesResponse.json()
  ])

  const episodes = await Promise.all(episodeList.Episodes.map(async (episode) => {
    const episodeResponse = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&plot=short&i=${episode.imdbID}`)
    return episodeResponse.json()
  }))

  return {...seriesDetails, episodes}
}

export default getSeasonInfo
