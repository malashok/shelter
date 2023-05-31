import { Module } from '@nestjs/common';
import {PetsModule} from "./Modules/pets.modules";
import {ConfigModule} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";
import {VolunteeringModule} from "./Modules/volunteering.module";

@Module({
    imports: [VolunteeringModule, PetsModule, ConfigModule.forRoot({ isGlobal: true }),
        TypeOrmModule.forRoot(),
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
