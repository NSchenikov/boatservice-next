import { motion } from 'framer-motion';

export default function Gallery() {
  return (
    <motion.section
      id="gallery"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Галерея</h2>
      <div>[Тут будет карусель]</div>
    </motion.section>
  );
}
