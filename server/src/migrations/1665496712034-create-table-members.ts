import { MigrationInterface, QueryRunner } from "typeorm";

export class createTableMembers1665496712034 implements MigrationInterface {
    name = 'createTableMembers1665496712034'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "members" ("id" SERIAL NOT NULL, "teamId" integer, CONSTRAINT "PK_28b53062261b996d9c99fa12404" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "members" ADD CONSTRAINT "FK_b0fe0d62c4fd4633321fdf9616f" FOREIGN KEY ("teamId") REFERENCES "teams"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "members" DROP CONSTRAINT "FK_b0fe0d62c4fd4633321fdf9616f"`);
        await queryRunner.query(`DROP TABLE "members"`);
    }

}
