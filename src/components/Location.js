import { motion } from 'framer-motion';

export default function Location() {
  return (
    <motion.section
      id="location"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Как нас найти</h2>
      <div id="map" style={{ height: '300px' }}>[Тут будет карта]</div>
    </motion.section>
  );
}
