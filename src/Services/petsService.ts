import { Injectable } from '@nestjs/common';
import axios from 'axios';
import {PetsEntity} from "../Models/entity/Pets.entity";

@Injectable()
export class PetsService {
    public async getAll(): Promise<PetsEntity[]> {
        const res: PetsEntity[] = await PetsEntity.find({ where: { isActive: true } });
        return res;
    }

    // public async postCourseFeedback(code: number, dto: Dto): Promise<CourseFeedback> {
    //     const feedback: CourseFeedback = CourseFeedback.create();
    //     feedback.courseId = code;
    //     feedback.rating = dto.rating;
    //     feedback.text = dto.text;
    //     return await feedback.save();
    // }
}

