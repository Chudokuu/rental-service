import React from 'react';

type Props = {
  img: string;
  price: number;
  title: string;
  type: string;
  ratingWidth: string;
  isBookmarked?: boolean;
  isPremium?: boolean;
};

export function NearPlaceCard({
  img,
  price,
  title,
  type,
  ratingWidth,
  isBookmarked = false,
  isPremium = false,
}: Props) {
  return (
    <article className="near-places__card place-card">
      {isPremium && (
        <div className="near-places__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={`img/${img}`}
            width="260"
            height="200"
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={
              'place-card__bookmark-button button' +
              (isBookmarked ? ' place-card__bookmark-button--active' : '')
            }
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use href="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">
              {isBookmarked ? 'In bookmarks' : 'To bookmarks'}
            </span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: ratingWidth }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
