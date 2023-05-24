import {MigrationInterface, QueryRunner} from "typeorm";

export class Shelter1684944401763 implements MigrationInterface {
    name = 'Shelter1684944401763'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pets" ADD "breed" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pets" DROP COLUMN "breed"`);
    }

}
