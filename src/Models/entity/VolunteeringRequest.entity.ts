import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {VolunteeringEntity} from "./Volunteering.entity";
import {PetsEntity} from "./Pets.entity";

@Entity({ name: 'volunteering_requests' })
export class VolunteeringRequestEntity extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    public id: number;

    @Column({ type: 'text' })
    public name: string;

    @Column({ type: 'text' })
    public phone: string;

    @Column({ type: 'text', nullable: true })
    public email?: string;

    @Column({ name: 'volunteering_id' })
    public volunteeringId: number; // Assuming the ID is a number

    @ManyToOne(() => VolunteeringEntity, (v) => v.id)
    @JoinColumn({ name: 'volunteering_id' })
    public volunteering: PetsEntity; // Establishing the relationship with PetsEntity

}
