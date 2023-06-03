import { Injectable } from '@nestjs/common';

import {VolunteeringRequestDto} from "../Models/Dto/VolunteeringRequestDto";
import {VolunteeringRequestEntity} from "../Models/entity/VolunteeringRequest.entity";

@Injectable()
export class VolunteeringRequestService {
    public async getAll(): Promise<VolunteeringRequestEntity[]> {
        const res: VolunteeringRequestEntity[] = await VolunteeringRequestEntity.find();
        return res;
    }
    public async createVolunteering(volunteeringEntity: VolunteeringRequestDto): Promise<VolunteeringRequestEntity> {
        const createdEntity: VolunteeringRequestEntity = VolunteeringRequestEntity.create(volunteeringEntity);
        console.log(createdEntity);
        return await createdEntity.save();
    }
}

