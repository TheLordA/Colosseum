import React, { useState, useEffect, useCallback } from "react";
import "./index.css";

//import logo from "assets/images/";
import logo from "../../../assets/images/logo.png";

import Button from "../Button/index";
import { NavLink, Link } from "react-router-dom";
import Icon from "@material-ui/core/Icon";
/* import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift, faBell } from "@fortawesome/free-solid-svg-icons";
import Search from "../Search/Search"; */

const NavBar = (props) => {
	const { navigation, profileDropdown, navDropdown, loginButton } = props;
	const [isNavbarAtTop, setIsNavbarAtTop] = useState(true);

	const scrollNavbarStateHandler = useCallback(() => {
		const navbarAtTop = window.scrollY < 45;
		if (navbarAtTop !== isNavbarAtTop) {
			setIsNavbarAtTop(navbarAtTop);
		}
	}, [isNavbarAtTop]);

	useEffect(() => {
		document.addEventListener("scroll", scrollNavbarStateHandler);
		return () => {
			document.removeEventListener("scroll", scrollNavbarStateHandler);
		};
	}, [scrollNavbarStateHandler]);

	let navTiles = null;
	let flexStyle = { justifyContent: "space-between", backgroundColor: !isNavbarAtTop && "black" };

	if (navigation) {
		navTiles = (
			<>
				<div className="LinkContainer">
					<div className="Horizontal">
						<NavLink className="inactive" activeClassName="active" to="/browse" exact>
							Home
						</NavLink>
						<NavLink className="inactive" activeClassName="active" to="/browse/tv" exact>
							TV Shows
						</NavLink>
						<NavLink
							className="inactive"
							activeClassName="active"
							to="/browse/movies"
							exact
						>
							Movies
						</NavLink>
						<NavLink
							className="inactive"
							activeClassName="active"
							to="/browse/latest"
							exact
						>
							Latest
						</NavLink>
						<NavLink className="inactive" activeClassName="active" to="/browse/list" exact>
							My List
						</NavLink>
					</div>
					<div className="Vertical">{navDropdown}</div>
				</div>

				<div className="OptionsContainer">
					{/* <Search /> */}
					<span className="ExtraOptions" style={{ fontWeight: "350" }}>
						KIDS
					</span>
					<Icon className="fas fa-gift ExtraOptions" fontSize="small" />
					<Icon className="fas fa-bell ExtraOptions" fontSize="small" />
					{/* <FontAwesomeIcon className="ExtraOptions" size="lg" icon={faGift} />
					<FontAwesomeIcon className="ExtraOptions" size="lg" icon={faBell} /> */}
					{profileDropdown}
				</div>
			</>
		);
	}

	return (
		<div className="NavBar Sticky" style={flexStyle}>
			<img src={logo} alt="Colosseum Logo" />
			{navTiles}
			{loginButton && (
				<Link to="/login">
					<Button height="34px" width="75px" backgroundColor="#e50914" textColor="#fff">
						Sign In
					</Button>
				</Link>
			)}
		</div>
	);
};

export default NavBar;
