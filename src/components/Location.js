import dynamic from 'next/dynamic';
import { forwardRef } from 'react';
import * as S from '../styles/StyledLocation';

const LocationContent = dynamic(() => import('./LocationContent'), { ssr: false });

const Location = forwardRef((props, ref) => (
  <S.Section
    ref={ref}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
      Как нас найти
    </h2>
    <LocationContent />
  </S.Section>
));

Location.displayName = 'Location';

export default Location;
