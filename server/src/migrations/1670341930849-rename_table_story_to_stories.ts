import { MigrationInterface, QueryRunner } from "typeorm";

export class renameTableStoryToStories1670341930849 implements MigrationInterface {
    name = 'renameTableStoryToStories1670341930849'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."stories_status_enum" AS ENUM('new', 'ready', 'active', 'blocked', 'review', 'done')`);
        await queryRunner.query(`CREATE TABLE "stories" ("id" SERIAL NOT NULL, "name" character varying(256) NOT NULL, "description" character varying(2048) NOT NULL, "status" "public"."stories_status_enum" NOT NULL DEFAULT 'new', "estimate" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "projectId" integer, "memberId" integer, CONSTRAINT "PK_bb6f880b260ed96c452b32a39f0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "stories" ADD CONSTRAINT "FK_86ea141e78fd338b75460ba34ad" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "stories" ADD CONSTRAINT "FK_346018e71c1c4024bfb2f498ef8" FOREIGN KEY ("memberId") REFERENCES "members"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stories" DROP CONSTRAINT "FK_346018e71c1c4024bfb2f498ef8"`);
        await queryRunner.query(`ALTER TABLE "stories" DROP CONSTRAINT "FK_86ea141e78fd338b75460ba34ad"`);
        await queryRunner.query(`DROP TABLE "stories"`);
        await queryRunner.query(`DROP TYPE "public"."stories_status_enum"`);
    }

}
