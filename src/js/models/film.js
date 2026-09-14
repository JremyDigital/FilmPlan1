export class Film {
    static allFilms = [];
    constructor(title, genre, description, totalSequences, totalScenes) {
        this.title = title;
        this.genre = genre;
        this.description = description;
        this.totalSequences = totalSequences;
        this.totalScenes = totalScenes;

        // add film obj to this classes 'allFilms' array
        Film.allFilms.push(this);
    }
}
