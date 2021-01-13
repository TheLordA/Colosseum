import React, { useReducer } from "react";
import axios from "axios";

import MoviesContext from "./moviesContext";
import MoviesReducer from "./moviesReducer";

import {
	FETCH_TRENDING,
	FETCH_NETFLIX_ORIGINALS,
	FETCH_TOP_RATED,
	FETCH_ACTION_MOVIES,
	FETCH_COMEDY_MOVIES,
	FETCH_HORROR_MOVIES,
	FETCH_ROMANCE_MOVIES,
	FETCH_DOCUMENTARIES,
} from "../types";

const MoviesState = (props) => {
	let initialState = {
		Trending: [],
		NetflixOriginals: [],
		TopRated: [],
		Action: [],
		Comedy: [],
		Horror: [],
		Romance: [],
		Documentaries: [],
	};

	const [state, dispatch] = useReducer(MoviesReducer, initialState);

	// get Trending Movies of the Week
	const getTrends = async () => {
		try {
			let res = await axios.get(
				`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
			);
			let { data } = res;

			dispatch({ type: FETCH_TRENDING, payload: data.results });
		} catch (error) {
			console.error(error);
		}
	};

	// get Top Rated Movies
	const getTopRated = async () => {
		try {
			let res = await axios.get(
				`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`
			);
			let { data } = res;

			dispatch({ type: FETCH_TOP_RATED, payload: data.results });
		} catch (error) {
			console.error(error);
		}
	};

	// get Action Movies
	const getActionMovies = async () => {
		try {
			let res = await axios.get(
				`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28`
			);
			let { data } = res;

			dispatch({ type: FETCH_ACTION_MOVIES, payload: data.results });
		} catch (error) {
			console.error(error);
		}
	};

	// get Comedy Movies
	const getComedyMovies = async () => {
		try {
			let res = await axios.get(
				`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`
			);
			let { data } = res;

			dispatch({ type: FETCH_COMEDY_MOVIES, payload: data.results });
		} catch (error) {
			console.error(error);
		}
	};

	// get Horror Movies
	const getHorrorMovies = async () => {
		try {
			let res = await axios.get(
				`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27`
			);
			let { data } = res;

			dispatch({ type: FETCH_HORROR_MOVIES, payload: data.results });
		} catch (error) {
			console.error(error);
		}
	};

	// get Documentaries
	const getDocumentaries = async () => {
		try {
			let res = await axios.get(
				`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=99`
			);
			let { data } = res;

			dispatch({ type: FETCH_DOCUMENTARIES, payload: data.results });
		} catch (error) {
			console.error(error);
		}
	};

	// get Netflix Originals
	const getNetflixOriginals = async () => {
		try {
			let res = await axios.get(
				`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_networks=213`
			);
			let { data } = res;

			dispatch({ type: FETCH_NETFLIX_ORIGINALS, payload: data.results });
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<MoviesContext.Provider
			value={{
				movies: state,
				getTrends,
				getTopRated,
				getActionMovies,
				getComedyMovies,
				getHorrorMovies,
				getDocumentaries,
				getNetflixOriginals,
			}}
		>
			{props.children}
		</MoviesContext.Provider>
	);
};

export default MoviesState;
