import { Review } from '../types/review';

export const reviews: Review[] = [
  {
    id: '463623e8-eecc-42a2-b2fc-797a299b5230',
    comment: 'The room was spacious and clean. The pool looked nothing like the photos',
    date: '2023-06-29T21:00:00.465Z',
    rating: 4,
    user: {
      name: 'Isaac',
      avatarUrl: 'avatar-max.jpg',
      isPro: true,
    },
  },
  {
    id: 'c2aefc1f-5a8a-4c93-a653-1f3e2ec3d100',
    comment:
      'Очень понравилось проживание! Удобное расположение и приветливый хозяин. Рекомендуем!',
    date: '2024-02-15T17:30:00.000Z',
    rating: 5,
    user: {
      name: 'Anna',
      avatarUrl: 'avatar/2.jpg',
      isPro: false,
    },
  },
  {
    id: 'f7f51b2a-5e18-4eff-b16b-13cf5f17d380',
    comment:
      'Неплохие апартаменты, но уборка могла бы быть получше. Вид на канал впечатлил, но слышен шум улицы.',
    date: '2023-11-10T19:45:00.000Z',
    rating: 3,
    user: {
      name: 'Max',
      avatarUrl: 'avatar/5.jpg',
      isPro: false,
    },
  },
];
