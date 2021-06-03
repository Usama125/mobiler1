import { NextFunction, Request, Response } from 'express';
import Category from '../models/category';
import mongoose from 'mongoose';

const createCategory = (req: Request, res: Response, next: NextFunction) => {
    let { name } = req.body;

    const category = new Category({
        _id: new mongoose.Types.ObjectId(),
        name
    });

    return category.save()
                .then(result => {
                    return res.status(201).json({
                        category: result
                    });
                })
                .catch(err => {
                     return res.status(500).json({
                        message: err.message,
                        err
                    })
                })
};

const getAllCategories = (req: Request, res: Response, next: NextFunction) => {
    Category.find()
        .exec()
        .then(result => {
            return res.status(200).json({
                categories: result,
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

export default { getAllCategories, createCategory };
