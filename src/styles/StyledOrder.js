import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Section = styled(motion.section)`
  background: var(--background);
  padding: 100px 20px;
  scroll-margin-top: 80px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 80px 16px;
  }

  @media (max-width: 425px) {
    padding: 60px 12px;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 425px) {
    font-size: 1.4rem;
  }
`;

export const PhoneLink = styled.a`
  display: inline-block;
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--primary);
  text-decoration: none;
  margin-bottom: 1rem;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 425px) {
    font-size: 1.4rem;
  }
`;

export const Name = styled.p`
  font-size: 1.1rem;
  color: var(--text);

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 425px) {
    font-size: 0.95rem;
  }
`;