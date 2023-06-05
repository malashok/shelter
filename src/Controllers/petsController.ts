import {Body, Controller, Delete, Get, Param, Patch, Post} from "@nestjs/common";
import {PetsEntity} from "../Models/entity/Pets.entity";
import {PetsService} from "../Services/petsService";
import {PetRequestsEntity} from "../Models/entity/PetRequests.entity";
import {PetRequestDto} from "../Models/Dto/PetRequestDto";
import {PetDto} from "../Models/Dto/PetDto";

@Controller('pets')
export class PetsController {
    constructor(protected readonly service: PetsService) {}


    @Get()
    public async getAll(): Promise<PetsEntity[]> {
        return await this.service.getAll();
    }
    @Get('/request')
    public async getAllRequests(): Promise<PetRequestsEntity[]> {
        return await this.service.getAllReq();
    }
    @Get(':code')
    public async getPet(@Param('code') code:number): Promise<PetsEntity | undefined> {
        return await this.service.getPet(code);
    }

    @Patch(':code')
    public async updatePet(@Param('code') code:number, @Body() newPet: PetDto): Promise<PetsEntity> {
        return await this.service.updatePet(code, newPet);
    }

    @Post('/request')
    public async postPetRequest(@Body() petRequestDto:PetRequestDto): Promise<PetRequestsEntity>{
        return this.service.postPetRequest(petRequestDto);
    }

    @Post('/add')
    public async postPet(@Body() petDto:PetDto): Promise<PetsEntity>{
        return this.service.postPet(petDto);
    }

    @Delete(':code/delete')
    public async deletePet(@Param('code') code: number): Promise<PetsEntity>{
        return this.service.deletePet(code);
    }
    @Delete(':code/req/delete')
    public async deletePetReq(@Param('code') code: number): Promise<PetRequestsEntity>{
        return this.service.deletePetReq(code);
    }

}
