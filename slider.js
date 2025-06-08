 
    const track = document.getElementById('slider-track');
    const slider = document.getElementById('slider');
    const dotsContainer = document.getElementById('dots');
    let currentIndex = 0;
    const totalSlides = track.children.length;

    function getSlidesPerView() {
      return window.innerWidth <= 768 ? 1 : 3;
    }

    function updateSlide() {
      const slidesPerView = getSlidesPerView();
      track.style.transform = `translateX(-${(100 / slidesPerView) * currentIndex}%)`;
      updateDots();
    }

    function nextSlide() {
      const slidesPerView = getSlidesPerView();
      if (currentIndex < totalSlides - slidesPerView) {
        currentIndex++;
        updateSlide();
      }
    }

    function prevSlide() {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlide();
      }
    }

    function createDots() {
      const slidesPerView = getSlidesPerView();
      if (slidesPerView > 1) return; // لا تُظهر النقط إلا في الشاشات الصغيرة
      dotsContainer.innerHTML = '';
      const dotCount = totalSlides - slidesPerView + 1;
      for (let i = 0; i < dotCount; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === currentIndex) dot.classList.add('active');
        dot.addEventListener('click', () => {
          currentIndex = i;
          updateSlide();
        });
        dotsContainer.appendChild(dot);
      }
    }

    function updateDots() {
      const slidesPerView = getSlidesPerView();
      if (slidesPerView > 1) return;
      const dots = document.querySelectorAll('.dot');
      dots.forEach(dot => dot.classList.remove('active'));
      if (dots[currentIndex]) dots[currentIndex].classList.add('active');
    }

    // Touch support
    let startX = 0;
    slider.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    });
    slider.addEventListener('touchend', (e) => {
      let endX = e.changedTouches[0].clientX;
      if (startX - endX > 50) nextSlide();
      else if (endX - startX > 50) prevSlide();
    });

    window.addEventListener('resize', () => {
      createDots();
      updateSlide();
    });

    createDots();
    updateSlide();