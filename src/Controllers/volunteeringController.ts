import {Controller, Get, Param} from "@nestjs/common";
import {PetsEntity} from "../Models/entity/Pets.entity";
import {PetsService} from "../Services/petsService";
import {VolunteeringService} from "../Services/volunteeringService";
import {VolunteeringEntity} from "../Models/entity/Volunteering.entity";

@Controller('volunteering')
export class VolunteeringController {
    constructor(protected readonly service: VolunteeringService) {}

    // @Post(':code/review')
    // public async postCourseReview(
    //     @Param('code', ParseIntPipe) code: number,
    //     @Body(new ValidationPipe()) dto: Dto
    // ): Promise<CourseFeedback> {
    //     return this.service.postCourseFeedback(code, dto);
    // }

    @Get()
    public async getAll(): Promise<VolunteeringEntity[]> {
        return await this.service.getAll();
    }

    // @Get(':code')
    // public async getCourse(@Param('code') code: number): Promise<unknown> {
    //     // eslint-disable-next-line @typescript-eslint/no-var-requires
    //     require('https').globalAgent.options.rejectUnauthorized = false;
    //     return this.service.getCourse(code).catch((err) => {
    //         const errorCode = err?.response?.status;
    //         if (errorCode == 404) {
    //             throw new NotFoundException('Not Found');
    //         } else if (errorCode == 400) {
    //             throw new BadRequestException('Bad Request');
    //         } else if (errorCode == 500) {
    //             throw new InternalServerErrorException('Internal Server Error');
    //         }
    //     });
    // }
}
