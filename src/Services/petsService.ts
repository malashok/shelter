import {Injectable} from '@nestjs/common';
import {PetsEntity} from "../Models/entity/Pets.entity";
import {PetRequestDto} from "../Models/Dto/PetRequestDto";
import {PetRequestsEntity} from "../Models/entity/PetRequests.entity";
import {PetDto} from "../Models/Dto/PetDto";

@Injectable()
export class PetsService {
    public async getAll(): Promise<PetsEntity[]> {
        return await PetsEntity.find({where: {isActive: true}});
    }

    public async getAllReq(): Promise<PetRequestsEntity[]> {
        return await PetRequestsEntity.find();
    }

    public async getPet(code:number): Promise<PetsEntity | undefined> {
        return await PetsEntity.findOne({where: {id: code}});
    }

    public async updatePet(code: number, newPet: PetDto):Promise<PetsEntity>{
        const pet: PetsEntity | undefined = await PetsEntity.findOne({where: {id: code}});
        if (!pet) {
            throw new Error('Pet not found');
        }
        Object.assign(pet, newPet);
        return await pet.save();
    }

    public async postPetRequest(petRequestDto: PetRequestDto): Promise<PetRequestsEntity>{
        const petRequest: PetRequestsEntity = PetRequestsEntity.create(petRequestDto);
        console.log(petRequest);
        return await petRequest.save();
    }

    public async postPet(petDto: PetDto): Promise<PetsEntity>{
        const pet: PetsEntity = PetsEntity.create(petDto);
        console.log(pet);
        return await pet.save();
    }

    public async deletePet(code:number): Promise<PetsEntity>{
        const pet: PetsEntity | undefined = await PetsEntity.findOne({where: {id: code}});
        if (!pet) {
            throw new Error('Pet not found');
        }
        console.log(pet);
        return await pet.remove();
    }

    public async deletePetReq(code:number): Promise<PetRequestsEntity>{
        const petReq: PetRequestsEntity | undefined = await PetRequestsEntity.findOne({where: {id: code}});
        if (!petReq) {
            throw new Error('Pet not found');
        }
        console.log(petReq);
        return await petReq.remove();
    }

}

