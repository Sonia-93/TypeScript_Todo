import  express, {Request, Response, NextFunction} from 'express';
import {json} from 'body-parser';

interface User{
    id:number;
    username:string; 
    email:string;
}
const app=express();
const PORT=process.env.PORT || 3000;

app.use(json());

const users:User[]=[
    {id:1,username:'john_doe',email:'john.doe@example.com'},
    {id:2,username:'jane_smith',email:'jane.smith@example.com'}
];

app.get('/api/users',(req:Request,res:Response)=>{
    res.json(users);
})

app.get('/api/users/:id', (req: Request, res: Response) => {
  const user = users.find(u => u.id === parseInt(req.params.id as string));
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
});

app.post('/api/users',(req:Request,res:Response)=>{

    const {username,email}=req.body;
    if(!username || !email){
        return res.status(400).json({message:'Username and email are required'});
    }
    const newUser:User={
    id:users.length+1,
    username,
    email
    
};
users.push(newUser);
res.status(201).json(newUser);
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



