import {Request, Response} from 'express';

import db from '../database/connection';


export default class PetsController {


    async create(request: Request, response: Response)  {
        
        const {
            name,
            species,
            breed,
            age,
            gender,
            tutor_id,
            profissional_id
        } = request.body;
        
        const trx = await db.transaction();

        try{

            const classes = await db('tutors')
        .where('user_id', '=', tutor_id)
        .select(['id']);

            console.log(classes)

        await trx('pets').insert({
            name,
            species,
            breed,
            age,
            gender,
            tutor_id,
            profissional_id
        });
    
    
        await trx.commit();
    
        return response.status(201).send();  
        
       } catch(err){

        console.log(err);
        
         await trx.rollback();
    
         return response.status(400).json({
             error: 'Unexpected error while creating new class'
         });  
       }
    }
}