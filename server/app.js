const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");

//Load Config
dotenv.config({ path: "./config/.env" });

// Specify the PORT which will the server running on
const PORT = process.env.PORT || 3001;

// create new express app and save it as "app"
const app = express();

// use Morgan dep in dev mode
if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}

// Set up cors to allow us to accept requests from our client
app.use(cors({ credentials: true }));

// BodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "50mb" }));

// Static Folder
app.use(express.static(path.join(__dirname, "public")));

// Routes

// make the server listen to requests
app.listen(PORT, () => {
	console.log(`Server is running in ${process.env.NODE_ENV} mode, under port ${PORT}.`);
});
