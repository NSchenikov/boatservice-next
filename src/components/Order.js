import { motion } from 'framer-motion';
import styled from 'styled-components';

const Section = styled(motion.section)`
  background: var(--background);
`;

export default function Order() {
  return (
    <Section
      id="order"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Заказать</h2>
      <p>Позвоните нам по номеру <a href="tel:+79999999999">+7 (999) 999-99-99</a></p>
    </Section>
  );
}
