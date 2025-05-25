import { motion } from 'framer-motion';
import styled from 'styled-components';

const Section = styled(motion.section)`
  background: white;
`;

export default function Gallery() {
  return (
    <Section
      id="gallery"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Галерея</h2>
      <div>[Тут будет карусель]</div>
    </Section>
  );
}
