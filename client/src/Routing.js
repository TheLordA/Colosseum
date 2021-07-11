import React from "react";
import { Route, Switch } from "react-router-dom";
// Different States
import MoviesState from "./contexts/movies/moviesState";

import LandingScreen from "./pages/LandingScreen/LandingScreen";
import LoginScreen from "./pages/LogIn/index";
import Home from "./pages/Home/index";
import NotFound from "./pages/NotFound/index";
import SignUp from "./pages/SignUp/index";

const Routing = () => {
	return (
		<Switch>
			<Route exact path="/" component={LandingScreen}>
				<LandingScreen />
			</Route>
			<Route exact path="/login" component={LoginScreen}>
				<LoginScreen />
			</Route>
			<Route exact path="/signup">
				<SignUp />
			</Route>
			<Route exact path="/browse" component={Home}>
				<MoviesState>
					<Home />
				</MoviesState>
			</Route>
			<Route component={NotFound} />
		</Switch>
	);
};

export default Routing;
