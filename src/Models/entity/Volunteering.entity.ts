import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'volunteering' })
export class VolunteeringEntity extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    public id: number;

    @Column({ type: 'varchar' })
    public title: string;

    @Column({ type: 'timestamp' })
    public date: Date = new Date();

    @Column({ name: 'number_of_people', type: 'int' })
    public numberOfPeople: number;

    @Column({type: 'varchar'})
    public address: string;

    @Column({type: 'varchar'})
    public description: string;
}

