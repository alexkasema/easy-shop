import path from 'path';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';


import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';

const port = process.env.PORT || 5000 ;

//? connect to MongoDB
connectDB();

const app = express();

// app.use(cors());

//! Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//! Cookie parser Middleware
app.use(cookieParser());


app.get('/', (req, res) => {
    res.send('API is running!!!')
})

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/upload', uploadRoutes);

//! WE can look it up in paypal API docs
app.get('/api/config/paypal', (req, res) => res.send({ clientId: process.env.PAYPAL_CLIENT_ID}));

//! make uploads folder static
const __dirname = path.resolve(); //! set __dirname to current directory
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

app.use(notFound);
app.use(errorHandler)


app.listen(port, () => console.log(`Server running on port ${port}`))