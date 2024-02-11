const $nav = document.querySelector(".container-nav");

const changeColorNav = document.addEventListener("DOMContentLoaded", e => {
    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY;
        const scrollThreshold = 120;
        if (scrollPosition > scrollThreshold) {
            $nav.style.backgroundColor = "var(--color-light-red)";
            $nav.style.right = "0px";
            $nav.style.borderRadius = "0px";
        } else {
            $nav.style.backgroundColor = "transparent";
            $nav.style.right = "";
            $nav.style.borderRadius = "";
        }
    });
});

