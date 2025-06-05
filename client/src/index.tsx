import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { App } from './components/app/app';
import { offers } from './mocks/offers';
import { store } from './store';
import { AuthorizationStatus } from './const';

const root = createRoot(document.getElementById('root')!);

root.render(
    <Provider store={store}>
      <App
        offers={offers}
        authorizationStatus={AuthorizationStatus.Auth}
      />
    </Provider>
);
