import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { useState, useRef, useEffect } from 'react';
import { images, slogans } from '@/utils/bannerData';
import * as S from '../styles/StyledBanner'
import 'swiper/css';
import 'swiper/css/effect-fade';

export default function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current?.swiper) {
        swiperRef.current.swiper.slideNext();
      }
    }, 5000);

    const handleResize = () => {
      swiperRef.current?.swiper?.update();
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <S.BannerWrapper id="banner">
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={3000}
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
        <S.SlideText key={index} className={index === activeIndex ? 'active' : ''}>
          <h2>{text}</h2>
        </S.SlideText>
      ))}
    </S.BannerWrapper>
  );
}