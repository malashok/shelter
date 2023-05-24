import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'pets' })
export class PetsEntity extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    public id: number;

    @Column({ type: 'text' })
    public name: string;

    @Column({ type: 'smallint' })
    public age: number;

    @Column({ type: 'text' })
    public photo: string;

    @Column({type: 'text'})
    public address: string;

    @Column({type: 'text'})
    public description: string;

    @Column({type: 'text'})
    public breed: string;

    @Column({type: 'boolean'})
    public isActive: boolean;
}

