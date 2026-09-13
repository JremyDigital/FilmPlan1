import { animateNav, animateStartProject, buttonHoverAnimation } from "./animations.js";

// Initial page load animations
animateNav();
animateStartProject();
buttonHoverAnimation();

// Event Listeners for initial dashboard buttons
const viewProjectsBtn = document.getElementById("view-projects-btn");
viewProjectsBtn.addEventListener("click", (e) => {});

const createProjectBtn = document.getElementById("create-project-btn");
createProjectBtn.addEventListener("click", (e) => {});
