import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/effect-fade';

const BannerWrapper = styled.section`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    background-size: cover;
    background-position: center;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }
`;

const SlideText = styled.div`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  padding: 1rem;
  width: 90%;
  max-width: 900px;
  opacity: 0;
  transition: opacity 0.6s ease;

  &.active {
    opacity: 1;
  }

  h2 {
    font-size: 3.2rem;
    font-weight: 600;

    @media (max-width: 1024px) {
      font-size: 2.6rem;
    }

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 425px) {
      font-size: 1.6rem;
    }
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

const slogans = [
  'Погрузитесь в гладь Плещеева озера',
  'Исследуйте извилистый Трубеж',
  'Пройдите маршрутом потешной флотилии Петра I',
  'Насладитесь прогулкой вдвоём, с семьёй или друзьями',
  'Отдохните в сердце древнего Переславля',
  'Вернётесь сюда снова — мы уверены',
];

export default function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current?.swiper) {
        swiperRef.current.swiper.slideNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <BannerWrapper id="banner">
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={2000}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {images.map((src, index) => (
          <SwiperSlide
            key={index}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </Swiper>

      {slogans.map((text, index) => (
        <SlideText key={index} className={index === activeIndex ? 'active' : ''}>
          <h2>{text}</h2>
        </SlideText>
      ))}
    </BannerWrapper>
  );
}
