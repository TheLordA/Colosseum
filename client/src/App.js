/**
 *
 * @author Anass Ferrak  " @TheLordA "
 * GitHub repo: https://github.com/TheLordA/Colosseum
 *
 */

import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";

import "swiper/swiper-bundle.min.css";

// Import main sass file to apply global styles
import "./App.scss";

function App() {
	return (
		<BrowserRouter>
			<Routing />
		</BrowserRouter>
	);
}

export default App;
