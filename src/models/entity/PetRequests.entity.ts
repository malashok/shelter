import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {PetsEntity} from "./Pets.entity";

@Entity({ name: 'pet_requests' })
export class PetRequestsEntity extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    public id: number;

    @Column({ type: 'text' })
    public name: string;

    @Column({ type: 'text' })
    public phone: string;

    @Column({ type: 'text', nullable: true })
    public email?: string;

    @ManyToOne(() => PetsEntity,(p) => p.id)
    @JoinColumn()
    @Column({ name: 'pet_id' })
    public petId: PetsEntity;
}
