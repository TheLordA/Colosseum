import { combineReducers } from "redux";

import TrendingReducer from "./trendingMoviesReducer";
import NetflixOriginalsReducer from "./netflixOriginalsReducer";
import TopRatedReducer from "./topRatedMoviesReducer";
import ActionMoviesReducer from "./actionMoviesReducer";
import ComedyMoviesReducer from "./comedyMoviesReducer";
import HorrorMoviesReducer from "./horrorMoviesReducer";
import RomanceMoviesReducer from "./romanceMoviesReducer";
import DocumentaryReducer from "./documentaryReducer";

const rootReducer = combineReducers({
	trending: TrendingReducer,
	netflixOriginals: NetflixOriginalsReducer,
	topRated: TopRatedReducer,
	action: ActionMoviesReducer,
	comedy: ComedyMoviesReducer,
	horror: HorrorMoviesReducer,
	romance: RomanceMoviesReducer,
	documentary: DocumentaryReducer,
});

export default rootReducer;
