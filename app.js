const numberOfFilms = prompt('Kolik filmu jste videl?')

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

const filmName1 = prompt('Jaky posledni film jste videl?'),
      filmRating1 = prompt('Jak tento film ohodnotite?'),
      filmName2 = prompt('Jaky posledni film jste videl?'),
      filmRating2 = prompt('Jak tento film ohodnotite?')


personalMovieDB.movies[filmName1] = filmRating1
personalMovieDB.movies[filmName2] = filmRating2