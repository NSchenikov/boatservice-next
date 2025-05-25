'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const coordinates = [56.734148, 38.831071];

const MapWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  height: 400px;
  min-height: 400px;
  position: relative;
  overflow: hidden;
  margin: 0 auto 1.5rem auto;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const AddressText = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: var(--text);
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

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
      <MapWrapper>
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
              ул. Левая набережная, д. 107
            </Popup>
          </Marker>
        </MapContainer>
      </MapWrapper>

      <AddressText>
        ул. Левая набережная, д. 107, Переславль-Залесский
      </AddressText>
    </>
  );
}
