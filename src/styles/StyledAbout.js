import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Section = styled(motion.section)`
  background: white;
  padding: 100px 20px;
  max-width: 800px;
  margin: 0 auto;
  scroll-margin-top: 80px;

  @media (max-width: 768px) {
    padding: 80px 16px;
  }

  @media (max-width: 425px) {
    padding: 60px 12px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 425px) {
    font-size: 1.4rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: left;
  }

  @media (max-width: 425px) {
    font-size: 0.95rem;
  }
`;