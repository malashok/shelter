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
        const createdEntity: VolunteeringEntity = VolunteeringEntity.create(volunteeringEntity);
        console.log(createdEntity);
        return await createdEntity.save();
    }
    public async updateVolunteering(id:number): Promise<VolunteeringEntity> {
        const v = await VolunteeringEntity.findOne({id});
        if (!v) {
            throw new Error('Volunteering with this id isn`t exist');
        }
        v.numberOfPeople = v.numberOfPeople-1;
        return await v.save();
    }
}

