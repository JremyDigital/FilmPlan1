const dashboard = document.getElementById("dashboard");

export function clearDashboardUI(element) {
    dashboard.removeChild(element);
}

export function showProjectsDisplay(filmProjects) {
    if (filmProjects.length != 0) {
        const viewFilmProjects = document.createElement("div");
        viewFilmProjects.id = "view-film-projects";
        dashboard.append(viewFilmProjects);

        filmProjects.map((film) => {
            console.log(film);
            // viewFilmProjects.append();
        });
    }
}

export function createFilmForm() {
    const form = document.createElement("form");
    form.id = "film-form";

    // Form title
    const formTitle = document.createElement("h2");
    formTitle.textContent = "Create Your Film";

    // Film title
    const filmTitleLabel = document.createElement("label");
    filmTitleLabel.textContent = "Film Title";
    filmTitleLabel.htmlFor = "title";

    const filmTitleInput = document.createElement("input");
    filmTitleInput.type = "text";
    filmTitleInput.id = "title";
    filmTitleInput.name = "title";
    filmTitleInput.placeholder = "Enter film title";
    filmTitleInput.required = true;

    // Film genre
    const filmGenreLabel = document.createElement("label");
    filmGenreLabel.textContent = "Film Genre";
    filmGenreLabel.htmlFor = "genre";

    const filmGenreSelect = document.createElement("select");
    filmGenreSelect.id = "genre";
    filmGenreSelect.name = "genre";
    filmGenreSelect.required = true;

    const genrePlaceholder = document.createElement("option");
    genrePlaceholder.value = "";
    genrePlaceholder.textContent = "Select a genre";
    genrePlaceholder.disabled = true;
    genrePlaceholder.selected = true;

    filmGenreSelect.appendChild(genrePlaceholder);

    const genres = [
        "Action",
        "Adventure",
        "Animation",
        "Comedy",
        "Crime",
        "Documentary",
        "Drama",
        "Fantasy",
        "Horror",
        "Mystery",
        "Romance",
        "Science Fiction",
        "Thriller",
        "Western",
        "Musical",
        "War",
        "Historical",
        "Biography",
        "Family",
        "Sports",
        "Experimental",
    ];

    genres.forEach((genre) => {
        const option = document.createElement("option");

        option.value = genre.toLowerCase();
        option.textContent = genre;

        filmGenreSelect.appendChild(option);
    });

    // Film description
    const filmDescriptionLabel = document.createElement("label");
    filmDescriptionLabel.textContent = "Film Description";
    filmDescriptionLabel.htmlFor = "description";

    const filmDescriptionInput = document.createElement("textarea");
    filmDescriptionInput.id = "description";
    filmDescriptionInput.name = "description";
    filmDescriptionInput.placeholder = "Describe your film...";
    filmDescriptionInput.rows = 5;
    filmDescriptionInput.required = true;

    // Total sequences
    const filmSequencesLabel = document.createElement("label");
    filmSequencesLabel.textContent = "Total Sequences";
    filmSequencesLabel.htmlFor = "sequences";

    const filmSequencesInput = document.createElement("input");
    filmSequencesInput.type = "number";
    filmSequencesInput.id = "sequences";
    filmSequencesInput.name = "sequences";
    filmSequencesInput.placeholder = "Number of sequences";
    filmSequencesInput.min = "1";
    filmSequencesInput.required = true;

    // Total scenes
    const filmScenesLabel = document.createElement("label");
    filmScenesLabel.textContent = "Total Scenes";
    filmScenesLabel.htmlFor = "scenes";

    const filmScenesInput = document.createElement("input");
    filmScenesInput.type = "number";
    filmScenesInput.id = "scenes";
    filmScenesInput.name = "scenes";
    filmScenesInput.placeholder = "Number of scenes";
    filmScenesInput.min = "1";
    filmScenesInput.required = true;

    // Submit button
    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Create Film";

    // Put everything inside the form
    form.append(
        formTitle,
        filmTitleLabel,
        filmTitleInput,
        filmGenreLabel,
        filmGenreSelect,
        filmDescriptionLabel,
        filmDescriptionInput,
        filmSequencesLabel,
        filmSequencesInput,
        filmScenesLabel,
        filmScenesInput,
        submitButton,
    );

    return form;
}
