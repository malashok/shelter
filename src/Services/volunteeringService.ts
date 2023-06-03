import { Injectable } from '@nestjs/common';
import axios from 'axios';
import {VolunteeringEntity} from "../Models/entity/Volunteering.entity";
import {VolunteeringDto} from "../Models/Dto/VolunteeringDto";

@Injectable()
export class VolunteeringService {
    public async getAll(): Promise<VolunteeringEntity[]> {
        const res: VolunteeringEntity[] = await VolunteeringEntity.find();
        return res;
    }
    public async createVolunteering(volunteeringEntity: VolunteeringDto): Promise<VolunteeringEntity> {
        const createdEntity: VolunteeringEntity = VolunteeringEntity.create();
        createdEntity.title = volunteeringEntity.title;
        createdEntity.address = volunteeringEntity.address;
        createdEntity.description = volunteeringEntity.description;
        createdEntity.numberOfPeople = volunteeringEntity.numberOfPeople;
        createdEntity.date = volunteeringEntity.date;
        return await createdEntity.save();
    }
}

