import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "../HomeHeader/index";
import Footer from "../Footer/index";

import {
	fetchNetflixOriginals,
	fetchTrending,
	fetchTopRated,
	fetchActionMovies,
	fetchComedyMovies,
	fetchDocumentaries,
	fetchHorrorMovies,
} from "../../../store/actions/index";

import DisplayMovieRow from "../DisplayMovieRow/index";

const MainContent = (props) => {
	const [selectedMovie, setSelectedMovie] = useState({});
	const [movieInfo, setMovieInfo] = useState([
		{
			title: "Netflix Originals",
			url: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_networks=213`,
			movies: [],
		},
		{
			title: "Trending Now",
			url: `/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
			movies: [],
		},
		{
			title: "Top Rated",
			url: `/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
			movies: [],
		},
		{
			title: "Action Movies",
			url: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28`,
			movies: [],
		},
		{
			title: "Comedy Movies",
			url: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`,
			movies: [],
		},
		{
			title: "Horror Movies",
			url: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27`,
			movies: [],
		},
		{
			title: "Documentaries",
			url: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=99`,
			movies: [],
		},
	]);

	const getMovie = () => {
		/** Movie Id for the Narcos series  */
		const movieId = 63351;
		/** Make Api call to retrieve the details for a single movie  */
		const url = `https://api.themoviedb.org/3/tv/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`;
		axios.get(url)
			.then((res) => {
				const movieData = res.data;
				setSelectedMovie(movieData);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		getMovie();
		fetchNetflixOriginals();
		fetchTrending();
		fetchTopRated();
		fetchActionMovies();
		fetchComedyMovies();
		fetchDocumentaries();
		fetchHorrorMovies();

		const newMoviesArray = movieInfo.map((movie) => {
			if (movie.title === "Netflix Originals") {
				movie.movies.push(...props.netflixOriginals.data);
			}
			if (movie.title === "Trending Now") {
				movie.movies.push(...props.trending.data);
			}
			if (movie.title === "Top Rated") {
				movie.movies.push(...props.topRated.data);
			}
			if (movie.title === "Action Movies") {
				movie.movies.push(...props.actionMovies.data);
			}
			if (movie.title === "Comedy Movies") {
				movie.movies.push(...props.comedyMovies.data);
			}
			if (movie.title === "Documentaries") {
				movie.movies.push(...props.documentaries.data);
			}
			if (movie.title === "Horror Movies") {
				movie.movies.push(...props.horrorMovies.data);
			}
			return movie;
		});
		setMovieInfo(newMoviesArray);
	}, []);

	return (
		<div className="container">
			<Header movie={selectedMovie} />
			<div className="movieShowcase">
				{movieInfo.map((info) => {
					if (info.movies.length > 0) {
						return (
							<DisplayMovieRow
								selectMovieHandler={props.selectMovieHandler}
								key={info.title}
								title={info.title}
								url={info.url}
								movies={info.movies}
							/>
						);
					}
				})}
			</div>
			<Footer />
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		netflixOriginals: state.netflixOriginals,
		trending: state.trending,
		topRated: state.topRated,
		actionMovies: state.action,
		comedyMovies: state.comedy,
		documentaries: state.documentary,
		horrorMovies: state.horror,
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(
		{
			fetchNetflixOriginals,
			fetchTrending,
			fetchTopRated,
			fetchActionMovies,
			fetchComedyMovies,
			fetchDocumentaries,
			fetchHorrorMovies,
		},
		dispatch
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
