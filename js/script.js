"use strict";

let numberOfFilms;

function start() {
	numberOfFilms = +prompt("How many films do you already seen?", "");

	while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms) || numberOfFilms < 0) {
		numberOfFilms = +prompt("How many films do you already seen?", "");
	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false,
};

function rememberMyFilms() {
	// ******************* <---for---> ********************
	for (let i = 0; i < 2; i++) {
		const lastFilmSeen = prompt("What is the last film did you seen?", "").trim(),
			valueOfFilm = prompt("How would you rate him?", "");
		
		if (lastFilmSeen != null && valueOfFilm != null && lastFilmSeen != "" && valueOfFilm != "" && lastFilmSeen.length < 50) {
			personalMovieDB.movies[lastFilmSeen] = valueOfFilm;
			console.log("Done");
		} else {
			console.log("error");
			i--;
		}
	}
}

rememberMyFilms();

function detectPersonalLevel() {
	if (numberOfFilms <= 10) {
		console.log("So few movies did you see...");
	} else if (numberOfFilms > 10 && numberOfFilms <= 30) {
		console.log("WOW, I see that you like to waching the movies");
	} else if (numberOfFilms > 30) {
		console.log("Oh mine God, are you crasy?");
	} else {
		console.log("Sory BRO, but something is wrong");
	}
}

detectPersonalLevel();

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB.private);


function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		personalMovieDB.genres[i - 1] = prompt(`Your favorite genres has a number ${i}`);
	}
}

writeYourGenres();

function calculateVolumeAndArea(rebro) {
	if (rebro < 0 || typeof(rebro) != "number" || !Number.isInteger(rebro)) {
		return "При вычислении произошла ошибка";
	} 
	let s = rebro * rebro * 6,
		v = rebro * rebro * rebro;

	return `Объем куба: ${v}, площадь всей поверхности: ${s}`;
}

calculateVolumeAndArea(15.5);