import express from 'express';
import { registration, login, getallUsers } from '../controller/authentication.js';
const userAuthRouter = express.Router();


// Define routes for user authentication
userAuthRouter.post('/usersAuth/register', registration);
userAuthRouter.post('/usersAuth/login', login);
userAuthRouter.get('/usersAuth/allUser', getallUsers)


export default userAuthRouter;