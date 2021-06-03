import express from 'express';
import controller from '../controllers/category';
import extractJWT from '../middleware/extractJWT';

const router = express.Router();

router.post('/create/category', extractJWT,controller.createCategory);
router.get('/get/categories',extractJWT, controller.getAllCategories);

export = router;
