import { Injectable } from '@nestjs/common';
import axios from 'axios';
import {VolunteeringEntity} from "../Models/entity/Volunteering.entity";

@Injectable()
export class VolunteeringService {
    public async getAll(): Promise<VolunteeringEntity[]> {
        const res: VolunteeringEntity[] = await VolunteeringEntity.find();
        return res;
    }
}

