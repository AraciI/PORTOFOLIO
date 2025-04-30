// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    // Sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Close navbar when a link is clicked (on scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Toggle read more/less
function toggleText() {
    const moreText = document.getElementById("more-text");
    const dots = document.getElementById("dots");
    const btn = document.querySelector(".about .btn");

    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "inline";
        dots.style.display = "none";
        btn.textContent = "Read Less";
    } else {
        moreText.style.display = "none";
        dots.style.display = "inline";
        btn.textContent = "Read More";
    }
}
