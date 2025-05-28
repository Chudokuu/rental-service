import { OffersList } from '../types/offer';

export const offersList: OffersList[] = [
  {
    id: 'bbb06a0e-3f92-446d-9a68-cb64b5d38e2b',
    title: 'Уютная квартира в центре Парижа',
    type: 'apartment',
    price: 200,
    previewImage: '3-1.jpg',
    city: { name: 'Paris', location: { latitude: 48.85661, longitude: 2.351499, zoom: 13 } },
    location: { latitude: 48.86861, longitude: 2.342499, zoom: 16 },
    isPremium: true,
    isFavorite: true,
    rating: 4.7
  },
  {
    id: 'bbb06a0e-3f92-446d-9a68-cb64b5d38e3b',
    title: 'Квартира с видом на Эйфелеву башню',
    type: 'apartment',
    price: 350,
    previewImage: '4-1.jpg',
    city: { name: 'Paris', location: { latitude: 48.85661, longitude: 2.351499, zoom: 13 } },
    location: { latitude: 48.8584, longitude: 2.2945, zoom: 16 },  
    isPremium: true,
    isFavorite: true,
    rating: 4.9
  },
  {
    id: 'bbb06a0e-3f92-446d-9a68-cb64b5d38e4b',
    title: 'Апартаменты в старом городе',
    type: 'apartment',
    price: 260,
    previewImage: '5-1.jpg',
    city: { name: 'Paris', location: { latitude: 48.85661, longitude: 2.351499, zoom: 13 } },
    location: { latitude: 48.8544, longitude: 2.2965, zoom: 16 },
    isPremium: false,
    isFavorite: true,
    rating: 4.6
  },
];
