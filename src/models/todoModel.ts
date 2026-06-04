import { Schema,model, Document } from "mongoose";

export type PriorityLevel=" 'low' | 'medium' | 'high'";

export interface  ITodo extends Document{
    title:string;
    description?:string;
    isCompleted:boolean;
    priority:PriorityLevel;
};
