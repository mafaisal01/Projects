import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB from './DBMS/db.js';
import authRoutes from './Routes/auth.routes.js';

dotenv.config();
connectDB();

const app = express();
app.use(express.json()); 
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);

// uploades files and avator
app.use('/uploads', express.static('uploads'));


app.get('/', (req, res) => {
  res.send('✅ Backend API running with ES Modules...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
