import { Module } from '@nestjs/common';
import {UserController} from "../Controllers/userController";

@Module({
    imports: [],
    controllers: [UserController],
    providers: [],
})
export class UserModule {}
