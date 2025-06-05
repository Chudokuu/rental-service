import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Logo } from '../../components/logo/logo';
import { CitiesCardList } from '../../components/cities-card-list/cities-card-list';
import { Map } from '../../components/map/map';
import { CitiesList } from '../../components/cities-list/cities-list';
import { SortOptions } from '../../components/sort-options/sort-options';
import { useAppSelector } from '../../hooks';
import { getOffersByCity, sortOffersByType } from '../../utils';
import type { OffersList } from '../../types/offer';
import type { SortOffer } from '../../types/sort';

export function MainPage(): React.JSX.Element {
  const selectedCity = useAppSelector((state) => state.city);
  const offersList = useAppSelector((state) => state.offers);
  const selectedCityOffers = getOffersByCity(selectedCity.name, offersList);
  const rentalOffersCount = selectedCityOffers.length;
  const [activeSort, setActiveSort] = useState<SortOffer>('Popular');
  const [hoveredOffer, setHoveredOffer] = useState<OffersList | null>(null);

  const handleListItemHover = (offerId: string | null) => {
    if (offerId === null) {
      setHoveredOffer(null);
    } else {
      const found = selectedCityOffers.find((offer) => offer.id === offerId) || null;
      setHoveredOffer(found);
    }
  };

  const cityCenter: [number, number] =
    selectedCityOffers.length > 0
      ? [
          selectedCityOffers[0].city.location.latitude,
          selectedCityOffers[0].city.location.longitude,
        ]
      : [selectedCity.location.latitude, selectedCity.location.longitude];

  const sortedOffers = sortOffersByType(selectedCityOffers, activeSort);

  const hoveredLocation: [number, number] | null = hoveredOffer
    ? [hoveredOffer.location.latitude, hoveredOffer.location.longitude]
    : null;

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Шесть городов</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Myemail@gmail.com</span>
                    <span className="header__favorite-count">0</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <div className="tabs">
          <section className="locations container">
            <CitiesList selectedCity={selectedCity} />
          </section>
        </div>

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {rentalOffersCount} places to stay in {selectedCity.name}
              </b>

              <SortOptions
                activeSorting={activeSort}
                onChange={(newSort) => setActiveSort(newSort)}
              />

              <CitiesCardList
                offersList={sortedOffers}
                onListItemHover={handleListItemHover}
              />
            </section>

            <div className="cities__right-section">
              <section className="cities__map map" style={{ width: '100%', height: '100%' }}>
                <Map
                  offers={sortedOffers}
                  center={cityCenter}
                  zoom={selectedCity.location.zoom}
                  hoveredLocation={hoveredLocation}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
