import { Request, Response } from 'express';

import db from '../database/connection';


export default class PetsController {

    async index(request: Request, response: Response) {
        const user = request.headers;

        const pets = await db('pets')
            .join('tutors', 'tutors.id', '=', 'pets.tutor_id')
            .join('users', 'tutors.user_id', '=', 'users.id')
            .where('users.id', '=', user.user)
            .select(['pets.*']);

        return response.json(pets)
    }

    async indexPetByProfessional(request: Request, response: Response) {
        const user = request.headers;

        const pets = await db('pets')
            .join('professionals', 'professionals.id', '=', 'pets.profissional_id')
            .join('users', 'professionals.user_id', '=', 'users.id')
            .where('users.id', '=', user.user)
            .select(['pets.*']);

        return response.json(pets)
    }

    async addProfessional(request: Request, response: Response) {

        const {
            code,
            user_id
        } = request.body;

        try {

            const pet = await db('pets')
                .where('code', '=', code)
                .first()
                .select('profissional_id');

                console.log(pet)

            if (pet.profissional_id == null) {
                const professional_id = await db('professionals')
                    .where('user_id', '=', user_id)
                    .first()
                    .select('id');

                await db("pets")
                    .update('profissional_id', professional_id.id)
                    .where('code', '=', code)

                return response.status(201).send();

            }

        } catch (err) {
            return response.status(400).json({
                error: 'Unexpected error while creating new class'
            });
        }
    }

    async indexPet(request: Request, response: Response) {

        const pet_id = request.headers.pet_id;

        const pet = await db('pets')
            .where('id', '=', pet_id)
            .select(['pets.*']);

        return response.json(pet)
    }

    async generateSharingCode(request: Request, response: Response) {

        const pet_id = request.headers.pet_id;

        const pet = await db('pets')
            .where('id', '=', pet_id)
            .first()
            .select(['code']);

        console.log(pet)
        if (pet.code == null) {
            const code = Math.floor(Math.random() * 1000000)

            await db("pets")
                .update('code', code)
                .where('id', '=', pet_id)
                .then(rows => {
                    // the argument here as you stated
                    // describes the number of rows updated
                    // therefore if no row found no row will be updated
                    if (!rows) {
                        return response.status(404).json({ success: false });
                    }
                    return response.json({ success: true, code: pet.code });
                })
                .catch(e => response.status(500).json(e));

            console.log(code)
        } else {
            return response.json({ success: true, code: pet.code })
        }


    }

    async create(request: Request, response: Response) {

        const {
            name,
            species,
            breed,
            age,
            gender,
            tutor_id,
            profissional_id,
            code
        } = request.body;

        const trx = await db.transaction();

        try {
            const tutor = await db('tutors')
                .where('user_id', '=', tutor_id)
                .first()
                .select(['id']);


            await trx('pets').insert({
                name,
                species,
                breed,
                age,
                gender,
                tutor_id: tutor.id,
                profissional_id,
                code
            });


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