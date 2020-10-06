import express from 'express';

import usersController from './controllers/UsersController';
import tutorsController from './controllers/TutorsController';

const routes = express.Router();
const usersControllers = new usersController();
const tutorsControllers = new tutorsController();

routes.post('/tutors/register', tutorsControllers.create);
routes.post('/authenticate', usersControllers.authenticate);

export default routes;