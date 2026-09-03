/* ========================================
   HEADER SCROLL
======================================== */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    if (header) {
        header.classList.toggle(
            "is-scrolled",
            window.scrollY > 40
        );
    }
});


/* ========================================
   MOBILE MENU
======================================== */

document.addEventListener("DOMContentLoaded", () => {

    const openMenu = document.getElementById("open-menu");
    const closeMenu = document.getElementById("close-menu");
    const navMenu = document.getElementById("nav-menu");

    if (!openMenu || !closeMenu || !navMenu) {
        return;
    }


    /* ========================================
       OPEN MENU
    ======================================== */

    openMenu.addEventListener("click", () => {

        navMenu.classList.add("active");

        document.body.classList.add("no-scroll");

    });


    /* ========================================
       CLOSE MENU
    ======================================== */

    closeMenu.addEventListener("click", () => {

        navMenu.classList.remove("active");

        document.body.classList.remove("no-scroll");

    });


    /* ========================================
       CLOSE MENU WHEN CLICKING A LINK
    ======================================== */

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            document.body.classList.remove("no-scroll");

        });

    });


    /* ========================================
       CLOSE MENU WITH ESCAPE
    ======================================== */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            navMenu.classList.remove("active");

            document.body.classList.remove("no-scroll");

        }

    });


    /* ========================================
       RESET MENU ON DESKTOP
    ======================================== */

    window.addEventListener("resize", () => {

        if (window.innerWidth > 767) {

            navMenu.classList.remove("active");

            document.body.classList.remove("no-scroll");

        }

    });

});