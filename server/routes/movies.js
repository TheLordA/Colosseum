const express = require("express");
const passport = require("passport");
const axios = require("axios");
const router = express.Router();
const {
	ACTION_URL,
	COMEDY_URL,
	HORROR_URL,
	ROMANCE_URL,
	DOCUMENTRY_URL,
	TOP_RATED_URL,
	NETFLIX_ORIGINALS_URL,
} = require("../utils/constants");

// @desc    Get Action Movies
// @route   GET /movies/action
// @access 	Public
// @test	UnitTest :
router.get("/action", (req, res, next) => {
	axios.get(ACTION_URL)
		.then((result) => {
			res.status(200).json(result.data);
		})
		.catch((err) => console.log(err));
});

// @desc    Get Comedy Movies
// @route   GET /movies/comedy
// @access 	Public
// @test	UnitTest :
router.get("/comedy", (req, res, next) => {
	axios.get(COMEDY_URL)
		.then((result) => {
			res.status(200).json(result.data);
		})
		.catch((err) => console.log(err));
});

// @desc    Get Horror Movies
// @route   GET /movies/horror
// @access 	Public
// @test	UnitTest :
router.get("/horror", (req, res, next) => {
	axios.get(HORROR_URL)
		.then((result) => {
			res.status(200).json(result.data);
		})
		.catch((err) => console.log(err));
});

// @desc    Get Romance Movies
// @route   GET /movies/romance
// @access 	Public
// @test	UnitTest :
router.get("/romance", (req, res, next) => {
	axios.get(ROMANCE_URL)
		.then((result) => {
			res.status(200).json(result.data);
		})
		.catch((err) => console.log(err));
});

// @desc    Get Documentary Movies
// @route   GET /movies/documentary
// @access 	Public
// @test	UnitTest :
router.get("/documentary", (req, res, next) => {
	axios.get(DOCUMENTRY_URL)
		.then((result) => {
			res.status(200).json(result.data);
		})
		.catch((err) => console.log(err));
});

// @desc    Get Top Rated Movies
// @route   GET /movies/top
// @access 	Public
// @test	UnitTest :
router.get("/top", (req, res, next) => {
	axios.get(TOP_RATED_URL)
		.then((result) => {
			res.status(200).json(result.data);
		})
		.catch((err) => console.log(err));
});

// @desc    Get NEtflix Originals Movies
// @route   GET /movies/netflix
// @access 	Public
// @test	UnitTest :
router.get("/netflix", (req, res, next) => {
	axios.get(NETFLIX_ORIGINALS_URL)
		.then((result) => {
			res.status(200).json(result.data);
		})
		.catch((err) => console.log(err));
});

module.exports = router;
