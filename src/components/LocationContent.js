'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { coordinates, dotName } from '@/utils/coordinates';
import * as S from '../styles/StyledLocation'

const MapContainer = dynamic(
  () => import('react-leaflet').then(mod => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then(mod => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then(mod => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import('react-leaflet').then(mod => mod.Popup),
  { ssr: false }
);

export default function LocationMap() {
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    import('leaflet').then(L => {
      const customIcon = new L.Icon({
        iconUrl: '/images/icons/marker-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: '/images/icons/marker-shadow.png',
        shadowSize: [41, 41],
      });

      setIcon(customIcon);
    });
  }, []);

  if (!icon) return null;

  return (
    <>
      <S.MapWrapper>
        <MapContainer
          center={coordinates}
          zoom={17}
          scrollWheelZoom={false}
          style={{ width: '100%', height: '100%' }}
        >
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <Marker position={coordinates} icon={icon}>
            <Popup>
              Прокат лодок, сапов и катамаранов<br />
              {dotName}
            </Popup>
          </Marker>
        </MapContainer>
      </S.MapWrapper>

      <S.AddressText>
        {dotName}, Переславль-Залесский
      </S.AddressText>
    </>
  );
}
