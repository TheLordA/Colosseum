import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingScreen from "./pages/LandingScreen/LandingScreen";
import LoginScreen from "./pages/LogIn/index";
import Home from "./pages/Home/index";

const Routing = () => {
	return (
		<Switch>
			<Route exact path="/">
				<LandingScreen />
			</Route>
			<Route exact path="/login">
				<LoginScreen />
			</Route>
			<Route exact path="/browse">
				<Home />
			</Route>
		</Switch>
	);
};

export default Routing;
