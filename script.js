// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");


menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// ================= CLOSE MENU =================

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });


// ================= SMOOTH SCROLL =================

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener(
            "click",
            function (e) {

                e.preventDefault();

                const target =
                    document.querySelector(
                        this.getAttribute("href")
                    );

                if (target) {

                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    });


// ================= CONTACT FORM =================

const contactForm =
    document.getElementById(
        "contactForm"
    );


contactForm.addEventListener(
    "submit",
    function (e) {

        e.preventDefault();

        alert(
            "Thank you! Your message has been submitted."
        );

        contactForm.reset();

    }
);