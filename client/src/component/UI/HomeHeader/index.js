import React from "react";
import ColosseumLogo from "../../../assets/images/logo.png";
import "./index.scss";

export default function Header(props) {
	const backgroundStyle = {
		backgroundSize: "100% 100%",
		backgroundImage: `url(https://image.tmdb.org/t/p/original/${props.movie.backdrop_path})`,
		backgroundPosition: "center",
	};

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
var UserProfile = () => {
	return (
		<div className="UserProfile">
			<div className="User">
				<div className="name">Jack Oliver</div>
				<div className="image">
					<img
						alt=""
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/profile/profile-512_1.jpg"
					/>
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

/* return (
		<header style={backgroundStyle} className="header">
			<div className="header__container">
				<h1 className="header__container-heading">{props.movie.name}</h1>
				{/* <button onClick={() => alert("not a movie!")} className="header__container-btnPlay">
					<PlayLogo className="header__container-btnMyList-play" />
					Play
				</button>

				<button className="header__container-btnMyList">
					<AddLogo className="header__container-btnMyList-add" />
					My List
				</button> }
				<p className="header__container-overview">{props.movie.overview}</p>
			</div>
			{/* <div className="header--fadeBottom"></div> }
		</header>
	);
*/
