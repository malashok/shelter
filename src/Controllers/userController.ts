import * as bcrypt from "bcrypt"
import * as jwt from "jsonwebtoken"
import {Request, Response} from "express"
import {ManagersEntity} from "../Models/entity/Managers.entity"
import LoginRequest from "../Models/LoginRequest"

async function signIn(req: Request, res: Response) {
    try {
        const data = req.body as LoginRequest
        if (!data) {
            return res.status(400).send("Invalid request")
        }
        let manager = await ManagersEntity.findOne({login: data.login})
        if (!manager) {
            return res.status(401).send("Invalid login")
        }

        let match = await bcrypt.compare(data.password, manager.password)
        if (!match) {
            return res.status(401).send("Invalid password")
        }

        const token = jwt.sign({userId: manager.id}, "your-secret-key")
        return res.status(200).json({token: token})
    } catch (error) {
        console.error("Error in signIn:", error)
        return res.status(500).json({error: "Internal server error"})
    }
}
