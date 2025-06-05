import React from 'react';
import type { Review as ReviewType } from '../../types/review';

type ReviewProps = {
  review: ReviewType;
};

export function Review({ review }: ReviewProps): React.JSX.Element {
  const { user, rating, comment, date } = review;
  // Форматируем дату в более человекочитаемый вид (например, "April 2023")
  const reviewDate = new Date(date).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
  });

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div
          className={`reviews__avatar-wrapper user__avatar-wrapper${
            user.isPro ? ' reviews__avatar-wrapper--pro' : ''
          }`}
        >
          <img
            className="reviews__avatar user__avatar"
            src={`/img/${user.avatarUrl}`}
            width="54"
            height="54"
            alt={user.name}
          />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${(rating / 5) * 100}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={date}>
          {reviewDate}
        </time>
      </div>
    </li>
  );
}
