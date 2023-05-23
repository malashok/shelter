import {MigrationInterface, QueryRunner} from "typeorm";

export class Shelter1684853343588 implements MigrationInterface {
    name = 'Shelter1684853343588'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "volunteering" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "date" date NOT NULL, "number_of_people" integer NOT NULL, "address" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_487db50c55cf4016b9fa58f00ae" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pets" ("id" SERIAL NOT NULL, "name" text NOT NULL, "age" smallint NOT NULL, "photo" text NOT NULL, "address" text NOT NULL, "description" text NOT NULL, "isActive" boolean NOT NULL, CONSTRAINT "PK_d01e9e7b4ada753c826720bee8b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pet_requests" ("id" SERIAL NOT NULL, "name" text NOT NULL, "phone" text NOT NULL, "email" text, "pet_id" integer NOT NULL, CONSTRAINT "PK_21a11eabbd1ebaca9fcd619ea88" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "volunteering_requests" ("id" SERIAL NOT NULL, "name" text NOT NULL, "phone" text NOT NULL, "email" text, "volunteering_id" integer NOT NULL, CONSTRAINT "PK_7c30c95d89abdd1b43653bd92c8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "managers" ("id" SERIAL NOT NULL, "name" text NOT NULL, "login" text NOT NULL, "password" text NOT NULL, CONSTRAINT "PK_e70b8cc457276d9b4d82342a8ff" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "pet_requests" ADD CONSTRAINT "FK_802a13875a8f2b8c248d6430597" FOREIGN KEY ("pet_id") REFERENCES "pets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "volunteering_requests" ADD CONSTRAINT "FK_0acbf8e5f3f8b72d1b8abab7336" FOREIGN KEY ("volunteering_id") REFERENCES "volunteering"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "volunteering_requests" DROP CONSTRAINT "FK_0acbf8e5f3f8b72d1b8abab7336"`);
        await queryRunner.query(`ALTER TABLE "pet_requests" DROP CONSTRAINT "FK_802a13875a8f2b8c248d6430597"`);
        await queryRunner.query(`DROP TABLE "managers"`);
        await queryRunner.query(`DROP TABLE "volunteering_requests"`);
        await queryRunner.query(`DROP TABLE "pet_requests"`);
        await queryRunner.query(`DROP TABLE "pets"`);
        await queryRunner.query(`DROP TABLE "volunteering"`);
    }

}
