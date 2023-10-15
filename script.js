document.addEventListener('DOMContentLoaded', () => {
  const main = () => {
    const slidersActivate = () => {
      const pageSlider = new Swiper('.course__swiper', {
        // Свои классы
        wrapperClass: 'course__swiper-wrapper',
        slideClass: 'course__swiper-slide',

        // Количество слайдов для показа
        slidesPerView: 1.2,

        spaceBetween: 10,

        grabCursor: true,

        navigation: {
          nextEl: '.course__arrow.swiper-button-next',
          prevEl: '.course__arrow.swiper-button-prev'
        },

        // Управление клавиатурой
        keyboard: {
          // Включить\выключить
          enabled: true,
          // Включить\выключить только когда слайдер в пределах вьюпорта
          onlyInViewport: true,
          // Включить\выключить управление клавишами pageUp, pageDown
          pageUpDown: true,
        },

        // Отключение функционала
        // при изменении элементов слайдера
        watchOverflow: true,

        // Скорость
        speed: 800,

        // Обновить свайпер
        // при изменении родительских
        // элементов слайдера
        observeParents: true,

        // Обновить свайпер
        // при изменении дочерних
        // элементов слайда
        observeSlideChildren: true,

        breakpoints: {
          351: {
            spaceBetween: 15,
            slidesPerView: 1.4,
          },
          451: {
            slidesPerView: 2.1,
          },
          671: {
            slidesPerView: 2.9,
          },
          861: {
            slidesPerView: 3.6,
          },
          1026: {
            slidesPerView: 3.07,
          },
          1201: {
            slidesPerView: 3.23,
          }
        }
      });
    }

    slidersActivate();
  }

  main()
})