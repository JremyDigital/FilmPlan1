// Define a Film class
export class Film {
    static allFilms = [];

    constructor(name, genre, summary, sequenceCount, sceneCount) {
        this.name = name;
        this.genre = genre;
        this.summary = summary;
        this.sequenceCount = sequenceCount;
        this.sceneCount = sceneCount;

        // if filmCompleted true add to completed section
        this._filmCompleted = false;

        const film = {
            filmName: name,
            genre: genre,
            summary: summary,
            sequences: sequenceCount,
            scenes: sceneCount,
        };

        Film.allFilms.push(film);
    }

    static displayAllFilms(element) {
        Film.allFilms.map((film) => {
            const filmNameDisplay = document.createElement("div");
            filmNameDisplay.classList.add("film-name");
            filmNameDisplay.textContent = film.name;

            const genreDisplay = document.createElement("div");
            genreDisplay.classList.add("film-genre");
            genreDisplay.textContent = film.genre;

            const summaryDisplay = document.createElement("div");
            summaryDisplay.classList.add("film-summary");
            summaryDisplay.textContent = film.summary;

            element.append(filmNameDisplay, genreDisplay, summaryDisplay);
        });
    }

    static deleteFilm(name) {
        Film.allFilms = Film.allFilms.filter((film) => {
            return film.name !== name;
        });
    }

    get filmCompleted() {
        return this._filmCompleted;
    }

    set filmCompleted(bool) {
        if (bool === true) {
            return (this._filmCompleted = true);
        }
    }
}
