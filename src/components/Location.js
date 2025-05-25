import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { forwardRef } from 'react';

const LocationMap = dynamic(() => import('./LocationMap'), { ssr: false });

const Section = styled(motion.section)`
  background: var(--background);
  padding: 100px 20px;
  scroll-margin-top: 80px;
`;

const Location = forwardRef((props, ref) => (
  <Section
    ref={ref}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
      Как нас найти
    </h2>
    <LocationMap />
  </Section>
));

Location.displayName = 'Location';

export default Location;
