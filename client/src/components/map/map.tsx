// client/src/components/map/map.tsx

import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import type { LatLngExpression, IconOptions } from 'leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { OffersList, FullOffer } from '../../types/offer';

import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

type MapProps = {
  offers?: OffersList[];
  fullOffers?: FullOffer[];
  center?: LatLngExpression;
  zoom?: number;
};

const defaultZoom = 13;

type IconDefaultPrototype = {
  _getIconUrl?: () => void;
};

const iconDefaultProto = L.Icon.Default.prototype as IconDefaultPrototype;
delete iconDefaultProto._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
} as IconOptions);

export function Map({
  offers,
  fullOffers,
  center,
  zoom = defaultZoom,
}: MapProps): React.JSX.Element {
  // Отложенный рендер MapContainer, чтобы избежать двойной инициализации в StrictMode
  const [mapReady, setMapReady] = useState(false);
  useEffect(() => {
    setMapReady(true);
  }, []);

  const markers: LatLngExpression[] = [];

  if (offers) {
    offers.forEach((item) => {
      markers.push([item.location.latitude, item.location.longitude]);
    });
  }

  if (fullOffers) {
    fullOffers.forEach((item) => {
      markers.push([item.location.latitude, item.location.longitude]);
    });
  }

  let mapCenter: LatLngExpression = [52.370216, 4.895168];
  if (center) {
    mapCenter = center;
  } else if (offers && offers.length > 0) {
    mapCenter = [
      offers[0].city.location.latitude,
      offers[0].city.location.longitude,
    ];
  } else if (fullOffers && fullOffers.length > 0) {
    mapCenter = [
      fullOffers[0].city.location.latitude,
      fullOffers[0].city.location.longitude,
    ];
  }

  if (!mapReady) {
    return <div style={{ width: '100%', height: '100%' }} />;
  }

  return (
    <MapContainer center={mapCenter} zoom={zoom} style={{ width: '100%', height: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((position, index) => (
        <Marker key={index} position={position} />
      ))}
    </MapContainer>
  );
}
