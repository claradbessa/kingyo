import { Request, Response } from 'express';

import db from '../database/connection';

import moment from 'moment';
import knex from 'knex';


export default class ConsultationsController {

    async indexProfessionals(request: Request, response: Response) {

        const user_id = request.headers;
        //const user_id = "1";

        try {

            const prof = await db('professionals')
                .where('user_id', '=', user_id.user)
                .select('id');

            const pets = await db('pets')
                .where(prof[0])
                .select('id as pet_id');

            const petshops = await db('petshops')
                .join('pets', 'pets.id', '=', 'petshops.pet_id')
                .where('petshops.profissional_id', '=', prof[0].id )
                .select('petshops.date', 'petshops.name', 'pets.name as pet_name',
                 knex.raw('? as type', ['Banho & Tosa']));

                 console.log(petshops)

            const vaccines = await db('vaccines')
            .join('pets', 'pets.id', '=', 'vaccines.pet_id')
            .where('vaccines.profissional_id', '=', prof[0].id )
            .select('vaccines.date', 'vaccines.name', 'pets.name as pet_name', 
            knex.raw('? as type', ['Vacinas']));

            const consultations = await db('consultations')
            .join('pets', 'pets.id', '=', 'consultations.pet_id')
            .where('consultations.profissional_id', '=', prof[0].id )
            .select('consultations.date', 'consultations.name', 'pets.name as pet_name', 
            knex.raw('? as type', ['Consultas']));

            const exams = await db('exams')
            .join('pets', 'pets.id', '=', 'exams.pet_id')
            .where('exams.profissional_id', '=', prof[0].id )
            .select('exams.date', 'exams.name', 'pets.name as pet_name', 
            knex.raw('? as type', ['Exames']));

            const medicines = await db('medicines')
            .join('pets', 'pets.id', '=', 'medicines.pet_id')
            .where('medicines.profissional_id', '=', prof[0].id )
            .select('medicines.date', 'medicines.name', 'pets.name as pet_name', 
            knex.raw('? as type', ['Medicamento']));

            let events = []
            events.push(petshops)
            events.push(vaccines)
            events.push(consultations)
            events.push(exams)
            events.push(medicines) 


            var item = {}
            events.forEach(element => {
                element.forEach(event => {
                    var dateEvent = moment(event.date).format('YYYY-MM-DD')
                    var hourEvent = moment(event.date).format('hh:mm')
                    var description = event.pet_name + ' - ' + event.type
                    var data = { place: event.name, type: description, hour: hourEvent }

                    if(item[dateEvent]){
                        item[dateEvent].push(data);  
                    }else{
                        item[dateEvent] = []
                        item[dateEvent].push(data);  
                    }
                     
                });
            });

            response.json(item);

        } catch (err) {

            console.log(err);

            return response.status(400).json({
                error: 'Unexpected error while creating new class'
            });
        }
    }


    async indexTutors(request: Request, response: Response) {

        const user_id = request.headers;
        //const user_id = "1";

        try {

            const prof = await db('tutors')
                .where('user_id', '=', user_id.user)
                .select('id');


            const petshops = await db('petshops')
                .join('pets', 'pets.id', '=', 'petshops.pet_id')
                .where('pets.tutor_id', '=', prof[0].id )
                .select('petshops.date', 'petshops.name', 'pets.name as pet_name',
                 knex.raw('? as type', ['Banho & Tosa']));

                 console.log(petshops)

            const vaccines = await db('vaccines')
            .join('pets', 'pets.id', '=', 'vaccines.pet_id')
            .where('pets.tutor_id', '=', prof[0].id )
            .select('vaccines.date', 'vaccines.name', 'pets.name as pet_name', 
            knex.raw('? as type', ['Vacinas']));

            const consultations = await db('consultations')
            .join('pets', 'pets.id', '=', 'consultations.pet_id')
            .where('pets.tutor_id', '=', prof[0].id )
            .select('consultations.date', 'consultations.name', 'pets.name as pet_name', 
            knex.raw('? as type', ['Consultas']));

            const exams = await db('exams')
            .join('pets', 'pets.id', '=', 'exams.pet_id')
            .where('pets.tutor_id', '=', prof[0].id )
            .select('exams.date', 'exams.name', 'pets.name as pet_name', 
            knex.raw('? as type', ['Exames']));

            const medicines = await db('medicines')
            .join('pets', 'pets.id', '=', 'medicines.pet_id')
            .where('pets.tutor_id', '=', prof[0].id )
            .select('medicines.date', 'medicines.name', 'pets.name as pet_name', 
            knex.raw('? as type', ['Medicamento']));

            let events = []
            events.push(petshops)
            events.push(vaccines)
            events.push(consultations)
            events.push(exams)
            events.push(medicines) 


            var item = {}
            events.forEach(element => {
                element.forEach(event => {
                    var dateEvent = moment(event.date).format('YYYY-MM-DD')
                    var hourEvent = moment(event.date).format('hh:mm')
                    var description = event.pet_name + ' - ' + event.type
                    var data = { place: event.name, type: description, hour: hourEvent }

                    if(item[dateEvent]){
                        item[dateEvent].push(data);  
                    }else{
                        item[dateEvent] = []
                        item[dateEvent].push(data);  
                    }
                     
                });
            });

            response.json(item);

        } catch (err) {

            console.log(err);

            return response.status(400).json({
                error: 'Unexpected error while creating new class'
            });
        }
    }
}