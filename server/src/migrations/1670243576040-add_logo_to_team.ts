import { MigrationInterface, QueryRunner } from "typeorm";

export class addLogoToTeam1670243576040 implements MigrationInterface {
    name = 'addLogoToTeam1670243576040'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "teams" ADD "logo" character varying(128) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "teams" DROP COLUMN "logo"`);
    }

}
