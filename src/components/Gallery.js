import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Section = styled(motion.section)`
  padding: 100px 20px;
  background: #f9f9f9;
  scroll-margin-top: 80px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

const SwiperWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const SlideMedia = styled.div`
  width: 100%;
  height: 450px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;

  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const mediaItems = [
  { type: 'image', src: '/images/gallery/1.jpg' },
  { type: 'image', src: '/images/gallery/2.jpg' },
  { type: 'video', src: '/images/gallery/1.mp4' },
  { type: 'image', src: '/images/gallery/3.jpg' },
  { type: 'video', src: '/images/gallery/2.mp4' },
  { type: 'video', src: '/images/gallery/3.mp4' },
];

export default function Gallery() {
  return (
    <Section
      id="gallery"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Title>Галерея</Title>
      <SwiperWrapper>
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
              <SlideMedia>
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
              </SlideMedia>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperWrapper>
    </Section>
  );
}
