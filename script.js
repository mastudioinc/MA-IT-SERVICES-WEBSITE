const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const topBtn = document.getElementById("topBtn");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.querySelector(".close-lightbox");

/* MOBILE MENU */

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}

document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});

/* SCROLL REVEAL */

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    const trigger = window.innerHeight - 120;

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < trigger) {
            section.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

/* BACK TO TOP */

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

if (topBtn) {
    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });
}

/* IMAGE LIGHTBOX */

function openImage(src) {
    lightbox.style.display = "flex";
    lightboxImg.src = src;
}

if (closeLightbox) {
    closeLightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
    });
}

if (lightbox) {

    lightbox.addEventListener("click", (e) => {

        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }

    });

}

/* ESC KEY SUPPORT */

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        if (lightbox) {
            lightbox.style.display = "none";
        }

        if (navMenu) {
            navMenu.classList.remove("active");
        }

    }

});

/* ACTIVE NAV LINKS */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active-link");
        }

    });

});

/* HEADER EFFECT */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 50) {

        header.style.padding = "18px 8%";
        header.style.background = "rgba(0,0,0,.65)";

    } else {

        header.style.padding = "22px 8%";
        header.style.background = "rgba(0,0,0,.35)";

    }

});window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");

    if (window.scrollY > 100) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
// SCROLL PROGRESS BAR

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / scrollHeight) * 100;

    document.getElementById("progress-bar")
        .style.width = progress + "%";

});// TYPING EFFECT

const words = [
    "Computer Hardware Experts",
    "Professional IT Solutions",
    "Desktop Support Specialists",
    "AI & Business Technology"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typed = document.getElementById("typed");

function typeEffect(){

    if(!typed) return;

    const current = words[wordIndex];

    if(!deleting){
        typed.textContent = current.substring(0, charIndex++);
    }else{
        typed.textContent = current.substring(0, charIndex--);
    }

    let speed = deleting ? 50 : 100;

    if(charIndex === current.length + 1){
        deleting = true;
        speed = 1500;
    }

    if(charIndex === 0 && deleting){
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();
// =========================
// CURSOR GLOW EFFECT
// =========================

const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    if (!cursorGlow) return;

    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";

});
// SHRINK HEADER ON SCROLL

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if (!header) return;

    if (window.scrollY > 80) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});// =========================
// LOADER
// =========================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (!loader) return;

    setTimeout(() => {
    loader.classList.add("hide");
}, 650);

});
