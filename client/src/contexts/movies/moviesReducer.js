/* eslint-disable import/no-anonymous-default-export */
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

export default (state, action) => {
	const { payload, type } = action;
	switch (type) {
		case FETCH_TRENDING:
			return {
				...state,
				Trending: payload,
			};
		case FETCH_NETFLIX_ORIGINALS:
			return {
				...state,
				NetflixOriginals: payload,
			};
		case FETCH_TOP_RATED:
			return {
				...state,
				TopRated: payload,
			};
		case FETCH_ACTION_MOVIES:
			return {
				...state,
				Action: payload,
			};
		case FETCH_COMEDY_MOVIES:
			return {
				...state,
				Comedy: payload,
			};
		case FETCH_HORROR_MOVIES:
			return {
				...state,
				Horror: payload,
			};
		case FETCH_ROMANCE_MOVIES:
			return {
				...state,
				Romance: payload,
			};
		case FETCH_DOCUMENTARIES:
			return {
				...state,
				Documentaries: payload,
			};
		default:
			return state;
	}
};
