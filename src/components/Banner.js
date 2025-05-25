import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/effect-fade';

const BannerWrapper = styled.section`
  width: 100%;
  height: 100vh;
  overflow: hidden;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    background-size: cover;
    background-position: center;
    opacity: 0;
    transition: opacity 1s ease-in-out;
  }

  .swiper-slide-active {
    opacity: 1 !important;
  }
`;

const images = [
  '/images/banner/IMG_7995.jpg',
  '/images/banner/IMG_7996.jpg',
  '/images/banner/IMG_7997.jpg',
  '/images/banner/IMG_7998.jpg',
  '/images/banner/IMG_7999.jpg',
  '/images/banner/IMG_8001.jpg',
];

export default function Banner() {
  return (
    <BannerWrapper id="banner">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={3000} // скорость fade-анимации
      >
        {images.map((src, index) => (
          <SwiperSlide
            key={index}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </Swiper>
    </BannerWrapper>
  );
}
