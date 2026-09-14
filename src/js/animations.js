export function startAnimations() {
    animateNav();
    animateStartProject();
    buttonHoverAnimation();
}

function animateNav() {
    const nav = gsap.timeline();

    nav.from("#logo", {
        y: -20,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
    });

    nav.from("#options", {
        y: -20,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
    });
}

function animateStartProject() {
    const startProject = gsap.timeline();

    startProject.from("#start-project h2", {
        y: 40,
        opacity: 0,
        duration: 0.6,
    });

    startProject.from("#start-project p", {
        y: 25,
        opacity: 0,
        duration: 0.3,
    });

    startProject.fromTo(
        "#start-project button",
        {
            y: 20,
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.25,
            ease: "power1.out",
        },
    );
}

function buttonHoverAnimation() {
    const button = document.querySelector("#create-project-btn");
    const text = document.querySelector("#create-word");

    button.addEventListener("mouseenter", () => {
        gsap.to(button, {
            scale: 1.05,
            rotation: -1,
            duration: 0.35,
            ease: "power3.out",
        });

        gsap.to(text, {
            x: 6,
            duration: 0.35,
            ease: "power3.out",
        });
    });

    button.addEventListener("mouseleave", () => {
        gsap.to(button, {
            scale: 1,
            rotation: 0,
            duration: 0.35,
            ease: "power3.out",
        });

        gsap.to(text, {
            x: 0,
            duration: 0.35,
            ease: "power3.out",
        });
    });
}

export function animateFilmForm(form) {
    const fields = form.querySelectorAll("h2, label, input, select, textarea, button");

    const timeline = gsap.timeline();

    timeline.fromTo(
        form,
        {
            opacity: 0,
            y: 40,
            scale: 0.96,
        },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
        },
    );

    timeline.fromTo(
        fields,
        {
            opacity: 0,
            y: 15,
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.35,
            stagger: 0.06,
            ease: "power2.out",
        },
        "-=0.3",
    );
}
