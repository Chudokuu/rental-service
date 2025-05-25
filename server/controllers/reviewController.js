import ApiError from '../error/ApiError.js';
import { Review } from '../models/review.js';
import { User } from '../models/user.js';
import { adaptReviewToClient } from '../adapters/reviewAdapter.js';

const addReview = async (req, res, next) => {
  try {
    const { comment, rating } = req.body;
    const offerId = req.params.offerId;
    const userId = req.user.id; // убедитесь, что передаёте req.user из аутентификации

    if (!comment || !rating || !offerId) {
      return next(ApiError.badRequest('Не хватает данных для комментария'));
    }

    const review = await Review.create({
      text: comment,
      rating,
      authorId: userId,
      OfferId: offerId
    });

    res.status(201).json(review);
  } catch (error) {
    console.error('addReview error:', error);
    next(ApiError.internal('Ошибка при добавлении комментария'));
  }
};

const getReviewsByOfferId = async (req, res, next) => {
  try {
    const reviews = await Review.findAll({
      where: { OfferId: req.params.offerId },
      include: { model: User, as: 'author' },
      order: [['publishDate', 'DESC']]
    });

    const adapted = reviews.map(adaptReviewToClient);
    res.status(200).json(adapted);
  } catch (error) {
    console.error('getReviewsByOfferId error:', error);
    next(ApiError.internal('Ошибка при получении комментариев'));
  }
};

export { addReview, getReviewsByOfferId };


