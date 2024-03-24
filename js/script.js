"use strict";

const numberOfFilms = +prompt("How many films do you already seen?", "");

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false,
};

const lastFilmSeen = prompt("What is the last film did you seen?", ""),
	valueOfFilm = prompt("How would you rate him?", ""),
	lastFilmSeen2 = prompt("What is the last film did you seen?", ""),
	valueOfFilm2 = prompt("How would you rate him?", "");

personalMovieDB.movies[lastFilmSeen] = valueOfFilm;
personalMovieDB.movies[lastFilmSeen2] = valueOfFilm2;

console.log(personalMovieDB);
