import { NextFunction, Request, Response } from 'express';
import Review from '../models/review';
import mongoose from 'mongoose';

const createReview = (req: Request, res: Response, next: NextFunction) => {
    const { 
        name, date, rating, comment, userId, packageId
    } = req.body;

    const newReview = new Review({
        _id: new mongoose.Types.ObjectId(),
        name, date, rating, comment, userId, packageId
    });

    return newReview.save()
                .then(result => {
                    return res.status(201).json({
                        review: result
                    });
                })
                .catch(err => {
                     return res.status(500).json({
                        message: err.message,
                        err
                    })
                })
};

const getReviewsOfAPackage = (req: Request, res: Response, next: NextFunction) => {
    
    const { packageId } = req.params;
    
    Review.find({packageId})
        .exec()
        .then(result => {
            return res.status(200).json({
                reviews: result,
                count: result.length
            })
        })
        .catch(err => {
            return res.status(500).json({
                message: err.message,
                err
            })
        })
};

const getAllReview = (req: Request, res: Response, next: NextFunction) => {     
    Review.find()
        .exec()
        .then(result => {
            return res.status(200).json({
                reviews: result,
                count: result.length
            })
        })
        .catch(err => {
            return res.status(500).json({
                message: err.message,
                err
            })
        })
};

export default { createReview, getAllReview, getReviewsOfAPackage };
