import { MigrationInterface, QueryRunner } from "typeorm";

export class addRelationsProjectToTeamToProductOwners1670245944216 implements MigrationInterface {
    name = 'addRelationsProjectToTeamToProductOwners1670245944216'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "projects" DROP COLUMN "product_owner_id"`);
        await queryRunner.query(`ALTER TABLE "projects" DROP COLUMN "team_id"`);
        await queryRunner.query(`ALTER TABLE "projects" ADD "productOwnerId" integer`);
        await queryRunner.query(`ALTER TABLE "projects" ADD "teamId" integer`);
        await queryRunner.query(`ALTER TABLE "projects" ADD CONSTRAINT "UQ_2f789e58a882d8dd5b936c747c2" UNIQUE ("teamId")`);
        await queryRunner.query(`ALTER TABLE "projects" ADD CONSTRAINT "FK_55f6d3c691f32666898a46dbd67" FOREIGN KEY ("productOwnerId") REFERENCES "product_owners"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "projects" ADD CONSTRAINT "FK_2f789e58a882d8dd5b936c747c2" FOREIGN KEY ("teamId") REFERENCES "teams"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "projects" DROP CONSTRAINT "FK_2f789e58a882d8dd5b936c747c2"`);
        await queryRunner.query(`ALTER TABLE "projects" DROP CONSTRAINT "FK_55f6d3c691f32666898a46dbd67"`);
        await queryRunner.query(`ALTER TABLE "projects" DROP CONSTRAINT "UQ_2f789e58a882d8dd5b936c747c2"`);
        await queryRunner.query(`ALTER TABLE "projects" DROP COLUMN "teamId"`);
        await queryRunner.query(`ALTER TABLE "projects" DROP COLUMN "productOwnerId"`);
        await queryRunner.query(`ALTER TABLE "projects" ADD "team_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "projects" ADD "product_owner_id" integer NOT NULL`);
    }

}
