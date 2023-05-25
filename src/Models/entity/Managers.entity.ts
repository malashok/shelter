import {BaseEntity, BeforeInsert, Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import * as bcrypt from "bcrypt"

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

    @BeforeInsert()
    hashPassword() {
        this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync())
    }
}

