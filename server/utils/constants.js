const ACTION_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_genres=28`;
const COMEDY_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_genres=35`;
const HORROR_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_genres=27`;
const ROMANCE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_genres=10749`;
const DOCUMENTRY_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_genres=99`;
const TOP_RATED_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_API_KEY}&language=en-US`;
const NETFLIX_ORIGINALS_URL = `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.TMDB_API_KEY}&with_networks=213`;

module.exports = {
	ACTION_URL,
	COMEDY_URL,
	HORROR_URL,
	ROMANCE_URL,
	DOCUMENTRY_URL,
	TOP_RATED_URL,
	NETFLIX_ORIGINALS_URL,
};
