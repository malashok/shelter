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
    public async updateVolunteeringPeople(id:number): Promise<VolunteeringEntity> {
        const v = await VolunteeringEntity.findOne({id});
        if (!v) {
            throw new Error('Volunteering with this id isn`t exist');
        }
        v.numberOfPeople = v.numberOfPeople-1;
        return await v.save();
    }
    public async changeVolunteering(id: number, volunteeringEntity: VolunteeringDto): Promise<VolunteeringEntity> {
        const v = await VolunteeringEntity.findOne({id})
        if (!v) {
            throw new Error('Volunteering with this id isn`t exist');
        }
        v.title = volunteeringEntity.title;
        v.numberOfPeople = volunteeringEntity.numberOfPeople;
        v.date = volunteeringEntity.date;
        v.address = volunteeringEntity.address;
        v.description = volunteeringEntity.description;
        return await v.save();
    }
    public async delete(id: number): Promise<VolunteeringEntity>{
        try {
            const volunteeringToDelete: VolunteeringEntity | undefined = await VolunteeringEntity.findOne(id);

            if (!volunteeringToDelete) {
                throw new Error(`Volunteering entity with ID ${id} not found.`);
            }
            await volunteeringToDelete.remove();
            return volunteeringToDelete;
        } catch (error) {
            console.error(`Error deleting volunteering entity`);
            throw error;
        }
    }
}

