import Todo, { PriorityLevel } from "../models/todoModel";
import { Request, Response, NextFunction } from "express";

interface createTodo{
    title:string;
    description?:string;
    priority:PriorityLevel;
}
interface updateTodo{
    title?:string;
    description?:string;
    isCompleted?:boolean;
    priority?:PriorityLevel;
}

export const createTodo=async(req:Request,res:Response):Promise<void>=>{
    try{

        const {title,description,priority}:createTodo=req.body;
      if(!title){
        res.status(400).json({message:'Title is required'});
        return;
      }
      const newTodo= await Todo.create({
        title,
        description,
        priority

      })
      res.status(201).json(newTodo);
    }
    catch(error){
  res.status(500).json({message:'Server error',error});
    }
};

export const getTodos=async(req:Request,res:Response):Promise<void>=>{
    try{

        const todos= await Todo.find();
        if(!todos){
            res.status(404).json({message:'No todos found'});
            return;
        }
        res.status(200).json(todos);
    }
    catch (error){ 

        res.status(500).json({message:'Server error',error});
    }
};

export const getTodoById=async (req:Request,res:Response):Promise<void>=>{
    try{
   const {id}=req.params;
    const todo=await Todo.findById(id);
    if(!todo){
        res.status(404).json({message:'Todo not found'});
        return;

    }
    res.status(200).json(todo);
    }
    catch(error){
        res.status(500).json({message:'Server error',error});
    }
};

export const updateTodo=async(req:Request,res:Response):Promise<void>=>{
    try{

    }
    catch(error){
        
    }
}
