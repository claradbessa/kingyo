import express from 'express';

import usersController from './controllers/UsersController';
import tutorsController from './controllers/TutorsController';
import professionalsController from './controllers/ProfessionalsController';

const routes = express.Router();
const usersControllers = new usersController();
const tutorsControllers = new tutorsController();
const professionalsControllers = new professionalsController();

routes.post('/tutors/register', tutorsControllers.create);
routes.post('/professionals/register', professionalsControllers.create);
routes.post('/authenticate', usersControllers.authenticate);

export default routes;