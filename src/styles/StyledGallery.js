import { motion } from 'framer-motion';
import styled from "styled-components";

export const Section = styled(motion.section)`
  padding: 100px 20px;
  background: #f9f9f9;
  scroll-margin-top: 80px;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

export const SwiperWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const SlideMedia = styled.div`
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