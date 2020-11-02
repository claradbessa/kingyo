import { Request, Response } from 'express';

const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

import db from '../database/connection';

export default class ClassesController {

    async register(request: Request, response: Response) {
        const {
            email,
            password
        } = request.body;


        const saltRounds = 10;
        const hash = bcrypt.hashSync(password, saltRounds);

        try {

            const existUser = await db('users').where('email', '=', email);
            console.log(existUser);

            if (existUser.length !== 0) {
                return response.status(400).json({ error: "User already exists" });
            }

            await db('users').insert({
                email,
                password: hash
            });

            return response.status(201).send();

        } catch (err) {

            return response.status(400).json({
                error: 'Unexpected error while creating new user'
            });
        }
    }

    async authenticate(request: Request, response: Response) {
        try {
            const {
                email,
                password
            } = request.body;

            console.log(email)

            const user = await db('users').where('email', '=', email).first();

            if (!user) {
                return response.status(400).json({ error: "User not found" });
            }

            const compareHash = await bcrypt.compare(password, user.password);
            
            if (!compareHash) {
                return response.status(400).json({ error: "Invalid password" });
            }

            const token = jwt.sign({ id: user.id }, "secret", {
                expiresIn: 86400
              });

            return response.json({
                user,
                token
            });
        } catch (err) {
            return response.status(400).json({ error: "User authentication failed" });
        }
    }

}