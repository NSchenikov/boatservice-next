import { motion } from 'framer-motion';
import styled from 'styled-components';

const Section = styled(motion.section)`
  background: white;
  padding: 100px 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: left;
  }
`;

export default function About() {
  return (
    <Section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>О нас</h2>

      <Paragraph>
        Наш прокат расположен в самом сердце Переславля-Залесского — древнего города на берегу Плещеева озера и устье реки Трубеж. Именно здесь юный Пётр I начал строить свою «потешную флотилию», положив начало будущему российскому флоту.
      </Paragraph>

      <Paragraph>
        Мы предлагаем вам не просто прогулку на лодке или сапе, а прикосновение к истории, природе и свободе. Выйдя на воду, вы увидите те же пейзажи, что вдохновляли Петра — отражения церквей в глади воды, туманные рассветы над камышами, неспешные изгибы Трубежа.
      </Paragraph>

      <Paragraph>
        В нашем прокате — современные, лёгкие в управлении лодки, SUP-доски и катамараны. Это отличный способ провести время вдвоём, с друзьями или всей семьёй. Бронирование, быстрый старт, безопасность и душевная атмосфера — всё для вашего отдыха.
      </Paragraph>

      <Paragraph>
        Погрузитесь в тишину озера и шум ветра, ощутите, как живёт вода — и вы обязательно захотите вернуться сюда снова.
      </Paragraph>
    </Section>
  );
}
