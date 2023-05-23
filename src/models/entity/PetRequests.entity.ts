import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {PetsEntity} from "./Pets.entity";

@Entity({ name: 'pet_requests' })
export class PetRequestsEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ type: 'varchar' })
    public name: string;

    @Column({ type: 'varchar' })
    public phone: string;

    @Column({ type: 'varchar', nullable: true })
    public email?: string;

    @ManyToOne(()=> PetsEntity)
    @JoinColumn()
    @Column({name: 'pet_id'})
    public petId: PetsEntity;

}
