import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'managers' })
export class ManagersEntity extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    public id: number;

    @Column({ type: 'text' })
    public name: string;

    @Column({ type: 'text' })
    public login: string;

    @Column({type: 'text'})
    public password: string;
}

