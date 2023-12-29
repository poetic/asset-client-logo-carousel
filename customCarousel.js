document.addEventListener('DOMContentLoaded', function () {
  const testimonialWrapper = document.querySelector('.logo-testimonials_wrapper');
  const testimonialList = document.querySelector('.logo-testimonials_list');
  const testimonialLogosList = document.querySelector('.slider-logo_list-wrapper');

  const testimonials = Array.from(testimonialWrapper.querySelectorAll('.logo-testimonials_item'));
  const testimonialLogos = Array.from(testimonialWrapper.querySelectorAll('.slider-logo_item'));

  let currentIndex = 0;

  const setActiveItem = (index) => {
    const currentTestimonial = testimonials[currentIndex];
    const currentLogo = testimonialLogos[currentIndex];

    // remove active class from current testimonial
    currentTestimonial.classList.remove('active');
    currentLogo.classList.remove('active');
    currentLogo.classList.remove('clickedActive');

    // add active class to new testimonial
    testimonials[index].classList.add('active');
    testimonialLogos[index].classList.add('active');

    // translate testimonial list
    testimonialList.style.transform = `translateX(-${index * 100}%)`;

    // scroll testimonial logos list
    const scrollWidth = testimonialLogos
      .slice(0, index)
      .reduce((acc, logo) => acc + logo.offsetWidth, 0);

    testimonialLogosList.scroll({
      left: scrollWidth,
      behavior: 'smooth',
    });

    currentIndex = index;
  };

  const handleNextTestimonial = (callback = () => {}) => {
    if (currentIndex === testimonials.length - 1) {
      setActiveItem(0);
    } else {
      setActiveItem(currentIndex + 1);
    }

    callback();
  };

  const handlePreviousTestimonial = (callback = () => {}) => {
    if (currentIndex === 0) {
      setActiveItem(testimonials.length - 1);
    } else {
      setActiveItem(currentIndex - 1);
    }
    callback();
  };

  const handleTestimonialClick = (index, callback = () => {}) => {
    setActiveItem(index);
    callback();
  };

  let hasIntersected = false;
  let carouselInterval = null;

  // set initial active item and interval when wrapper is on the screen
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveItem(0);
          carouselInterval = setInterval(handleNextTestimonial, 6000);

          if (!hasIntersected) {
            hasIntersected = true;
            testimonialLogos.forEach((logo, index) => {
              logo.addEventListener('click', () => {
                handleTestimonialClick(index, () => {
                  clearInterval(carouselInterval);
                  carouselInterval = setInterval(handleNextTestimonial, 6000);
                });
              });
            });
          }
        } else {
          clearInterval(carouselInterval);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(testimonialWrapper);

  let touchstartX = 0;
  let touchendX = 0;

  testimonialList.addEventListener(
    'touchstart',
    (event) => {
      touchstartX = event.changedTouches[0].screenX;
    },
    false
  );

  testimonialList.addEventListener(
    'touchend',
    (event) => {
      touchendX = event.changedTouches[0].screenX;
      handleGesture();
    },
    false
  );

  function handleGesture() {
    // add deadzone to touch so that when scrolling on mobile it doesn't trigger the carousel
    if (Math.abs(touchendX - touchstartX) < 100) return;
    if (touchendX <= touchstartX) {
      handleNextTestimonial(() => {
        clearInterval(carouselInterval);
        carouselInterval = setInterval(handleNextTestimonial, 6000);
      });
    }

    if (touchendX >= touchstartX) {
      handlePreviousTestimonial(() => {
        clearInterval(carouselInterval);
        carouselInterval = setInterval(handleNextTestimonial, 6000);
      });
    }
  }
});
