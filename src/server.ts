import  express, {Request, Response, NextFunction} from 'express';
import {json} from 'body-parser';
import todoRoutes from './routes/todoRoutes';

const app=express();
app.use(json);

app.use('/api', todoRoutes);

const port =process.env.PORT || 3000;
