import {Request, Response} from 'express';

const bcrypt = require('bcrypt');

import db from '../database/connection';

interface TutorsItem{
    email: string,
    password: string,
    name: string,
    phone: string,
    number: string,
    neighborhood: string,
    city: string,
    state: string,
    cep: string
}

export default class TutorsController {


    async create(request: Request, response: Response)  {
        
        const {
            email,
            password,
            name,
            phone,
            street,
            number,
            neighborhood,
            city,
            state,
            cep
        } = request.body;
        
        const trx = await db.transaction();
        const saltRounds = 10;
        const hash = bcrypt.hashSync(password, saltRounds);
    
       try{
        const insertedUsersIds = await trx('users').insert({
            email,
            password: hash,
            type: 1
            
        });
    
        const user_id = insertedUsersIds[0];

    
        await trx('tutors').insert({
            name,
            phone,
            street,
            number,
            neighborhood,
            city,
            state,
            cep,
            user_id
        });

        console.log(user_id);
    
    
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