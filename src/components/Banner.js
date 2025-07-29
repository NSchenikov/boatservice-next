'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { images, slogans } from '@/utils/bannerData';
import * as S from '../styles/StyledBanner';

import 'swiper/css';
import 'swiper/css/effect-fade';

export default function Banner() {
  const [SwiperComponents, setSwiperComponents] = useState(null);
  const [modules, setModules] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    const loadSwiper = async () => {
      const { Swiper, SwiperSlide } = await import('swiper/react');
      const { Autoplay, EffectFade } = await import('swiper/modules');
      setSwiperComponents({ Swiper, SwiperSlide });
      setModules([Autoplay, EffectFade]);
    };

    loadSwiper();
  }, []);

  return (
    <S.BannerWrapper id="banner">
      {!SwiperComponents && (
        <S.StaticSlide>
          <Image
            src={images[0]}
            alt="Баннер"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
          <S.SlideText className="active">
            <h2>{slogans[0]}</h2>
          </S.SlideText>
        </S.StaticSlide>
      )}

      {SwiperComponents && (
        <SwiperComponents.Swiper
          ref={swiperRef}
          modules={modules}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          speed={3000}
          loop
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {images.map((src, index) => (
            <SwiperComponents.SwiperSlide key={index}>
              <Image
                src={src}
                alt={`Слайд ${index + 1}`}
                fill
                priority={index === 0}
                style={{ objectFit: 'cover' }}
              />
            </SwiperComponents.SwiperSlide>
          ))}
        </SwiperComponents.Swiper>
      )}

      {slogans.map((text, index) => (
        <S.SlideText key={index} className={index === activeIndex ? 'active' : ''}>
          <h2>{text}</h2>
        </S.SlideText>
      ))}
    </S.BannerWrapper>
  );
}