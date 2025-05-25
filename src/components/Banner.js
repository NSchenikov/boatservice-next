import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import styled from 'styled-components';
import { useRef, useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/effect-fade';

const BannerWrapper = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    position: relative;
    background-size: cover;
    background-position: center;
  }

  .swiper-slide::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;

const SlideText = styled.div`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
  padding: 1rem 2rem;
  font-size: 2rem;
  font-weight: 700;
  max-width: 90%;
  line-height: 1.5;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.8s ease-in-out;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    padding: 0.5rem 1rem;
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
  'Где начинался флот России — прогулка по следам Петра I',
  'Плещеево озеро — вдохновляющие виды и тишина',
  'Спокойствие реки Трубеж и звон колоколов на берегу',
  'Сапы, лодки, катамараны — отдых на любой вкус',
  'Природа, история, вода — Переславль ждёт вас',
  'Погружение в атмосферу древнего города и живой природы',
];

export default function Banner() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [textVisible, setTextVisible] = useState(true);

  useEffect(() => {
    if (!swiperRef.current) return;

    const swiper = swiperRef.current;

    const handleSlideChange = () => {

      setTextVisible(false);
    };

    const handleTransitionEnd = () => {

      setActiveIndex(swiper.realIndex);
      setTextVisible(true);
    };

    swiper.on('slideChangeTransitionStart', handleSlideChange);
    swiper.on('slideChangeTransitionEnd', handleTransitionEnd);

    return () => {
      swiper.off('slideChangeTransitionStart', handleSlideChange);
      swiper.off('slideChangeTransitionEnd', handleTransitionEnd);
    };
  }, []);

  return (
    <BannerWrapper id="banner">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={3000}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {images.map((src, index) => (
          <SwiperSlide
            key={index}
            style={{ backgroundImage: `url(${src})` }}
          >
            {index === activeIndex && (
              <SlideText visible={textVisible}>
                {slogans[index]}
              </SlideText>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </BannerWrapper>
  );
}
