import express from 'express';

import usersController from './controllers/UsersController';
import tutorsController from './controllers/TutorsController';
import professionalsController from './controllers/ProfessionalsController';
import petsController from './controllers/PetsController';

const routes = express.Router();
const usersControllers = new usersController();
const tutorsControllers = new tutorsController();
const professionalsControllers = new professionalsController();
const petsControllers = new petsController();

routes.post('/tutors/register', tutorsControllers.create);
routes.post('/professionals/register', professionalsControllers.create);

routes.post('/authenticate', usersControllers.authenticate);

routes.post('/pet/create', petsControllers.create);
routes.get('/pets', petsControllers.index);

routes.post('/professional/pet/add', petsControllers.addProfessional);
routes.get('/professional/pets', petsControllers.indexPetByProfessional);

routes.get('/pet', petsControllers.indexPet);
routes.get('/generate/code', petsControllers.generateSharingCode);

export default routes;