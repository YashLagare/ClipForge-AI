import { clerkMiddleware } from '@clerk/express';
import cors from 'cors';
import express, { Request, Response } from 'express';
import clerkWebhooks from './controllers/clerk.js';



const app = express();

const PORT = process.env.PORT || 5000;

//middleware
app.use(cors())

app.post("/api/clerk", express.raw({ type: 'application/json' }), clerkWebhooks)

app.use(express.json())
app.use(clerkMiddleware())

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});