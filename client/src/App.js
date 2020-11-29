/**
 *
 * @author Anass Ferrak  " @TheLordA "
 * GitHub repo: https://github.com/TheLordA/Colosseum
 *
 */

import React from "react";
import { BrowserRouter } from "react-router-dom";
//import { Provider } from "react-redux";
//import { createStore, applyMiddleware } from "redux";
//import promise from "redux-promise";
//import reducers from "./store/reducers";
import Routing from "./Routing";

import "swiper/swiper-bundle.min.css";
// import 'swiper/components/navigation/navigation.scss';
// import 'swiper/components/pagination/pagination.scss';
// import 'swiper/components/scrollbar/scrollbar.scss';

// Import main sass file to apply global styles
import "./App.scss";

//const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

function App() {
	return (
		<BrowserRouter>
			<Routing />
		</BrowserRouter>
	);
}

export default App;
