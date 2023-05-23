import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'volunteering' })
export class VolunteeringEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    private id: number;

    @Column({ type: 'string' })
    public title: string;

    @Column({ type: 'date' })
    public date: Date = new Date();

    @Column({ name: 'number_of_people', type: 'number' })
    public numberOfPeople: number;

    @Column({type: 'string'})
    public address: string;

    @Column({type: 'text'})
    public description: string;
}

