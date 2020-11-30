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

	return (
		<MoviesContext.Provider
			value={{
				movies: state,
				dispatch,
				getTrends,
			}}
		>
			{props.children}
		</MoviesContext.Provider>
	);
};

export default MoviesState;
