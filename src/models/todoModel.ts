import { Schema,model, Document } from "mongoose";

export type PriorityLevel = 'low' | 'medium' | 'high';

export interface  ITodo extends Document{
    title:string;
    description?:string;//optional description
    isCompleted:boolean;
    priority:PriorityLevel;
};

const todoSchema= new Schema <ITodo>({
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        trim:true
    },
    isCompleted:{
        type:Boolean,
        default:false
    },
    priority:{
        type:String,
        enum:['low','medium','high'],
        default:'medium'
    }
   
})
const Todo=model<ITodo>('Todo',todoSchema);