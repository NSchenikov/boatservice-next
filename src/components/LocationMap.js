'use client';

import { useEffect, useRef } from 'react';
import { coordinates, dotName } from '@/utils/coordinates';
import * as S from '../styles/StyledLocation';

export default function LocationMap() {
  const mapRef = useRef(null);

  useEffect(() => {
    const initMap = () => {
      window.ymaps.ready(() => {
        const map = new window.ymaps.Map(mapRef.current, {
          center: coordinates,
          zoom: 17,
          controls: ['zoomControl'],
        });

        const placemark = new window.ymaps.Placemark(
          coordinates,
          {
            balloonContent: `Прокат лодок, сапов и катамаранов<br/>${dotName}`,
          },
          {
            preset: 'islands#redIcon',
          }
        );

        map.geoObjects.add(placemark);
      });
    };

    if (typeof window !== 'undefined') {
      if (!window.ymaps) {
        // console.log('Загружаем Yandex Maps API...');
        const script = document.createElement('script');
        script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=9d6a9966-9c7c-4939-9920-592fcf279ea6';
        script.async = true;
        script.onload = () => {
          // console.log('Yandex Maps API загружен');
          initMap();
        };
        document.body.appendChild(script);
      } else {
        // console.log('ymaps уже загружен');
        initMap();
      }
    }
  }, []);

  return (
    <>
      <S.MapWrapper>
        <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
      </S.MapWrapper>

      <S.AddressText>
        {dotName}, Переславль-Залесский
      </S.AddressText>
    </>
  );
}
