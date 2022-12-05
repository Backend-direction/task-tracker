import { MigrationInterface, QueryRunner } from "typeorm";

export class addTeamIdProductOwnerIdToProjectTable1670241894524 implements MigrationInterface {
    name = 'addTeamIdProductOwnerIdToProjectTable1670241894524'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "projects" ADD "product_owner_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "projects" ADD "team_id" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "projects" DROP COLUMN "team_id"`);
        await queryRunner.query(`ALTER TABLE "projects" DROP COLUMN "product_owner_id"`);
    }

}
