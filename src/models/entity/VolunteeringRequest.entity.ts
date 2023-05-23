import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {VolunteeringEntity} from "./Volunteering.entity";

@Entity({ name: 'volunteering_requests' })
export class VolunteeringRequestEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ type: 'string' })
    public name: string;

    @Column({ type: 'string' })
    public phone: string;

    @Column({ type: 'string' })
    public email?: string;

    @ManyToOne(()=> VolunteeringEntity)
    @JoinColumn()
    @Column({name: 'volunteering_id'})
    public petId: VolunteeringEntity;

}