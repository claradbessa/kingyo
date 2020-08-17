import express from 'express';

import usersController from './controllers/UsersController';

const routes = express.Router();
const usersControllers = new usersController();

routes.post('/register', usersControllers.register);
routes.post('/authenticate', usersControllers.authenticate);

export default routes;