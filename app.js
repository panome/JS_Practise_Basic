/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

let numberOfFilms

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function() {
		numberOfFilms = +prompt('Kolik filmu jste videl?', '')

		while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
			numberOfFilms = +prompt('Kolik filmu jste videl?', '')
		}
	},
	rememberMyFilm: function() {
		for (let i = 1; i < 3; i++) {
			const filmName = prompt(`${i} Jaky posledni film jste videl?`, ''),
					filmRating = prompt(`${i} Jak tento film ohodnotite?`, '')

			if (filmName != null && filmName != '' && filmRating != null && filmRating != '' && filmName.length < 50) {
				personalMovieDB.movies[filmName] = filmRating
			} else {
				i--
			}
		}
	},
	detectPersonalLevel: function() {
		if (personalMovieDB.count <= 10) {
			alert('Videl jsi mene nez 10 filmu')
		} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
			alert('videl jsi vic nez 10 filmu ale mene nez 30')
		} else if (personalMovieDB.count > 30) {
			alert('videl jsi vice nez 30 filmu')
		}
	},
	writeYourGenres: function() {
		for (let i = 0; i < 3; i++) {
			const genreAnswer = prompt(`Jaky je vas oblibeny zanr cislo ${i + 1}`)

			if (genreAnswer != '' && genreAnswer != null) {
				personalMovieDB.genres[i] = genreAnswer
			} else {
				i--
			}
			
		}
		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Zanr cislo ${i + 1} je ${item}`)
		})
	},
	showMyDB: function() {
		if (!personalMovieDB.privat) {
			console.log(personalMovieDB)
		}
	},
	toggleVisibleMyDB: function() {
		if (!personalMovieDB.privat) {
			personalMovieDB.privat = true
		} else if (personalMovieDB.privat) {
			personalMovieDB.privat = false
		}
	}
}