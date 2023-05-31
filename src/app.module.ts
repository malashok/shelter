import { Module } from '@nestjs/common';
import {PetsModule} from "./Modules/pets.modules";
import {ConfigModule} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
    imports: [PetsModule, ConfigModule.forRoot({ isGlobal: true }),
        TypeOrmModule.forRoot(),
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
