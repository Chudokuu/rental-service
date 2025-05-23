
import { Review } from "../models/review.js";

async function getAllReviews(req, res, next) {
    try {
        const reviews = await Review.findAll();
        res.send(reviews);
    } catch (error) {
        console.error('Не удалось получить список отзывов:', error);
    }
}

export { getAllReviews };
