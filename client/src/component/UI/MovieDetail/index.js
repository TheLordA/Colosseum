import React from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import AddIcon from "@material-ui/icons/Add";

const MovieDetails = (props) => {
	return (
		<>
			<div className="modal__container">
				<h1 className="modal__title">{props.movie.title || props.movie.name}</h1>
				<p className="modal__info">
					<span className="modal__rating">Rating: {props.movie.vote_average * 10}% </span>
					Release date: {props.movie.release_date || props.movie.first_air_date} Runtime:{" "}
					{props.movie.runtime || props.movie.episode_run_time}m
				</p>
				<p className="modal__overview">{props.movie.overview}</p>
				{props.movie.media_type === "tv" ? (
					<p className="modal__episode">
						{props.movie.number_of_episodes
							? " Episodes: " + props.movie.number_of_episodes
							: ""}
						{props.movie.number_of_seasons
							? " Seasons: " + props.movie.number_of_seasons
							: ""}
					</p>
				) : null}
				<div className="button-wrapper">
					<button className="modal__btn" data-primary={true}>
						<PlayArrowIcon className="modal__btn--icon" fontSize="large" />
						Play
					</button>

					<button className="modal__btn" data-primary={false}>
						<AddIcon className="modal__btn--icon" />
						My List
					</button>
				</div>
			</div>
		</>
	);
};

export default MovieDetails;
