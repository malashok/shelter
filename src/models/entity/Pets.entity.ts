import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'pets' })
export class PetsEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    private id: number;

    @Column({ type: 'string' })
    public name: string;

    @Column({ type: 'smallint' })
    public age: number;

    @Column({ type: 'string' })
    public photo: string;

    @Column({type: 'string'})
    public address: string;

    @Column({type: 'text'})
    public description: string;

    @Column({type: 'boolean'})
    public isActive: boolean;
}

