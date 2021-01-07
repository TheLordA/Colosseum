import React from "react";

import Backdrop from "./Backdrop";

const Modal = (props) => {
	const backgroundStyle = {
		backgroundSize: "100% 100%",
		backgroundImage: `url(https://image.tmdb.org/t/p/original/${
			props.movie.backdrop_path || props.movie.poster_path
		})`,
		marginLeft: "12%",
		marginRight: "12%",
	};

	return (
		<>
			<Backdrop show={props.show} toggleBackdrop={props.modalClosed} />
			<div style={backgroundStyle} className={props.show ? "modal show" : "modal hide"}>
				{props.children}
			</div>
		</>
	);
};

export default Modal;
