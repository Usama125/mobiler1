import express from 'express';
import controller from '../controllers/package';
import extractJWT from '../middleware/extractJWT';

const router = express.Router();

router.post('/create/package', extractJWT,controller.createPackage);
router.get('/get/packagies',extractJWT, controller.getAllPackage);

export = router;
