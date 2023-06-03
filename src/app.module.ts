import { Module } from '@nestjs/common';
import {PetsModule} from "./Modules/pets.modules";
import {ConfigModule} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";
import {VolunteeringModule} from "./Modules/volunteering.module";
import {VolunteeringRequestModule} from "./Modules/volunteering.request.module";
import {UserModule} from "./Modules/user.modules";

@Module({
    imports: [VolunteeringModule, UserModule, PetsModule, VolunteeringRequestModule,ConfigModule.forRoot({ isGlobal: true }),
        TypeOrmModule.forRoot(),
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
