import { useEffect, useRef, useState } from 'react';
import { images, slogans } from '@/utils/bannerData';
import * as S from '../styles/StyledBanner';

import 'swiper/css';
import 'swiper/css/effect-fade';

export default function Banner() {
  const [isClient, setIsClient] = useState(false);
  const [SwiperEl, setSwiperEl] = useState(null);
  const [SwiperSlideEl, setSwiperSlideEl] = useState(null);
  const [modules, setModules] = useState([]);
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const loadSwiper = async () => {
      const { Swiper, SwiperSlide } = await import('swiper/react');
      const { Autoplay, EffectFade } = await import('swiper/modules');

      setSwiperEl(() => Swiper);
      setSwiperSlideEl(() => SwiperSlide);
      setModules([Autoplay, EffectFade]);
      setIsClient(true);
    };

    loadSwiper();
  }, []);

  return (
    <S.BannerWrapper id="banner">
      {!isClient && (
        <S.StaticSlide style={{ backgroundImage: `url(${images[0]})` }}>
          <S.SlideText className="active">
            <h2>{slogans[0]}</h2>
          </S.SlideText>
        </S.StaticSlide>
      )}

      {isClient && SwiperEl && SwiperSlideEl && (
        <SwiperEl
          ref={swiperRef}
          modules={modules}
          effect="fade"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={3000}
          loop
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {images.map((src, index) => (
            <SwiperSlideEl
              key={index}
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
        </SwiperEl>
      )}

      {slogans.map((text, index) => (
        <S.SlideText key={index} className={index === activeIndex ? 'active' : ''}>
          <h2>{text}</h2>
        </S.SlideText>
      ))}
    </S.BannerWrapper>
  );
}
