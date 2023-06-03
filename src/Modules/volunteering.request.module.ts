import { Module } from '@nestjs/common';
import {VolunteeringRequestController} from "../Controllers/volunteeringRequestController";
import {VolunteeringRequestService} from "../Services/VolunteeringRequestService";


@Module({
    imports: [],
    controllers: [VolunteeringRequestController],
    providers: [VolunteeringRequestService],
})
export class VolunteeringRequestModule {}
