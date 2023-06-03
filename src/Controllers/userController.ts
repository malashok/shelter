import * as bcrypt from "bcrypt"
import * as jwt from "jsonwebtoken"
import {Request, Response} from "express"
import {ManagersEntity} from "../Models/entity/Managers.entity"
import LoginRequest from "../Models/LoginRequest"
import {Body, Controller, Get, HttpCode, HttpStatus, Post, Res} from "@nestjs/common";

@Controller('auth')
export class UserController {
    @HttpCode(HttpStatus.OK)
    @Post()
    async signIn(@Body() data: LoginRequest, @Res() res: Response) {
        try {
            if (!data) {
                return res.status(400).send('Invalid request');
            }
            const manager = await ManagersEntity.findOne({login: data.login});
            if (!manager) {
                return res.status(401).send('Invalid login');
            }

            //const match = await bcrypt.compare(data.password, manager.password);
            const match = await ManagersEntity.findOne({password: data.password})
            if (!match) {
                return res.status(401).send('Invalid password');
            }

            const token = jwt.sign({userId: manager.id}, 'your-secret-key');
            return res.status(200).json({token});
        } catch (error) {
            console.error('Error in signIn:', error);
            return res.status(500).json({error: 'Internal server error'});
        }
    }
}

