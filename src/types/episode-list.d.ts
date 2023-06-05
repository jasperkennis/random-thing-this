type EpisodeShortDescription = {
  Title: string
  Released: string
  Episode: string
  imdbRating: string
  imdbID: string
}

type EpisodeList = {
  Title: string
  Season: string
  totalSeasons: string
  Episodes: EpisodeShortDescription[]
  Response: string
}
