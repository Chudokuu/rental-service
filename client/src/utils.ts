import { OffersList, CityOffer } from './types/offer';
import { SortOffersType } from './const';
import { SortOffer } from './types/sort';


export function getCity(cityName: string, cities: CityOffer[]): CityOffer | undefined {
  return cities.find((c) => c.name === cityName);
}

export function getOffersByCity(
  cityName: string,
  offers: OffersList[]
): OffersList[] {
  return offers.filter((offer) => offer.city.name === cityName);
}

export function sortOffersByType(
  offers: OffersList[],
  type: SortOffer
): OffersList[] {
  switch (type) {
    case SortOffersType.PriceToHigh:
      return [...offers].sort((a, b) => a.price - b.price);
    case SortOffersType.PriceToLow:
      return [...offers].sort((a, b) => b.price - a.price);
    case SortOffersType.TopRated:
      return [...offers].sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
}