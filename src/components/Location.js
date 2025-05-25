import { motion } from 'framer-motion';
import styled from 'styled-components';

const Section = styled(motion.section)`
  background: var(--background);
`;

export default function Location() {
  return (
    <Section
      id="location"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Как нас найти</h2>
      <div id="map" style={{ height: '300px' }}>[Тут будет карта]</div>
    </Section>
  );
}
