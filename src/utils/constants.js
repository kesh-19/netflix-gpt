export const tmdbUrl = "https://api.themoviedb.org/3/movie/now_playing?page=1";
export const videosUrl = (movieId) =>
  `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
const tmdbOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDAzNWQwODI3OWE4MTE3NmM3NGJlODBlNDQ2ZWI0MSIsIm5iZiI6MTc1MTQ3MTkwMS43NzcsInN1YiI6IjY4NjU1NzFkMWMzZDVhZWQ4YTc4NDE1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FjLeYYOPbSDxs5hoQvVPupZHNnMUCtD2O1sAisr9UVk",
  },
};

export default tmdbOptions;
