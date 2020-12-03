import React from "react";
import Aux from "react-aux";

import Backdrop from "./Backdrop";

const Modal = (props) => {
	const backgroundStyle = {
		backgroundSize: "100% 100%",
		backgroundImage: `url(https://image.tmdb.org/t/p/original/${
			props.movie.backdrop_path || props.movie.poster_path
		})`,
		marginLeft: "40px",
		marginRight: "40px",
	};

	return (
		<Aux>
			<Backdrop show={props.show} toggleBackdrop={props.modalClosed} />
			<div style={backgroundStyle} className={props.show ? "modal show" : "modal hide"}>
				{props.children}
			</div>
		</Aux>
	);
};

export default Modal;
