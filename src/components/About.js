import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>О нас</h2>
      <p>Мы предлагаем прокат лодок, SUP-досок и катамаранов. Отличный отдых на природе!</p>
    </motion.section>
  );
}
