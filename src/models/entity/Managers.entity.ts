import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'managers' })
export class ManagersEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    private id: number;

    @Column({ type: 'string' })
    public name: string;

    @Column({ type: 'string' })
    public login: string;

    @Column({type: 'string'})
    public password: string;
}

