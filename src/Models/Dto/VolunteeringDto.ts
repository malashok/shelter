import {Column, PrimaryGeneratedColumn} from "typeorm";

export class VolunteeringDto{
     title: string;
     date: Date = new Date();
     numberOfPeople: number;
     address: string;
     description: string;
}
