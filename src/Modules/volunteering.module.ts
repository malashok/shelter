import { Module } from '@nestjs/common';
import {VolunteeringController} from "../Controllers/volunteeringController";
import {VolunteeringService} from "../Services/volunteeringService";

@Module({
    imports: [],
    controllers: [VolunteeringController],
    providers: [VolunteeringService],
})
export class VolunteeringModule {}
