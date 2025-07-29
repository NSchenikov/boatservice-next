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

    <p style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 2rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
    Мы находимся в&nbsp;<strong>Переславле-Залесском</strong>, на <strong>улице Левая Набережная</strong>, 
    прямо на берегу, рядом с домом 107. Идеальное место для старта прогулки по реке Трубеж и Плещееву озеру.
    </p>

    <LocationContent />
  </S.Section>
));

Location.displayName = 'Location';

export default Location;
