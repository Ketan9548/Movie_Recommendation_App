import express from 'express';
import { connectDB } from './config/db.js';
import { sequelize } from './config/db.js';
import userAuthRouter from './routes/authentication_routes.js';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

// generated a iife function for syncing the database
(async () => {
    try {
        await sequelize.sync();
        console.log('Database synced successfully');
    } catch (error) {
        console.error('Error syncing database:', error);
    }
})();

app.use('/api', userAuthRouter);


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
    connectDB();
});
export default app;