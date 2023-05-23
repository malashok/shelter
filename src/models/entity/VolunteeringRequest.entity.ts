import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {VolunteeringEntity} from "./Volunteering.entity";

@Entity({ name: 'volunteering_requests' })
export class VolunteeringRequestEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ type: 'varchar' })
    public name: string;

    @Column({ type: 'varchar' })
    public phone: string;

    @Column({ type: 'varchar', nullable: true })
    public email?: string;

    @ManyToOne(()=> VolunteeringEntity)
    @JoinColumn()
    @Column({name: 'volunteering_id'})
    public petId: VolunteeringEntity;

}
