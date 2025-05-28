import React from 'react';
import { FullOffer } from '../../types/offer';
import { FavoritesCard } from '../favorites-card/favorites-card';

type FavoritesCardListProps = {
  favorites: FullOffer[];
};

export function FavoritesCardList({ favorites }: FavoritesCardListProps) {
  return (
    <ul className="favorites__places">
      {favorites.map((offer) => (
        <FavoritesCard key={offer.id} offer={offer} />
      ))}
    </ul>
  );
}