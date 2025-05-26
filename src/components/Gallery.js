
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { mediaItems } from '@/utils/mediaItems';
import * as S from '../styles/StyledGallery'

export default function Gallery() {
  return (
    <S.Section
      id="gallery"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <S.Title>Галерея</S.Title>
      <S.SwiperWrapper>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {mediaItems.map((item, index) => (
            <SwiperSlide key={index}>
              <S.SlideMedia>
                {item.type === 'image' ? (
                  <img src={item.src} alt={`Фото ${index + 1}`} />
                ) : (
                  <video
                    src={item.src}
                    muted
                    autoPlay
                    loop
                    playsInline
                  />
                )}
              </S.SlideMedia>
            </SwiperSlide>
          ))}
        </Swiper>
      </S.SwiperWrapper>
    </S.Section>
  );
}
