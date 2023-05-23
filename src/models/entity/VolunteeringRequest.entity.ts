import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {VolunteeringEntity} from "./Volunteering.entity";

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

    @ManyToOne(() => VolunteeringEntity, (v)=>v.id)
    @JoinColumn()
    @Column({name: 'volunteering_id'})
    public petId: VolunteeringEntity;

}
