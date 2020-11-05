const express = require("express");
const passport = require("passport");
const router = express.Router();
const { validateLoginInput } = require("../utils/validation");
const chalk = require("chalk");

// ---------------------- Local Authentication ---------------------- //

// @desc    Auth with Credentials
// @route   GET /auth/login
// @access 	Public
// @test	UnitTest : Verified
router.post("/login", (req, res, next) => {
	// Submitted Data Validation
	const { errors, isValid } = validateLoginInput(req.body);
	// Check validation
	if (!isValid) {
		return res.status(400).json(errors);
	}
	// CallBack our passportLocal Strategy to authenticate
	passport.authenticate("local", (err, user, info) => {
		if (err) {
			return next(err);
		}
		if (!user) {
			return res.status(401).json({ message: info.message });
		}
		res.json({ user });
	})(req, res, next);
});

// ------------------------------- END ------------------------------- //

// @desc    LogOut User
// @route   GET /auth/logout
// @access 	Public
// @test	UnitTest : Verified
router.get("/logout", (req, res) => {
	req.logout();
	// Successful logged Out, redirect Login .
	res.redirect("/");
});

module.exports = router;
