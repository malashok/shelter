import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'pets' })
export class PetsEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    private id: number;

    @Column({ type: 'varchar' })
    public name: string;

    @Column({ type: 'smallint' })
    public age: number;

    @Column({ type: 'varchar' })
    public photo: string;

    @Column({type: 'varchar'})
    public address: string;

    @Column({type: 'text'})
    public description: string;

    @Column({type: 'boolean'})
    public isActive: boolean;
}

