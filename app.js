let numberOfFilms

function start() {
	numberOfFilms = +prompt('Kolik filmu jste videl?', '')

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Kolik filmu jste videl?', '')
	}
}
start()

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

function rememberMyFilm() {
	for (let i = 1; i < 3; i++) {
		const filmName = prompt(`${i} Jaky posledni film jste videl?`, ''),
				filmRating = prompt(`${i} Jak tento film ohodnotite?`, '')

		if (filmName != null && filmName != '' && filmRating != null && filmRating != '' && filmName.length < 50) {
			personalMovieDB.movies[filmName] = filmRating
		} else {
			i--
		}
		
	}
}
rememberMyFilm()

function detectPersonalLevel() {
	if (personalMovieDB.count <= 10) {
		alert('Videl jsi mene nez 10 filmu')
	} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
		alert('videl jsi vic nez 10 filmu ale mene nez 30')
	} else if (personalMovieDB.count > 30) {
		alert('videl jsi vice nez 30 filmu')
	}
}
detectPersonalLevel()

function writeYourGenres() {
	for (let i = 0; i < 3; i++) {
		const genreAnswer = prompt(`Jaky je vas oblibeny zanr cislo ${i + 1}`)
		personalMovieDB.genres[i] = genreAnswer
	}
}
writeYourGenres()

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB)
	}
}
showMyDB(personalMovieDB.privat)