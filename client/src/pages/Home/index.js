import React, { useState } from "react";

import MainContent from "../../component/UI/MainContent/index";
import Modal from "../../component/UI/Modal/index";
import MovieDetails from "../../component/UI/MovieDetail/index";

const Home = () => {
	/** Toggles the modal when a movie is clicked. */
	const [toggleModal, setToggleModal] = useState(false);
	/** Holds the movie information for a single movie. */
	const [movieOverview, setMovieOverview] = useState({});

	/* Get the appropriate details for a specific movie that was clicked */
	const selectMovieHandler = (movie) => {
		setToggleModal(true);
		setMovieOverview(movie);
	};

	const closeModal = () => {
		setToggleModal(false);
	};

	return (
		<>
			<div className="main-content">
				<MainContent selectMovieHandler={selectMovieHandler} />
			</div>
			<Modal show={toggleModal} modalClosed={closeModal} movie={movieOverview}>
				<MovieDetails movie={movieOverview} />
			</Modal>
		</>
	);
};

export default Home;
