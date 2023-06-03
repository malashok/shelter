import {Body, Controller, Get, Param, Patch, Post, ValidationPipe} from "@nestjs/common";
import {VolunteeringService} from "../Services/volunteeringService";
import {VolunteeringEntity} from "../Models/entity/Volunteering.entity";
import {VolunteeringDto} from "../Models/Dto/VolunteeringDto";

@Controller('volunteering')
export class VolunteeringController {
    constructor(protected readonly service: VolunteeringService) {}

    @Get()
    public async getAll(): Promise<VolunteeringEntity[]> {
        return await this.service.getAll();
    }

    @Post()
    public async createVolunteering(@Body() volunteeringEntity: VolunteeringDto): Promise<VolunteeringEntity> {
        console.log(volunteeringEntity);
        return await this.service.createVolunteering(volunteeringEntity);
    }

    @Patch(':id')
    public async updateVolunteering(@Param('id') id: number): Promise<VolunteeringEntity> {
        return await this.service.updateVolunteering(id);
    }
}
