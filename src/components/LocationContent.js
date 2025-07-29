'use client';

import dynamic from 'next/dynamic';
import * as S from '../styles/StyledLocation';

const LocationMap = dynamic(() => import('./LocationMap'), { ssr: false });

export default function LocationContent() {
  return (
    <S.MapWrapper>
      <LocationMap />
    </S.MapWrapper>
  );
}
