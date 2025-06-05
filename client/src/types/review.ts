export type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type Review = {
  id: string;
  date: string; // ISO-строка, например "2023-06-29T21:00:00.465Z"
  user: User;
  comment: string;
  rating: number;
};
