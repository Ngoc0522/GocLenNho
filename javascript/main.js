document.querySelectorAll(".slider").forEach((slider, sliderIndex) => {
    const slides = slider.querySelectorAll(".slide");
    const dots = slider.querySelectorAll(".dot");
    const prevBtn = slider.querySelector(".prev");
    const nextBtn = slider.querySelector(".next");
    let currentSlide = 0;
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
        dots[i].classList.toggle("active", i === index);
      });
    }
    nextBtn.addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    });
    prevBtn.addEventListener("click", () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    });
    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        currentSlide = i;
        showSlide(i);
      });
    });
    showSlide(currentSlide);
  });
  