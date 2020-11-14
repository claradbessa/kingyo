import { Request, Response } from 'express';

import db from '../database/connection';


export default class PetsController {

    async create(request: Request, response: Response) {

        const {
            name,
            date,
            comments,
            pet_id,
            profissional
        } = request.body;

        const trx = await db.transaction();

        console.log(profissional);

        try {

            if (profissional) {
                const profissional_id = await db('professionals')
                    .where('user_id', '=', profissional)
                    .first()
                    .select(['id']);


                await trx('vaccines').insert({
                    name,
                    date,
                    comments,
                    pet_id,
                    profissional_id: profissional_id.id
                });
            } else {
                await trx('vaccines').insert({
                    name,
                    date,
                    comments,
                    pet_id
                });
            }


            await trx.commit();

            return response.status(201).send();

        } catch (err) {

            console.log(err);

            await trx.rollback();

            return response.status(400).json({
                error: 'Unexpected error while creating new class'
            });
        }
    }
}