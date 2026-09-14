import { Film } from "../models/film.js";
import { clearDashboardUI, createFilmForm } from "../ui/mainUI.js";
import { animateFilmForm } from "../animations.js";

export function handleDashEvents() {
    const createProjectBtn = document.getElementById("create-project-btn");

    createProjectBtn.addEventListener("click", (e) => {
        // clear initial display from dashboard
        const startProjectDisplay = document.getElementById("start-project");
        clearDashboardUI(startProjectDisplay);

        // add film form to dashboard
        const filmForm = createFilmForm();
        document.getElementById("dashboard").append(filmForm);
        animateFilmForm(filmForm);
    });
}
