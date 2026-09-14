import { clearDashboardUI, showProjectsDisplay } from "../ui/mainUI.js";
import { Film } from "../models/film.js";

export function handleNavEvents() {
    // clear #start-project temporarily to show current projects
    const viewProjectBtn = document.getElementById("view-projects-btn");

    viewProjectBtn.addEventListener("click", (e) => {
        // clear initial display from dashboard
        const startProjectDisplay = document.getElementById("start-project");

        // check the 'Film' class to view all projects
        if (Film.allFilms.length === 0) {
            alert("You don't have any projects");
        } else {
            clearDashboardUI(startProjectDisplay);
        }
    });
}
