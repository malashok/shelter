import { Injectable } from '@nestjs/common';
import axios from 'axios';
import {PetsEntity} from "../Models/entity/Pets.entity";
import {PetRequestDto} from "../Models/Dto/PetRequestDto";
import {PetRequestsEntity} from "../Models/entity/PetRequests.entity";

@Injectable()
export class PetsService {
    public async getAll(): Promise<PetsEntity[]> {
        const res: PetsEntity[] = await PetsEntity.find({ where: { isActive: true } });
        return res;
    }

    public async postPetRequest(petRequestDto: PetRequestDto): Promise<PetRequestsEntity>{
        const petRequest: PetRequestsEntity = PetRequestsEntity.create(petRequestDto);
        console.log(petRequest);
        return await petRequest.save();
    }

}

