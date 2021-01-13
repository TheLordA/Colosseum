import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import moviesContext from "../../../contexts/movies/moviesContext";

import Header from "../HomeHeader/index";
import Footer from "../Footer/index";
import DisplayMovieRow from "../DisplayMovieRow/index";

const MainContent = (props) => {
	const {
		movies,
		getTrends,
		getTopRated,
		getActionMovies,
		getComedyMovies,
		getHorrorMovies,
		getDocumentaries,
		getNetflixOriginals,
	} = useContext(moviesContext);
	const [selectedMovie, setSelectedMovie] = useState({});

	const getMovie = () => {
		// Movie Id for the Narcos series
		const movieId = 63351;
		// Make Api call to retrieve the details for a single movie
		const url = `https://api.themoviedb.org/3/tv/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`;
		axios.get(url)
			.then((res) => {
				const movieData = res.data;
				//console.log(res.data);
				setSelectedMovie(movieData);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		getMovie();
		getTrends();
		getTopRated();
		getActionMovies();
		getComedyMovies();
		getHorrorMovies();
		getDocumentaries();
		getNetflixOriginals();
	}, []);
	return (
		<div className="container">
			<Header movie={selectedMovie} />
			<div className="movieShowcase">
				{movies.Trending.length > 0 ? (
					<DisplayMovieRow
						selectMovieHandler={props.selectMovieHandler}
						key={"1"}
						title={"Trending"}
						url={""}
						movies={movies.Trending}
					/>
				) : null}
				{movies.TopRated.length > 0 ? (
					<DisplayMovieRow
						selectMovieHandler={props.selectMovieHandler}
						key={"2"}
						title={"Top Rated"}
						url={""}
						movies={movies.TopRated}
					/>
				) : null}
				{movies.Action.length > 0 ? (
					<DisplayMovieRow
						selectMovieHandler={props.selectMovieHandler}
						key={"3"}
						title={"Action"}
						url={""}
						movies={movies.Action}
					/>
				) : null}
				{movies.Comedy.length > 0 ? (
					<DisplayMovieRow
						selectMovieHandler={props.selectMovieHandler}
						key={"4"}
						title={"Comedy"}
						url={""}
						movies={movies.Comedy}
					/>
				) : null}
				{movies.Horror.length > 0 ? (
					<DisplayMovieRow
						selectMovieHandler={props.selectMovieHandler}
						key={"5"}
						title={"Horror"}
						url={""}
						movies={movies.Horror}
					/>
				) : null}
				{movies.NetflixOriginals.length > 0 ? (
					<DisplayMovieRow
						selectMovieHandler={props.selectMovieHandler}
						key={"6"}
						title={"Netflix Originals"}
						url={""}
						movies={movies.NetflixOriginals}
					/>
				) : null}
				{movies.Documentaries.length > 0 ? (
					<DisplayMovieRow
						selectMovieHandler={props.selectMovieHandler}
						key={"7"}
						title={"Documentaries"}
						url={""}
						movies={movies.Documentaries}
					/>
				) : null}
			</div>
			<Footer />
		</div>
	);
};

export default MainContent;
