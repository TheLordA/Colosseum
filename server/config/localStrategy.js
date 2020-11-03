const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const chalk = require("chalk");

// Load User Model
const User = require("../models/User");

module.exports = function (passport) {
	passport.use(
		new LocalStrategy(
			{
				usernameField: "email",
			},
			(email, password, done) => {
				// Match User
				User.findOne({ email: email })
					.then((user) => {
						if (!user) {
							return done(null, false, { message: "That email is not registered !!" });
						}
						// Match Password
						bcrypt.compare(password, user.password, (err, isMatch) => {
							if (err) throw err;
							if (isMatch) {
								const userInfo = {
									_id: user._id,
									name: user.name,
									email: user.email,
								};
								return done(null, userInfo);
							} else {
								return done(null, false, { message: "Password incorrect !!" });
							}
						});
					})
					.catch((err) => console.log(err));
			}
		)
	);

	passport.serializeUser((user, done) => {
		done(null, user.id);
	});

	passport.deserializeUser((id, done) => {
		// Check for the account
		User.findById(id, (err, user) => {
			//console.log(chalk.red("User findById :" + user));
			done(err, user);
		});
	});
};
