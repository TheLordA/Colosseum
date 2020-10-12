/**
 *
 * @author Anass Ferrak  " @TheLordA "
 * GitHub repo: https://github.com/TheLordA/Colosseum
 *
 */

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingScreen from "./pages/LandingScreen/LandingScreen";
import "./App.css";

const Routing = () => {
	return (
		<Switch>
			<Route exact path="/">
				<LandingScreen />
			</Route>
		</Switch>
	);
};

function App() {
	return (
		<BrowserRouter>
			<Routing />
		</BrowserRouter>
	);
}

export default App;
