import {Body, Controller, Get, Param, Patch, Post, ValidationPipe} from "@nestjs/common";
import {VolunteeringRequestEntity} from "../Models/entity/VolunteeringRequest.entity";
import {VolunteeringRequestService} from "../Services/VolunteeringRequestService";
import {VolunteeringRequestDto} from "../Models/Dto/VolunteeringRequestDto";

@Controller('request.volunteering')
export class VolunteeringRequestController {
    constructor(protected readonly service: VolunteeringRequestService) {}

    @Get()
    public async getAll(): Promise<VolunteeringRequestEntity[]> {
        return await this.service.getAll();
    }

    @Post()
    public async createVolunteering(@Body() volunteeringRequest: VolunteeringRequestDto): Promise<VolunteeringRequestEntity> {
        console.log(volunteeringRequest);
        return await this.service.createVolunteering(volunteeringRequest);
    }
}
