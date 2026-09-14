import { startAnimations } from "./animations.js";
import { handleNavEvents } from "./events/navEvents.js";
import { handleDashEvents } from "./events/dashboardEvents.js";

// initial page load animations
startAnimations();

// activate event handlers
handleNavEvents();
handleDashEvents();
