import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'managers' })
export class ManagersEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    private id: number;

    @Column({ type: 'varchar' })
    public name: string;

    @Column({ type: 'varchar' })
    public login: string;

    @Column({type: 'varchar'})
    public password: string;
}

