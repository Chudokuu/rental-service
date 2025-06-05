import { OffersList } from '../types/offer';

export const offersList: OffersList[] = [
  {
    id: 'bbb06a0e-3f92-446d-9a68-cb64b5d38e2b',
    title: 'Уютная квартира в центре Амстердама',
    type: 'apartment',
    price: 200,
    previewImage: '3-1.jpg',
    city: { name: 'Amsterdam', location: { latitude: 52.370216, longitude: 4.895168, zoom: 13 } },
    location: { latitude: 52.3909553943508, longitude: 4.85309666406198, zoom: 16 },
    isPremium: true,
    isFavorite: true,
    rating: 4.7
  },
  {
    id: 'bbb06a0e-3f92-446d-9a68-cb64b5d38e3b',
    title: 'Квартира с видом на канал',
    type: 'apartment',
    price: 350,
    previewImage: '4-1.jpg',
    city: { name: 'Amsterdam', location: { latitude: 52.370216, longitude: 4.895168, zoom: 13 } },
    location: { latitude: 52.3609553943508, longitude: 4.85309666406198, zoom: 16 },  
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
    city: { name: 'Amsterdam', location: { latitude: 52.370216, longitude: 4.895168, zoom: 13 } },
    location: { latitude: 52.3909553943508, longitude: 4.929309666406198, zoom: 16 },
    isPremium: false,
    isFavorite: true,
    rating: 4.6
  },
];
