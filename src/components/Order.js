import { motion } from 'framer-motion';
import styled from 'styled-components';

const Section = styled(motion.section)`
  background: var(--background);
  padding: 100px 20px;
  scroll-margin-top: 80px;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 1.5rem;
`;

const PhoneLink = styled.a`
  display: inline-block;
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--primary);
  text-decoration: none;
  margin-bottom: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Name = styled.p`
  font-size: 1.1rem;
  color: var(--text);
`;

export default function Order() {
  return (
    <Section
      id="order"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Title>Заказать</Title>
      <PhoneLink href="tel:+79159738804">+7 (915) 973-88-04</PhoneLink>
      <Name>Владимир</Name>
    </Section>
  );
}
