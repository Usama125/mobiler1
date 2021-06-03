import express from 'express';
import controller from '../controllers/review';
import extractJWT from '../middleware/extractJWT';

const router = express.Router();

router.post('/create/review', extractJWT,controller.createReview);
router.get('/get/reviews',extractJWT, controller.getAllReview);
router.get('/get/reviews/package/:packageId',extractJWT, controller.getReviewsOfAPackage);

export = router;
