import { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';

export default function SwiperInit() {
  useEffect(() => {
    const prev_btn = document.querySelector('.js-fc-btn-prev');
    const next_btn = document.querySelector('.js-fc-btn-next');

    const swiper = new Swiper('.js-fc-swiper', {
      slidesPerView: 1.05,
      spaceBetween: 8,
      speed: 500,
      loop: true,
      centeredSlides: true,
      breakpoints: {
        640: {
          slidesPerView: 1.2,
          spaceBetween: 32,
        },
        1600: {
          slidesPerView: 1.4,
          spaceBetween: 64,
        },
        1900: {
          slidesPerView: 1.6,
          spaceBetween: 64,
        },
      },
    });

    // Add event listeners to buttons
    if (prev_btn) prev_btn.addEventListener('click', () => swiper.slidePrev());
    if (next_btn) next_btn.addEventListener('click', () => swiper.slideNext());

    // Cleanup
    return () => {
      swiper.destroy();
    };
  }, []);

  return null; // This component doesn't render anything
}