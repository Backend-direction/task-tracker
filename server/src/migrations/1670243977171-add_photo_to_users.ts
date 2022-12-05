import { MigrationInterface, QueryRunner } from "typeorm";

export class addPhotoToUsers1670243977171 implements MigrationInterface {
    name = 'addPhotoToUsers1670243977171'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "photo" character varying(256) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "photo"`);
    }

}
