import React from "react";
//import "./index.scss";

const footer = () => (
	<footer className="footer">
		<div className="footer__copyright">
			&copy; 2020 Made with ❤️ by{" "}
			<a className="footer__copyright--link" href="https://thelorda.github.io/resume/">
				{" "}
				Anass Ferrak
			</a>
			<p>
				<small className="text-muted">
					Project code is open source. Feel free to fork and make your own version.
				</small>
			</p>
		</div>
	</footer>
);

export default footer;
