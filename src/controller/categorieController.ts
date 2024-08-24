import { Request, Response } from "express";
import * as CategoryService from "../service/categoryService";

export const findAll = async (req: Request, res: Response): Promise<void> => {
    const categories = await CategoryService.findAll();
    res.status(200).json(categories);
}

export const findById = async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;
    const category = await CategoryService.findById(id);
    
    if (!category) {
        res.status(404).json({ message: 'Category not found' });
    }

    res.status(200).json(category);
}

export const create = async (req: Request, res: Response): Promise<void> => {
    const { name } = req.body;

    if (!name) {
        res.status(400).json({ message: 'Name is required' });
    }

    const data = {
        name
    };

    const category = await CategoryService.create(data);
    res.status(201).json(category);
}
