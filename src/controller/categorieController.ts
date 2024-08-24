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

    // checa se a categoria já existe, garantindo que não haja duplicidade
    const categoryExists = await CategoryService.findByName(name);

    if (categoryExists) {
        res.status(400).json({ message: 'Category already exists' });
        return;
    }

    if (!name) {
        res.status(400).json({ message: 'Name is required' });
        return;
    }

    const data = {
        name
    };

    const category = await CategoryService.create(data);
    res.status(201).json(category);
}

export const update = async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;
    const { name } = req.body;

    const categoryExists = await CategoryService.findById(id);

    if (!categoryExists) {
        res.status(404).json({ message: 'Category not found' });
        return;
    }

    if (!name) {
        res.status(400).json({ message: 'Name is required' });
        return;
    }

    const data = {
        name
    };

    const category = await CategoryService.update(id, data);
    res.status(200).json(category);
}

export const remove = async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;

    const categoryExists = await CategoryService.findById(id);

    if (!categoryExists) {
        res.status(404).json({ message: 'Category not found' });
        return;
    }

    const category = await CategoryService.remove(id);

    res.status(200).json({ message: `Category '${category?.name}' removed!` });
}
