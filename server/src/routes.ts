import express from 'express';

import usersController from './controllers/UsersController';
import tutorsController from './controllers/TutorsController';
import professionalsController from './controllers/ProfessionalsController';
import petsController from './controllers/PetsController';
import vaccinesControler from './controllers/VaccinesController';
import medicinesController from './controllers/MedicinesController';
import consultationsController from './controllers/ConsultationsController';
import examsController from './controllers/ExamsController';
import petshopsController from './controllers/PetshopsController';
import calendarController from './controllers/CalendarController';

const routes = express.Router();
const usersControllers = new usersController();
const tutorsControllers = new tutorsController();
const professionalsControllers = new professionalsController();
const petsControllers = new petsController();
const vaccinesControlers = new vaccinesControler();
const medicinesControllers = new medicinesController();
const consultationsControllers = new consultationsController();
const examsControllers = new examsController();
const petshopsControllers = new petshopsController();
const calendarControllers = new calendarController();

routes.post('/vaccines/create', vaccinesControlers.create);
routes.post('/medicines/create', medicinesControllers.create);
routes.post('/consultations/create', consultationsControllers.create);
routes.post('/exams/create', examsControllers.create);
routes.post('/petshops/create', petshopsControllers.create);

routes.post('/tutors/register', tutorsControllers.create);
routes.post('/professionals/register', professionalsControllers.create);

routes.post('/authenticate', usersControllers.authenticate);

routes.post('/pet/create', petsControllers.create);
routes.get('/pets', petsControllers.index);

routes.get('/professionals/events', calendarControllers.indexProfessionals);

routes.post('/professional/pet/add', petsControllers.addProfessional);
routes.get('/professional/pets', petsControllers.indexPetByProfessional);

routes.get('/pet', petsControllers.indexPet);
routes.get('/generate/code', petsControllers.generateSharingCode);

export default routes;