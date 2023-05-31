import {MigrationInterface, QueryRunner} from "typeorm";

export class Shelter1685027056882 implements MigrationInterface {
    name = 'Shelter1685027056882'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pets" ADD "type" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pets" ADD "sex" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pets" DROP COLUMN "sex"`);
        await queryRunner.query(`ALTER TABLE "pets" DROP COLUMN "type"`);
    }

}
