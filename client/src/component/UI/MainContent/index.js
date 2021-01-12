import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import moviesContext from "../../../contexts/movies/moviesContext";

import Header from "../HomeHeader/index";
import Footer from "../Footer/index";
import DisplayMovieRow from "../DisplayMovieRow/index";

const MainContent = (props) => {
	const { movies, getTrends } = useContext(moviesContext);
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
	}, []);

	return (
		<div className="container">
			<Header movie={selectedMovie} />
			<div className="movieShowcase">
				{movies.Trending.length > 0 ? (
					/* movies.Trending.map((info) => {
							return (
								<DisplayMovieRow
									selectMovieHandler={props.selectMovieHandler}
									key={info.title}
									title={info.title}
									url={info.url}
									movies={info.movies}
								/>
							);
					  }) */
					<DisplayMovieRow
						selectMovieHandler={props.selectMovieHandler}
						key={"1"}
						title={"Trending"}
						url={""}
						movies={movies.Trending}
					/>
				) : null}
			</div>
			<Footer />
		</div>
	);
};

export default MainContent;
