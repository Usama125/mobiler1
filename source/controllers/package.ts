import { NextFunction, Request, Response } from 'express';
import Package from '../models/package';
import mongoose from 'mongoose';

const createPackage = (req: Request, res: Response, next: NextFunction) => {
    const { 
        name, description, features, price,
        duration, long, lat, imageUrl, categoryId
    } = req.body;

    const newPackage = new Package({
        _id: new mongoose.Types.ObjectId(),
        name, description, features, price,
        duration, long, lat, imageUrl, categoryId
    });

    return newPackage.save()
                .then(result => {
                    return res.status(201).json({
                        package: result
                    });
                })
                .catch(err => {
                     return res.status(500).json({
                        message: err.message,
                        err
                    })
                })

};

const getAllPackage = (req: Request, res: Response, next: NextFunction) => {
    Package.find({})
        .populate("categoryId")
        .lean()
        .then(result => {
            return res.status(200).json({
                packages: result,
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

export default { createPackage, getAllPackage };
