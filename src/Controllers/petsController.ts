import {Body, Controller, Get, Param, Post} from "@nestjs/common";
import {PetsEntity} from "../Models/entity/Pets.entity";
import {PetsService} from "../Services/petsService";
import {PetRequestsEntity} from "../Models/entity/PetRequests.entity";
import {PetRequestDto} from "../Models/Dto/PetRequestDto";

@Controller('pets')
export class PetsController {
    constructor(protected readonly service: PetsService) {}

    // @Post(':code/review')
    // public async postCourseReview(
    //     @Param('code', ParseIntPipe) code: number,
    //     @Body(new ValidationPipe()) dto: Dto
    // ): Promise<CourseFeedback> {
    //     return this.service.postCourseFeedback(code, dto);
    // }

    @Get()
    public async getAll(): Promise<PetsEntity[]> {
        return await this.service.getAll();
    }

    @Post('/request')
    public async postPetRequest(@Body() petRequestDto:PetRequestDto): Promise<PetRequestsEntity>{
        return this.service.postPetRequest(petRequestDto);
    }

}
