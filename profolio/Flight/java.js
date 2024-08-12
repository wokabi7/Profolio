const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const bookingType = document.getElementById("booking-type");

bookingType.addEventListener("click", (e) => {
  Array.from(bookingType.getElementsByTagName("div")).forEach((item) => {
    item.classList.remove("active");
  });

  e.target.classList.add("active");
});

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

//header container
ScrollReveal().reveal(".header-container h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header-container p", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header-container .booking", {
  ...scrollRevealOption,
  delay: 1000,
});

//service container
ScrollReveal().reveal(".service-card", {
  duration: 1000,
  interval: 500,
});

//offer container
ScrollReveal().reveal(".offer-card", {
  ...scrollRevealOption,
  interval: 500,
});

// about container
ScrollReveal().reveal(".about-image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about-content h2", {
  ...scrollRevealOption,
  origin: "right",
  delay: 500,
});

ScrollReveal().reveal(".about-content .section-description", {
  ...scrollRevealOption,
  origin: "right",
  delay: 800,
});

ScrollReveal().reveal(".about-content ul", {
  ...scrollRevealOption,
  origin: "right",
  delay: 1000,
});

ScrollReveal().reveal(".about-content .about-links", {
  ...scrollRevealOption,
  origin: "right",
  delay: 500,
});

//client container
ScrollReveal().reveal(".client-container h2", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".client-container p", {
  ...scrollRevealOption,
  origin: "left",
});

//Footer container
ScrollReveal().reveal(".footer-col", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".footer-bar", {
  ...scrollRevealOption,
  origin: "left",
  delay: 1000,
});
