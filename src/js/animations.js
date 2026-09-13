export function animateNav() {
    const nav = gsap.timeline();

    nav.from("#logo", {
        y: -20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
    });

    nav.from(
        "#options",
        {
            y: -20,
            opacity: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: "power2.out",
        },
        "-=0.3",
    );
}

export function animateStartProject() {
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

export function buttonHoverAnimation() {
    const button = document.querySelector("#create-project");

    const text = button.querySelector("span");

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
