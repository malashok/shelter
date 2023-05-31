import { Module } from '@nestjs/common';
import {PetsController} from "../Controllers/petsController";
import {PetsService} from "../Services/petsService";

@Module({
    imports: [],
    controllers: [PetsController],
    providers: [PetsService],
})
export class PetsModule {}
