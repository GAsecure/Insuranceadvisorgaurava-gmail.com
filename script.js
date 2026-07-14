// ======================================
// GA Secure Digital Visiting Card
// script.js
// Version 1.0
// ======================================

"use strict";

/* ===========================
   CURRENT YEAR
=========================== */

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

/* ===========================
   PAGE LOADED
=========================== */

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

/* ===========================
   SMOOTH SCROLL
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        }

    });

});

/* ===========================
   PROFILE IMAGE EFFECT
=========================== */

const profile = document.querySelector(".profile-img");

if (profile) {

    profile.addEventListener("click", () => {

        profile.style.transform = "scale(1.08) rotate(2deg)";

        setTimeout(() => {

            profile.style.transform = "";

        }, 250);

    });

}

/* ===========================
   BUTTON CLICK EFFECT
=========================== */

document.querySelectorAll(

".hero-btn,.explore-btn,.quick-card,.call-btn,.whatsapp-btn,.floating-call,.floating-whatsapp"

).forEach(button => {

    button.addEventListener("mousedown", () => {

        button.style.transform = "scale(.96)";

    });

    button.addEventListener("mouseup", () => {

        button.style.transform = "";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "";

    });

});

/* ===========================
   INTERSECTION ANIMATION
=========================== */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold:0.15

});

document.querySelectorAll(

".insurance-card,.feature-card,.quick-card,.contact-card"

).forEach(item => {

    observer.observe(item);

});

/* ===========================
   IMAGE DRAG DISABLE
=========================== */

document.querySelectorAll("img").forEach(img => {

    img.setAttribute("draggable","false");

});

/* ===========================
   RIGHT CLICK DISABLE
=========================== */

document.addEventListener("contextmenu", function(e){

    if(e.target.tagName==="IMG"){

        e.preventDefault();

    }

});

/* ===========================
   SERVICE WORKER
=========================== */

if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker
            .register("./service-worker.js")
            .then(() => {

                console.log("Service Worker Registered");

            })
            .catch(error => {

                console.log("Service Worker Error:", error);

            });

    });

}

/* ===========================
   CONSOLE MESSAGE
=========================== */

console.log(
"%cGA Secure Digital Card Loaded Successfully",
"color:#1556B8;font-size:16px;font-weight:bold;"
);
