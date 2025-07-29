import styled from "styled-components";

export const BannerWrapper = styled.section`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;

  @media (max-width: 425px) {
    height: 70vh;
  }

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
    /* background: rgba(0, 0, 0, 0.3); */
    z-index: 1;
  }
`;

export const SlideText = styled.div`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
    color: white;

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

export const StaticSlide = styled.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  position: relative;
`;
