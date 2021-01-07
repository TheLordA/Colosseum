import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Lazy } from "swiper";
import "swiper/components/scrollbar/scrollbar.scss";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
// install Swiper components
SwiperCore.use([Navigation, Pagination, /*  Scrollbar, */ A11y, Lazy]);

const DisplayMovieRow = (props) => {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => {
			window.addEventListener("resize", handleResize);
		};
	}, []);

	const handleResize = () => {
		setWidth(window.innerWidth);
	};

	let netflixUrl = false;
	if (props.url === `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_networks=213`) {
		netflixUrl = true;
	}

	return (
		<>
			<div className="CategoryShowcase">
				<h1 className="CategoryShowcase__title">{props.title}</h1>
				<h5 className="CategoryShowcase__explore">Explore All</h5>
				<ArrowForwardIosIcon className="CategoryShowcase__icon" />
			</div>

			<Swiper
				className="movieShowcase__container"
				navigation={true}
				grabCursor={false}
				draggable={false}
				loop={true}
				loopAdditionalSlides={width >= 1378 ? 4 : width >= 998 ? 3 : width >= 625 ? 2 : 2}
				breakpoints={{
					1378: {
						slidesPerView: 5,
						slidesPerGroup: 5,
					},
					998: {
						slidesPerView: 4,
						slidesPerGroup: 4,
					},
					625: {
						slidesPerView: 3,
						slidesPerGroup: 3,
					},
					0: {
						slidesPerView: 2,
						slidesPerGroup: 2,
					},
				}}
				preventClicksPropagation={true}
				preventClicks={true}
				scrollbar={{ draggable: false, hide: true }}
				slideToClickedSlide={false}
				pagination={{ clickable: true }}
				spaceBetween={10}
			>
				{props.movies.map((movie, idx) => {
					//console.log(movie);
					let movieImageUrl = "https://image.tmdb.org/t/p/w500/" + movie.poster_path;
					if (movie.poster_path && movie.backdrop_path !== null) {
						return (
							<SwiperSlide
								onClick={() => props.selectMovieHandler(movie)}
								key={idx}
								className={
									"movieShowcase__container--movie" +
									(netflixUrl ? "__netflix" : "")
								}
							>
								<div className="movieSwipe">
									<img
										alt=""
										src={movieImageUrl}
										className="movieShowcase__container--movie-image"
									/>
									{/* <h1 className="movieShowcase__container--movie-title">
										{movie.title ? movie.title : movie.original_name}
									</h1> */}
								</div>
							</SwiperSlide>
						);
					}
				})}
			</Swiper>
		</>
	);
};

export default DisplayMovieRow;
