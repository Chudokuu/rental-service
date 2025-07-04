import React from 'react';
import { OffersList } from '../../types/offer';
import { CitiesCard } from '../cities-card/cities-card';

type CitiesCardListProps = {
  offersList: OffersList[];
  onListItemHover?: (offerId: string | null) => void;
};

export function CitiesCardList({
  offersList,
  onListItemHover,
}: CitiesCardListProps) {
  return (
    <div className="cities__places-list places__list">
      {offersList.map((item) => (
        <CitiesCard
          key={item.id}
          id={item.id}
          title={item.title}
          type={item.type}
          price={item.price}
          previewImage={item.previewImage}
          isPremium={item.isPremium}
          rating={item.rating}
          onListItemHover={onListItemHover}
        />
      ))}
    </div>
  );
}
