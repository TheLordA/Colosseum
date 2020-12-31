import React from "react";
import ColosseumLogo from "../../../assets/images/logo.png";
import ProfilePic from "../../../assets/images/profilePic.png";
//import "./index.scss";

export default function Header(props) {
	return (
		<div>
			<HeaderTest />
			<div
				id="hero"
				className="Hero"
				style={{
					backgroundImage: `url(https://image.tmdb.org/t/p/original/${props.movie.backdrop_path})`,
				}}
			>
				<div className="content">
					<img
						className="logo"
						src="http://www.returndates.com/backgrounds/narcos.logo.png"
						alt=""
					/>
					<h2>Season 2 now available</h2>
					<p>{props.movie.overview}</p>
					<div className="button-wrapper">
						<CustomButton primary={true} text="Watch now" />
						<CustomButton primary={false} text="+ My list" />
					</div>
				</div>
				<div className="overlay"></div>
			</div>
		</div>
	);
}

const CustomButton = (props) => {
	return (
		<button href="#" className="CustomButton" data-primary={props.primary}>
			{props.text}
		</button>
	);
};

const HeaderTest = () => {
	return (
		<header className="Header">
			<img src={ColosseumLogo} alt="Logo" id="logo" className="Logo" />
			<Navigation />
			<Search />
			<UserProfile />
		</header>
	);
};

// Navigation
const Navigation = () => {
	return (
		<div id="navigation" className="Navigation">
			<nav>
				<ul style={{ margin: "0px", listStyleType: "none" }}>
					<li>Browse</li>
					<li>My list</li>
					<li>Top picks</li>
					<li>Recent</li>
				</ul>
			</nav>
		</div>
	);
};

// Search
const Search = () => {
	return (
		<form id="search" className="Search">
			<input type="search" placeholder="Search for a title..." />
		</form>
	);
};

// User Profile
const UserProfile = () => {
	return (
		<div className="UserProfile">
			<div className="User">
				<div className="name">Anass FERRAK</div>
				<div className="image">
					<img alt="" src={ProfilePic} />
				</div>
			</div>
			<div className="UserProfile-menu">
				<div className="UserProfileSwitch">
					<ul>
						<li>
							<div className="UserProfile-image">
								<img alt="" src="http://lorempixel.com/96/96" />
							</div>
							<div className="UserProfile-name">Alexander</div>
						</li>
						<li>
							<div className="UserProfile-image">
								<img alt="" src="http://lorempixel.com/96/96" />
							</div>
							<div className="UserProfile-name">Mattias</div>
						</li>
					</ul>
				</div>
				<div className="UserNavigation">
					<ul>
						<li>Your Account</li>
						<li>Help Center</li>
						<li>Sign out of Netflix</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
