import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, CircleMarker } from 'react-leaflet';
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
  hoveredLocation?: [number, number] | null;
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
  hoveredLocation = null,
}: MapProps): React.JSX.Element {
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    setMapReady(true);
  }, []);

  if (!mapReady) {
    return <div style={{ width: '100%', height: '100%' }} />;
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

  const mapKey = `${Array.isArray(mapCenter) ? mapCenter.join('-') : ''}-${zoom}`;

  return (
    <MapContainer
      key={mapKey}
      center={mapCenter}
      zoom={zoom}
      style={{ width: '100%', height: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {offers &&
        offers.map((item, index) => {
          const position: LatLngExpression = [item.location.latitude, item.location.longitude];
          const isHovered =
            hoveredLocation !== null &&
            hoveredLocation[0] === item.location.latitude &&
            hoveredLocation[1] === item.location.longitude;

          return isHovered ? (
            <CircleMarker
              key={`hovered-${index}`}
              center={position}
              radius={10}
              pathOptions={{ color: 'orange', fillColor: 'orange', fillOpacity: 0.5 }}
            />
          ) : (
            <Marker key={`marker-${index}`} position={position} />
          );
        })}

      {fullOffers &&
        fullOffers.map((item, index) => {
          const position: LatLngExpression = [item.location.latitude, item.location.longitude];
          const isHovered =
            hoveredLocation !== null &&
            hoveredLocation[0] === item.location.latitude &&
            hoveredLocation[1] === item.location.longitude;

          return isHovered ? (
            <CircleMarker
              key={`hovered-full-${index}`}
              center={position}
              radius={10}
              pathOptions={{ color: 'orange', fillColor: 'orange', fillOpacity: 0.5 }}
            />
          ) : (
            <Marker key={`full-${index}`} position={position} />
          );
        })}
    </MapContainer>
  );
}
