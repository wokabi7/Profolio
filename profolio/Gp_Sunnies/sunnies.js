const slides = document.querySelectorAll(".slide");
    const leftArrows = document.querySelectorAll(".arrow.left");
    const rightArrows = document.querySelectorAll(".arrow.right");

    slides.forEach((slide, index) => {
      leftArrows[index].addEventListener("click", () => {
        showSlide(index - 1);
      });

      rightArrows[index].addEventListener("click", () => {
        showSlide(index + 1);
      });
    });

    let currentSlide = 0;

    function showSlide(slideIndex) {
      if (slideIndex < 0) {
        slideIndex = slides.length - 1;
      } else if (slideIndex >= slides.length) {
        slideIndex = 0;
      }

      slides[currentSlide].style.display = "none";
      slides[slideIndex].style.display = "block";
      currentSlide = slideIndex;
    }
  