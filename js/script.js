// ======================================================
// MOBILE NAVIGATION
// ======================================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.innerHTML = '<i class="fas fa-xmark"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Close mobile menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});


// ======================================================
// TYPING ANIMATION
// ======================================================

const typingElement = document.getElementById("typing");

const words = [
    "C++ | Python Dev",
    "Automation",
    "Problem Solver",
    "Game Dev"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent = currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;

            setTimeout(type, 1800);

            return;
        }

    } else {

        typingElement.textContent = currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length)
                wordIndex = 0;
        }
    }

    setTimeout(type, deleting ? 60 : 120);

}

type();


// ======================================================
// SCROLL TO TOP BUTTON
// ======================================================

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollBtn.classList.add("show");

    } else {

        scrollBtn.classList.remove("show");

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ======================================================
// ACTIVE NAVIGATION
// ======================================================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ======================================================
// SCROLL REVEAL
// ======================================================

const reveals = document.querySelectorAll(
    ".section-title,.about-content,.skill-card,.service-card,.project-card,form"
);

reveals.forEach(item => item.classList.add("reveal"));

function revealOnScroll() {

    reveals.forEach(item => {

        const windowHeight = window.innerHeight;

        const revealTop = item.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ======================================================
// HEADER SHADOW
// ======================================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 15px 30px rgba(0,0,0,.35)";

    } else {

        header.style.boxShadow = "none";

    }

});


// ======================================================
// CURRENT YEAR
// ======================================================

const footerText = document.querySelector("footer p");

footerText.innerHTML = `© ${new Date().getFullYear()} Ibrahim Mustapha. All rights reserved.`;


// ======================================================
// PRELOADER (OPTIONAL)
// ======================================================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});