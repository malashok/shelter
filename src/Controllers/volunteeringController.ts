import {Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe} from "@nestjs/common";
import {VolunteeringService} from "../Services/volunteeringService";
import {VolunteeringEntity} from "../Models/entity/Volunteering.entity";
import {VolunteeringDto} from "../Models/Dto/VolunteeringDto";
import {PetsEntity} from "../Models/entity/Pets.entity";

@Controller('volunteering')
export class VolunteeringController {
    constructor(protected readonly service: VolunteeringService) {}

    @Get()
    public async getAll(): Promise<VolunteeringEntity[]> {
        return await this.service.getAll();
    }

    @Get(':id')
    public async getPet(@Param('id') id:number): Promise<VolunteeringEntity | undefined> {
        return await this.service.getById(id);
    }

    @Post()
    public async createVolunteering(@Body() volunteeringEntity: VolunteeringDto): Promise<VolunteeringEntity> {
        console.log(volunteeringEntity);
        return await this.service.createVolunteering(volunteeringEntity);
    }

    @Patch(':id')
    public async updateVolunteeringPeople(@Param('id') id: number): Promise<VolunteeringEntity> {
        return await this.service.updateVolunteeringPeople(id);
    }
    @Patch('change/:id')
    public async changeVolunteering(@Param('id') id: number, @Body() volunteeringEntity: VolunteeringDto): Promise<VolunteeringEntity> {
        return await this.service.changeVolunteering(id, volunteeringEntity);
    }
    @Delete(':id')
    public async delete(@Param('id') id:number): Promise<VolunteeringEntity> {
        return await this.service.delete(id);
    }
}
