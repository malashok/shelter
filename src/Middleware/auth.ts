import * as jwt from "jsonwebtoken"
import { Jwt, JwtPayload, JwtHeader} from "jsonwebtoken"
import {NextFunction, Request, Response} from "express"
import DecodedToken from "../Models/DecodedToken"

async function auth(req: Request, res: Response, next: NextFunction) {
    try {
        const token = req.headers.authorization?.split(" ")[1]
        if (!token) {
            return res.status(401).json({ message: "Unauthorized" })
        }
        const decoded = jwt.verify(token, "your_secret_key") as DecodedToken
        req.body.userId = decoded.userId

        next()
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" })
    }
}


