import React from 'react';
import { useParams } from 'react-router-dom';
import { FullOffer, OffersList } from '../../types/offer';
import { Logo } from '../../components/logo/logo';
import { NotFoundPage } from '../not-found-page/not-found-page';
import { CommentsForm } from '../../components/comments-form/comments-form';
import { ReviewsList } from '../../components/reviews-list/reviews-list';
import { reviews } from '../../mocks/reviews';
import { Map } from '../../components/map/map';
import { CitiesCardList } from '../../components/cities-card-list/cities-card-list';

export type OfferPageProps = {
  offers: FullOffer[];
};

export function OfferPage({ offers }: OfferPageProps) {
  const { id } = useParams<{ id: string }>();
  const offer = offers.find((item) => item.id === id);

  if (!offer) {
    return <NotFoundPage />;
  }

  // Находим 3 ближайших предложения (просто берём первые 3, отличные от текущего)
  const nearbyFullOffers = offers
    .filter((item) => item.id !== id)
    .slice(0, 3);

  // Преобразуем FullOffer -> OffersList, чтобы использовать CitiesCardList
  const nearbyOffersList: OffersList[] = nearbyFullOffers.map((fo) => ({
    id: fo.id,
    title: fo.title,
    type: fo.type,
    price: fo.price,
    previewImage: fo.images[0],
    city: fo.city,
    location: fo.location,
    isPremium: fo.isPremium,
    isFavorite: fo.isFavorite,
    rating: fo.rating,
  }));

  // Центр для карты страницы предложения — координаты текущего места
  const offerCenter: [number, number] = [offer.location.latitude, offer.location.longitude];

  return (
    <div className="page">
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
                    <span className="header__favorite-count">
                      {offers.filter((o) => o.isFavorite).length}
                    </span>
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

      <main className="page__main page__main--offer">
        <section className="offer">
          {/* Галерея изображений */}
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offer.images.map((item) => (
                <div key={item} className="offer__image-wrapper">
                  <img className="offer__image" src={`/img/${item}`} alt="Photo studio" />
                </div>
              ))}
            </div>
          </div>

          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{offer.title}</h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use href="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">
                    {offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}
                  </span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${(offer.rating / 5) * 100}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className={`offer__feature offer__feature--${offer.type}`}>
                  {offer.type.charAt(0).toUpperCase() + offer.type.slice(1)}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">€{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What's inside</h2>
                <ul className="offer__inside-list">
                  {offer.goods.map((g) => (
                    <li key={g} className="offer__inside-item">
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div
                    className={`offer__avatar-wrapper user__avatar-wrapper${
                      offer.host.isPro ? ' offer__avatar-wrapper--pro' : ''
                    }`}
                  >
                    <img
                      className="offer__avatar user__avatar"
                      src={`/img/${offer.host.avatarUrl}`}
                      width="74"
                      height="74"
                      alt={offer.host.name}
                    />
                  </div>
                  <span className="offer__user-name">{offer.host.name}</span>
                  {offer.host.isPro && <span className="offer__user-status">Pro</span>}
                </div>
              </div>

              {/* Разметка отзывов (список) */}
              <ReviewsList reviews={reviews} />

              {/* Форма добавления отзыва */}
              <CommentsForm />
            </div>
          </div>
        </section>

        {/* Карта для данной страницы */}
        <section className="offer__map map" style={{ width: '100%', height: '450px' }}>
          <Map fullOffers={nearbyFullOffers} center={offerCenter} zoom={13} />
        </section>

        {/* Блок «Other places in the neighbourhood» */}
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {/* Используем CitiesCardList для рендеринга nearbyOffersList */}
              <CitiesCardList offersList={nearbyOffersList} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
