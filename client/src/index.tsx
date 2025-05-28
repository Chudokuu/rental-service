import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/app/app';
import { offers } from './mocks/offers';
import { offersList } from './mocks/offers-list';
import { AuthorizationStatus } from './const';
import { Setting } from './setting';

const root = createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <App
      rentalOffersCount={Setting.RentalOffersCount}
      offersList={offersList}
      offers={offers}
      authorizationStatus={AuthorizationStatus.Auth}
    />
  </React.StrictMode>
);