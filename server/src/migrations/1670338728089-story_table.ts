import { MigrationInterface, QueryRunner } from "typeorm";

export class storyTable1670338728089 implements MigrationInterface {
    name = 'storyTable1670338728089'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."story_status_enum" AS ENUM('new', 'ready', 'active', 'blocked', 'review', 'done')`);
        await queryRunner.query(`CREATE TABLE "story" ("id" SERIAL NOT NULL, "name" character varying(256) NOT NULL, "description" character varying(2048) NOT NULL, "status" "public"."story_status_enum" NOT NULL DEFAULT 'new', "estimate" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "projectId" integer, "memberId" integer, CONSTRAINT "PK_28fce6873d61e2cace70a0f3361" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "story" ADD CONSTRAINT "FK_8818a2970b0cda6b5c902fa77f0" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "story" ADD CONSTRAINT "FK_5ec23c9e37336ffda20a78b8bb5" FOREIGN KEY ("memberId") REFERENCES "members"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "story" DROP CONSTRAINT "FK_5ec23c9e37336ffda20a78b8bb5"`);
        await queryRunner.query(`ALTER TABLE "story" DROP CONSTRAINT "FK_8818a2970b0cda6b5c902fa77f0"`);
        await queryRunner.query(`DROP TABLE "story"`);
        await queryRunner.query(`DROP TYPE "public"."story_status_enum"`);
    }

}
