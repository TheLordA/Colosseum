import { FETCH_NETFLIX_ORIGINALS } from "../actions/index";

export default function (state = {}, action) {
	switch (action.type) {
		case FETCH_NETFLIX_ORIGINALS:
			//console.log("Netflix Reducer :" + action.payload.data.results);
			const data = action.payload.data.results;
			return { ...state, data };
		default:
			return state;
	}
}
